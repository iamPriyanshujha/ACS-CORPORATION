import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { VideoBanner } from './components/VideoBanner';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BrandCards } from './components/BrandCards';
import { HeroSlider } from './components/HeroSlider';
import { ProductCatalog } from './components/ProductCatalog';
import { AboutSection } from './components/AboutSection';
import { FounderSection } from './components/FounderSection';
import { ContactForm } from './components/ContactForm';
import { FloatingWidgets } from './components/FloatingWidgets';
import { GoogleAuthModal } from './components/GoogleAuthModal';
import { CustomerPortalDrawer } from './components/CustomerPortalDrawer';
import { AdminControlDrawer } from './components/AdminControlDrawer';
import { PageHeader } from './components/PageHeader';
import { PrincipalsSection } from './components/PrincipalsSection';
import { HomeOverview } from './components/HomeOverview';
import { FeaturedProductSlider } from './components/FeaturedProductSlider';
import { ACSLogo } from './components/ACSLogo';
import { Footer } from './components/Footer';
import { LegalModals } from './components/LegalModals';
import { RequestQuoteModal } from './components/RequestQuoteModal';
import { RfqBasketDrawer } from './components/RfqBasketDrawer';
import { Enquiry, UserProfile, isAdminEmail, RfqBasketItem, Product } from './types';
import { 
  db, 
  auth, 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  onSnapshot, 
  onAuthStateChanged, 
  firebaseSignOut 
} from './lib/firebase';
import { ArrowRight, Award, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedBrandFilter, setSelectedBrandFilter] = useState('All');
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  // Auth & Drawer States
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCustomerPortalOpen, setIsCustomerPortalOpen] = useState(false);
  const [isAdminControlOpen, setIsAdminControlOpen] = useState(false);

  // Legal Modal States (Terms & Conditions / Privacy Policy)
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<'terms' | 'privacy'>('terms');

  // Instant Quote / RFQ Modal State
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteModalData, setQuoteModalData] = useState<{ brand?: string; product?: string }>({});

  // Multi-Item RFQ Basket State
  const [rfqBasket, setRfqBasket] = useState<RfqBasketItem[]>(() => {
    try {
      const saved = localStorage.getItem('acs_rfq_basket');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isRfqDrawerOpen, setIsRfqDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('acs_rfq_basket', JSON.stringify(rfqBasket));
    } catch {
      // ignore
    }
  }, [rfqBasket]);

  const handleToggleRfq = (product: Product) => {
    setRfqBasket(prev => {
      const exists = prev.some(item => item.product.id === product.id);
      if (exists) {
        return prev.filter(item => item.product.id !== product.id);
      } else {
        return [...prev, { product, quantity: '1 Can', addedAt: Date.now() }];
      }
    });
  };

  const handleUpdateBasketQuantity = (productId: string, quantity: string) => {
    setRfqBasket(prev => 
      prev.map(item => item.product.id === productId ? { ...item, quantity } : item)
    );
  };

  const handleRemoveFromBasket = (productId: string) => {
    setRfqBasket(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearBasket = () => {
    setRfqBasket([]);
  };

  const handleMultiItemRfqSubmit = async (data: {
    name: string;
    email: string;
    phone: string;
    company: string;
    location: string;
    items: { productName: string; brandName: string; quantity: string; hsnCode?: string }[];
    notes: string;
  }) => {
    const summaryItems = data.items.map((it, idx) => 
      `${idx + 1}. ${it.brandName} - ${it.productName} (Qty: ${it.quantity}${it.hsnCode ? `, HSN: ${it.hsnCode}` : ''})`
    ).join('\n');

    const combinedMessage = `[MULTI-ITEM RFQ BATCH INQUIRY]\n` +
      `Delivery Location: ${data.location || 'Pan-India NCR'}\n` +
      `Items Requested (${data.items.length}):\n${summaryItems}\n` +
      (data.notes ? `Special Technical Notes: ${data.notes}` : '');

    const newEnquiryData: Omit<Enquiry, 'id'> = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      productName: `${data.items.length} Products Batch Inquiry (${data.items.map(i => i.productName).slice(0, 2).join(', ')}${data.items.length > 2 ? '...' : ''})`,
      brandName: Array.from(new Set(data.items.map(i => i.brandName))).join(', '),
      message: combinedMessage,
      timestamp: new Date().toLocaleString(),
      status: 'Pending'
    };

    try {
      const docRef = await addDoc(collection(db, 'enquiries'), newEnquiryData);
      const newEnquiry: Enquiry = { id: docRef.id, ...newEnquiryData };
      const updated = [newEnquiry, ...enquiries];
      setEnquiries(updated);
      localStorage.setItem('acs_enquiries', JSON.stringify(updated));
    } catch (e) {
      const localEnquiry: Enquiry = { id: `lead-${Date.now()}`, ...newEnquiryData };
      const updated = [localEnquiry, ...enquiries];
      setEnquiries(updated);
      localStorage.setItem('acs_enquiries', JSON.stringify(updated));
    }
  };

  const handleOpenQuoteModal = (initialData?: { brand?: string; product?: string }) => {
    setQuoteModalData(initialData || {});
    setIsQuoteModalOpen(true);
  };

  const handleOpenTerms = () => {
    setLegalModalTab('terms');
    setIsLegalModalOpen(true);
  };

  const handleOpenPrivacy = () => {
    setLegalModalTab('privacy');
    setIsLegalModalOpen(true);
  };

  const isAdmin = isAdminEmail(currentUser?.email);

  // Dynamic SEO Title & Meta Description update per section
  useEffect(() => {
    const seoData: Record<string, { title: string; desc: string }> = {
      home: {
        title: "ACS Corporation - Industrial Lubricants & Engineering Supplies",
        desc: "ACS Corporation - Delhi NCR industrial supplier of specialty lubricants, greases, oils, and engineering solutions. Supplying plants all over India from D-53, Sec 08, Sangam Park, Khora, Ghaziabad, UP."
      },
      'why-us': {
        title: "Why Choose ACS Corporation - Authentic Sourcing & SCM Excellence",
        desc: "Discover why leading automotive, pharmaceutical, and engineering plants partner with ACS Corporation for quality lubricants, batch COA documentation, and all-over India supply."
      },
      brands: {
        title: "Authorized Brands | ACS Corporation - OKS, Klüber, 3M, Festo, Cortec, ACE",
        desc: "Authorized industrial supply partner for world-class engineering brands: OKS Spezialschmierstoffe, Klüber Lubrication München, 3M Industrial, Festo, Cortec, and ACE."
      },
      products: {
        title: "Specialty Lubricants & MRO Catalog | ACS Corporation - Greases, Oils, Sprays",
        desc: "Explore 200+ specialty industrial lubricants, synthetic greases, high-temp gear oils, NSF H1 food-grade pastes, and MRO maintenance sprays at ACS Corporation."
      },
      about: {
        title: "About ACS Corporation - Delhi NCR Premier Tribology Specialist",
        desc: "Profile and leadership of ACS Corporation - industrial partner with 30+ years team experience delivering premium tribology solutions across India."
      },
      founder: {
        title: "Meet Our Founder - Priyanshu Jha | ACS Corporation",
        desc: "Meet Priyanshu Jha, Founder of ACS Corporation. Learn about our founding vision, leadership values, and dedication to earning trust across industrial manufacturing in India."
      },
      contact: {
        title: "Contact & RFQ Quotation Desk | ACS Corporation - Ghaziabad, UP",
        desc: "Direct procurement desk for ACS Corporation at D-53, Sec 08, Sangam Park, Khora, Ghaziabad, UP. Call 011 7157 1463 or WhatsApp +91 7827976806 for immediate quotations, COA requests, and all-over India dispatch."
      }
    };

    const current = seoData[activeSection] || seoData.home;
    document.title = current.title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', current.desc);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', current.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', current.desc);
  }, [activeSection]);

  // 1. Firebase Auth listener & cached fallback
  useEffect(() => {
    // Initial local cache check
    const cachedUser = localStorage.getItem('acs_auth_user');
    if (cachedUser) {
      try {
        const parsed = JSON.parse(cachedUser);
        parsed.role = isAdminEmail(parsed.email) ? 'admin' : 'customer';
        if (parsed.picture && parsed.picture.includes('unsplash.com')) {
          parsed.picture = '';
        }
        setCurrentUser(parsed);
      } catch (e) {
        console.error("Error reading cached user:", e);
      }
    }

    // Subscribe to Firebase Auth state
    const unsubscribeAuth = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const email = firebaseUser.email || '';
        const isUserAdmin = isAdminEmail(email);
        const profile: UserProfile = {
          id: firebaseUser.uid,
          name: firebaseUser.displayName || (email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())),
          email: email.toLowerCase(),
          role: isUserAdmin ? 'admin' : 'customer',
          company: isUserAdmin ? 'ACS Corporation Management' : 'Industrial Client',
          loginProvider: 'google',
          picture: firebaseUser.photoURL || ''
        };
        setCurrentUser(profile);
        localStorage.setItem('acs_auth_user', JSON.stringify(profile));
      }
    });

    return () => unsubscribeAuth();
  }, []);

  // 2. Real-time Firestore sync with local fallback
  useEffect(() => {
    let unsubscribeFirestore: (() => void) | undefined;

    try {
      const enquiriesCol = collection(db, 'enquiries');
      unsubscribeFirestore = onSnapshot(
        enquiriesCol, 
        (snapshot) => {
          if (!snapshot.empty) {
            const remoteList: Enquiry[] = snapshot.docs.map(d => ({
              id: d.id,
              ...(d.data() as Omit<Enquiry, 'id'>)
            }));
            // Sort newest first
            remoteList.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
            setEnquiries(remoteList);
            localStorage.setItem('acs_enquiries', JSON.stringify(remoteList));
          } else {
            // Load local initial leads if Firestore collection is fresh
            loadLocalLeads();
          }
        },
        (error) => {
          console.warn("Firestore live sync note (using local cache):", error.message);
          loadLocalLeads();
        }
      );
    } catch (e) {
      console.warn("Firestore initialization fallback:", e);
      loadLocalLeads();
    }

    function loadLocalLeads() {
      const cached = localStorage.getItem('acs_enquiries');
      if (cached) {
        try {
          setEnquiries(JSON.parse(cached));
        } catch (err) {
          console.error("Error reading cached lead records:", err);
        }
      } else {
        const initialLeads: Enquiry[] = [
          {
            id: 'lead-1',
            name: 'Anil Vasudevan',
            email: 'a.vasu@indiapackaging.com',
            phone: '+91 94472 88102',
            company: 'India Packaging Solutions Ltd',
            productName: 'OKS 476',
            brandName: 'OKS',
            message: 'Looking for a bulk quote on 50 tubs of OKS 476 food-grade grease for our newly installed rotary filling machines in Okhla. Please provide lead times.',
            timestamp: new Date(Date.now() - 3600000 * 4).toLocaleString(),
            status: 'Contacted'
          },
          {
            id: 'lead-2',
            name: 'Sanjeev Goel',
            email: 'sanjeev@hightechgears.in',
            phone: '+91 98110 55421',
            company: 'HighTech Gears Pvt Ltd',
            productName: 'Klübersynth GH 6 Series',
            brandName: 'Klüber',
            message: 'Urgent requirement of ISO VG 220 viscosity grade Klübersynth GH 6 oil for worm drives. Require 2 drums (200L each). Provide pricing ex-warehouse Delhi.',
            timestamp: new Date(Date.now() - 3600000 * 24).toLocaleString(),
            status: 'Pending'
          }
        ];
        setEnquiries(initialLeads);
        localStorage.setItem('acs_enquiries', JSON.stringify(initialLeads));
      }
    }

    return () => {
      if (unsubscribeFirestore) unsubscribeFirestore();
    };
  }, []);

  const handleLoginSuccess = (user: UserProfile) => {
    setCurrentUser(user);
    localStorage.setItem('acs_auth_user', JSON.stringify(user));
    if (user.role === 'admin') {
      setIsAdminControlOpen(true);
    } else {
      setIsCustomerPortalOpen(true);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (e) {
      console.warn("Firebase signout fallback:", e);
    }
    setCurrentUser(null);
    localStorage.removeItem('acs_auth_user');
    setIsCustomerPortalOpen(false);
    setIsAdminControlOpen(false);
  };

  // Listen to URL hash changes for direct page links & browser back/forward buttons
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      const valid = ['home', 'why-us', 'brands', 'products', 'about', 'contact'];
      if (valid.includes(hash)) {
        setActiveSection(hash);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    const initialHash = window.location.hash.replace('#', '');
    if (['home', 'why-us', 'brands', 'products', 'about', 'contact'].includes(initialHash)) {
      setActiveSection(initialHash);
    }

    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const normalized = sectionId === 'principals' ? 'brands' : sectionId;
    setActiveSection(normalized);
    window.location.hash = normalized;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSelectBrand = (brandName: string) => {
    const filterKey = brandName === 'KLÜBER LUBRICATION' ? 'Klüber' : brandName;
    setSelectedBrandFilter(filterKey);
    setActiveSection('products');
    window.location.hash = 'products';
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleGeneralEnquiry = async (enq: { name: string; email: string; phone: string; company: string; message: string; subject?: string }) => {
    const newEnquiryData: Omit<Enquiry, 'id'> = {
      name: enq.name,
      email: enq.email,
      phone: enq.phone,
      company: enq.company,
      message: `${enq.subject ? `[${enq.subject}] ` : ''}${enq.message}`,
      timestamp: new Date().toLocaleString(),
      status: 'Pending'
    };

    try {
      const docRef = await addDoc(collection(db, 'enquiries'), newEnquiryData);
      const newEnquiry: Enquiry = { id: docRef.id, ...newEnquiryData };
      const updated = [newEnquiry, ...enquiries];
      setEnquiries(updated);
      localStorage.setItem('acs_enquiries', JSON.stringify(updated));
    } catch (e) {
      const localEnquiry: Enquiry = { id: `lead-${Date.now()}`, ...newEnquiryData };
      const updated = [localEnquiry, ...enquiries];
      setEnquiries(updated);
      localStorage.setItem('acs_enquiries', JSON.stringify(updated));
    }
  };

  const handleProductEnquiry = async (enq: { name: string; email: string; phone: string; company: string; productName: string; brandName: string; message: string }) => {
    const newEnquiryData: Omit<Enquiry, 'id'> = {
      name: enq.name,
      email: enq.email,
      phone: enq.phone,
      company: enq.company,
      productName: enq.productName,
      brandName: enq.brandName,
      message: enq.message,
      timestamp: new Date().toLocaleString(),
      status: 'Pending'
    };

    try {
      const docRef = await addDoc(collection(db, 'enquiries'), newEnquiryData);
      const newEnquiry: Enquiry = { id: docRef.id, ...newEnquiryData };
      const updated = [newEnquiry, ...enquiries];
      setEnquiries(updated);
      localStorage.setItem('acs_enquiries', JSON.stringify(updated));
    } catch (e) {
      const localEnquiry: Enquiry = { id: `lead-${Date.now()}`, ...newEnquiryData };
      const updated = [localEnquiry, ...enquiries];
      setEnquiries(updated);
      localStorage.setItem('acs_enquiries', JSON.stringify(updated));
    }
  };

  const handleQuoteModalSubmit = async (data: {
    name: string;
    email: string;
    phone: string;
    company: string;
    brandName: string;
    productName: string;
    quantity: string;
    message: string;
  }) => {
    await handleProductEnquiry({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      brandName: data.brandName,
      productName: data.productName,
      message: `${data.quantity ? `[Requirement Qty: ${data.quantity}] ` : ''}${data.message}`
    });
  };

  const handleToggleStatus = async (id: string) => {
    const target = enquiries.find(e => e.id === id);
    if (!target) return;
    const nextStatus = target.status === 'Contacted' ? ('Pending' as const) : ('Contacted' as const);

    const updated = enquiries.map((enq) => enq.id === id ? { ...enq, status: nextStatus } : enq);
    setEnquiries(updated);
    localStorage.setItem('acs_enquiries', JSON.stringify(updated));

    try {
      await updateDoc(doc(db, 'enquiries', id), { status: nextStatus });
    } catch (e) {
      // Handled locally
    }
  };

  const handleDeleteEnquiry = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this enquiry record?')) {
      const updated = enquiries.filter(e => e.id !== id);
      setEnquiries(updated);
      localStorage.setItem('acs_enquiries', JSON.stringify(updated));

      try {
        await deleteDoc(doc(db, 'enquiries', id));
      } catch (e) {
        // Handled locally
      }
    }
  };

  const handleUpdateNotes = async (id: string, notes: string) => {
    const updated = enquiries.map(e => e.id === id ? { ...e, notes } : e);
    setEnquiries(updated);
    localStorage.setItem('acs_enquiries', JSON.stringify(updated));

    try {
      await updateDoc(doc(db, 'enquiries', id), { notes });
    } catch (e) {
      // Handled locally
    }
  };

  const handleClearAllEnquiries = () => {
    if (window.confirm('Are you sure you want to clear all lead submission logs?')) {
      setEnquiries([]);
      localStorage.setItem('acs_enquiries', JSON.stringify([]));
    }
  };

  // Filter inquiries relevant to current customer
  const customerEnquiries = currentUser 
    ? enquiries.filter(e => e.email.toLowerCase() === currentUser.email.toLowerCase())
    : [];

  return (
    <div className="min-h-screen bg-[#060F1E] font-sans flex flex-col selection:bg-[#0284C7] selection:text-white relative text-slate-100 overflow-x-hidden w-full max-w-full">
      
      {/* Sleek, Compact Corporate Header */}
      <Header
        onNavigate={handleNavigate}
        activeSection={activeSection}
        onOpenGeneralEnquiry={() => handleOpenQuoteModal()}
        currentUser={currentUser}
        onOpenLogin={() => setIsAuthModalOpen(true)}
        onOpenCustomerPortal={() => setIsCustomerPortalOpen(true)}
        onOpenAdminPanel={() => setIsAdminControlOpen(true)}
        onLogout={handleLogout}
        isAdmin={isAdmin}
        leadsCount={enquiries.length}
        rfqCount={rfqBasket.length}
        onOpenRfqDrawer={() => setIsRfqDrawerOpen(true)}
      />

      {/* ======================================================== */}
      {/* --- PAGE 1: HOME --- */}
      {/* ======================================================== */}
      {activeSection === 'home' && (
        <main className="flex-1">
          <VideoBanner
            onExploreProducts={() => handleNavigate('products')}
            onOpenEnquiry={() => handleOpenQuoteModal()}
            onNavigateToAbout={() => handleNavigate('about')}
          />
          <HeroSlider
            onExploreProducts={() => handleNavigate('products')}
            onOpenEnquiry={() => handleOpenQuoteModal()}
            onNavigateToAbout={() => handleNavigate('about')}
          />
          <HomeOverview
            onNavigate={handleNavigate}
            onSelectBrand={handleSelectBrand}
            onOpenQuote={() => handleOpenQuoteModal()}
          />
          <FeaturedProductSlider
            onNavigate={handleNavigate}
            onSelectBrand={handleSelectBrand}
            onOpenQuote={handleOpenQuoteModal}
            rfqBasket={rfqBasket}
            onToggleRfq={handleToggleRfq}
          />
        </main>
      )}

      {/* ======================================================== */}
      {/* --- PAGE 2: WHY ACS --- */}
      {/* ======================================================== */}
      {activeSection === 'why-us' && (
        <main className="flex-1">
          <PageHeader
            title="Why Choose"
            highlightWord="ACS Corporation"
            category="Why ACS"
            badge="RELIABILITY & SOURCING INTEGRITY"
            subtitle="Discover our commitment to genuine direct factory sourcing, central NCR logistics at D-53, Sec 08, Sangam Park, Khora, Ghaziabad, UP, and specialized 30+ years tribology advisory supplying all over India."
            onNavigateHome={() => handleNavigate('home')}
          />
          <WhyChooseUs 
            onOpenEnquiry={() => handleOpenQuoteModal()}
            onExploreProducts={() => handleNavigate('products')}
          />
        </main>
      )}

      {/* ======================================================== */}
      {/* --- PAGE 3: BRANDS --- */}
      {/* ======================================================== */}
      {activeSection === 'brands' && (
        <main className="flex-1">
          <PageHeader
            title="Authorized"
            highlightWord="Principal Representation"
            category="Brands"
            badge="DIRECT FACTORY-SOURCED CHANNELS"
            subtitle="Official channel partnerships with global market leaders in industrial tribology, pneumatic automation, VCI packaging, and kinetic deceleration."
            onNavigateHome={() => handleNavigate('home')}
          />
          <BrandCards onSelectBrand={handleSelectBrand} />
          <PrincipalsSection
            onSelectBrand={handleSelectBrand}
            onOpenEnquiry={() => handleOpenQuoteModal()}
          />
        </main>
      )}

      {/* ======================================================== */}
      {/* --- PAGE 4: PRODUCTS CATALOG --- */}
      {/* ======================================================== */}
      {activeSection === 'products' && (
        <main className="flex-1">
          <PageHeader
            title="Specialty Tribology &"
            highlightWord="MRO Catalog"
            category="Products"
            badge="200+ AUTHENTIC INDUSTRIAL SKUS"
            subtitle="Search and filter high-performance OKS and Klüber greases, synthetic gear oils, NSF H1 food-grade pastes, and maintenance sprays with instant RFQ quotation requests."
            onNavigateHome={() => handleNavigate('home')}
          />
          <ProductCatalog
            selectedBrandFilter={selectedBrandFilter}
            setSelectedBrandFilter={setSelectedBrandFilter}
            onSubmitEnquiry={handleProductEnquiry}
            rfqBasket={rfqBasket}
            onToggleRfq={handleToggleRfq}
            onOpenRfqDrawer={() => setIsRfqDrawerOpen(true)}
          />
        </main>
      )}

      {/* ======================================================== */}
      {/* --- PAGE 5: ABOUT --- */}
      {/* ======================================================== */}
      {activeSection === 'about' && (
        <main className="flex-1">
          <PageHeader
            title="About"
            highlightWord="ACS Corporation"
            category="About Us"
            badge="ESTABLISHED INDUSTRIAL SPECIALIST • PAN-INDIA DELIVERY"
            subtitle="Delhi NCR–based industrial supplier providing quality products at competitive prices, with reliable sourcing, trusted customer service, and seamless, reliable door-to-plant delivery across India."
            onNavigateHome={() => handleNavigate('home')}
          />
          <AboutSection onNavigate={handleNavigate} />
        </main>
      )}

      {/* ======================================================== */}
      {/* --- PAGE: MEET OUR FOUNDER --- */}
      {/* ======================================================== */}
      {activeSection === 'founder' && (
        <main className="flex-1">
          <PageHeader
            title="Meet Our"
            highlightWord="Founder"
            category="Leadership"
            badge="FOUNDING VISION • COMMITMENT TO TRUST"
            subtitle="“Our goal is not simply to make a sale. It is to earn your trust, deliver on our promises, and build relationships that last.” — Priyanshu Jha, Founder, ACS Corporation"
            onNavigateHome={() => handleNavigate('home')}
          />
          <section className="bg-[#F8FAFC] py-12 md:py-20 px-4 md:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-8">
              <FounderSection 
                onNavigate={handleNavigate} 
                onOpenQuote={() => handleOpenQuoteModal()} 
                showDirectConnect={true}
              />
            </div>
          </section>
        </main>
      )}

      {/* ======================================================== */}
      {/* --- PAGE 6: CONTACT --- */}
      {/* ======================================================== */}
      {activeSection === 'contact' && (
        <main className="flex-1">
          <PageHeader
            title="Contact &"
            highlightWord="RFQ Quotation Desk"
            category="Contact"
            badge="PAN-INDIA SUPPLY & NCR DESK"
            subtitle="Connect directly with our industrial procurement specialists at D-53, Sec 08, Sangam Park, Khora, Ghaziabad, UP for competitive pricing, stock verification, and all-over India supply."
            onNavigateHome={() => handleNavigate('home')}
          />
          <ContactForm onSubmitEnquiry={handleGeneralEnquiry} />
        </main>
      )}

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectBrand={handleSelectBrand}
        onOpenTerms={handleOpenTerms}
        onOpenPrivacy={handleOpenPrivacy}
      />

      {/* Floating Action Buttons */}
      <FloatingWidgets 
        onOpenGeneralEnquiry={() => handleOpenQuoteModal()} 
        rfqCount={rfqBasket.length}
        onOpenRfqDrawer={() => setIsRfqDrawerOpen(true)}
      />

      {/* Multi-Item RFQ Basket Slide-over Drawer */}
      <RfqBasketDrawer
        isOpen={isRfqDrawerOpen}
        onClose={() => setIsRfqDrawerOpen(false)}
        basket={rfqBasket}
        onUpdateQuantity={handleUpdateBasketQuantity}
        onRemoveItem={handleRemoveFromBasket}
        onClearBasket={handleClearBasket}
        onSubmitMultiRfq={handleMultiItemRfqSubmit}
        currentUser={currentUser}
        onNavigateToCatalog={() => {
          setIsRfqDrawerOpen(false);
          handleNavigate('products');
        }}
      />

      {/* Instant Request Quote / RFQ Modal */}
      <RequestQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        onSubmitQuote={handleQuoteModalSubmit}
        currentUser={currentUser}
        initialBrand={quoteModalData.brand}
        initialProduct={quoteModalData.product}
      />

      {/* Clean Google Single Sign-On Modal */}
      <GoogleAuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Customer Portal Drawer */}
      <CustomerPortalDrawer
        isOpen={isCustomerPortalOpen}
        onClose={() => setIsCustomerPortalOpen(false)}
        currentUser={currentUser}
        userEnquiries={customerEnquiries}
        onOpenNewRFQ={() => {
          setIsCustomerPortalOpen(false);
          handleOpenQuoteModal();
        }}
        onExploreCatalog={() => {
          setIsCustomerPortalOpen(false);
          handleNavigate('products');
        }}
        onLogout={handleLogout}
      />

      {/* Admin CRM Control Drawer (Only accessible to authorized admin emails) */}
      {isAdmin && (
        <AdminControlDrawer
          isOpen={isAdminControlOpen}
          onClose={() => setIsAdminControlOpen(false)}
          currentUser={currentUser}
          enquiries={enquiries}
          onToggleStatus={handleToggleStatus}
          onDeleteEnquiry={handleDeleteEnquiry}
          onUpdateNotes={handleUpdateNotes}
          onClearAll={handleClearAllEnquiries}
          onLogout={handleLogout}
          adminEmail={currentUser?.email || ''}
        />
      )}

      {/* Corporate Legal & Compliance Modal (Terms & Conditions / Privacy Policy) */}
      <LegalModals
        isOpen={isLegalModalOpen}
        initialTab={legalModalTab}
        onClose={() => setIsLegalModalOpen(false)}
      />

    </div>
  );
}
