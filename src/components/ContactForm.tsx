import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Award, Clock, Navigation } from 'lucide-react';

interface ContactFormProps {
  onSubmit?: (formData: {
    name: string;
    email: string;
    phone: string;
    company: string;
    subject: string;
    message: string;
  }) => void;
  onSubmitEnquiry?: (formData: {
    name: string;
    email: string;
    phone: string;
    company: string;
    subject: string;
    message: string;
  }) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, onSubmitEnquiry }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'Sales Inquiry (OKS / Klüber Products)',
    message: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmitEnquiry) {
      onSubmitEnquiry(formState);
    } else if (onSubmit) {
      onSubmit(formState);
    }
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: 'Sales Inquiry (OKS / Klüber Products)',
        message: ''
      });
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-acs-section" className="bg-slate-50 text-slate-900 py-16 md:py-20 px-4 md:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-1 text-blue-800 text-[10px] md:text-xs font-black uppercase tracking-[0.25em] mb-3 rounded-full">
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            <span>COMMUNICATIONS & PROCUREMENT</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-slate-900 uppercase">
            Request an <span className="text-blue-600">Immediate Quotation</span>
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3 text-xs md:text-sm font-normal leading-relaxed">
            Submit your industrial machinery specifications or request high-performance tribology consultation. Our authorized engineers respond swiftly with GST-compliant quotations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact details & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Contact details Card */}
            <div className="bg-white border border-slate-200 p-6 md:p-8 space-y-6 flex-grow shadow-sm rounded-sm">
              <h4 className="text-base font-sans font-bold text-slate-900 uppercase tracking-tight border-b border-slate-100 pb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-sky-600" />
                Corporate Headquarters Directory
              </h4>

              <div className="space-y-5">
                {/* Phones */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-sm flex items-center justify-center shrink-0 border border-orange-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] text-sky-700 font-bold uppercase tracking-widest block">Direct Dispatch Hotlines</span>
                    <a href="tel:01171571463" className="text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors block mt-0.5 font-mono">
                      01171571463 (Board Line)
                    </a>
                    <a href="tel:07827976806" className="text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors block font-mono">
                      +91 78279 76806 (Priority WhatsApp / Mobile)
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-sm flex items-center justify-center shrink-0 border border-sky-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] text-sky-700 font-bold uppercase tracking-widest block">Direct RFQ & Orders Email</span>
                    <a href="mailto:acscorporation.in@gmail.com" className="text-sm font-bold text-sky-600 hover:underline block mt-0.5 font-mono">
                      acscorporation.in@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-slate-100 text-slate-700 rounded-sm flex items-center justify-center shrink-0 border border-slate-200">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] text-sky-700 font-bold uppercase tracking-widest block">Office & Supply Desk</span>
                    <p className="text-xs font-semibold text-slate-800 mt-0.5 leading-relaxed">
                      D-53, Sec 08, Sangam Park, Khora,<br />
                      Ghaziabad, UP, India
                    </p>
                    <span className="text-[10px] text-emerald-600 font-bold block mt-1">
                      Supplying All Over India
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-slate-100 text-slate-700 rounded-sm flex items-center justify-center shrink-0 border border-slate-200">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] text-sky-700 font-bold uppercase tracking-widest block">Operational Hours</span>
                    <p className="text-xs font-semibold text-slate-600 mt-0.5 font-mono">
                      Monday – Saturday: 09:30 AM – 06:30 PM
                    </p>
                    <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest mt-1 block">
                      ● Dispatch Desk Active & Ready
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Vector Map representation */}
            <div className="bg-[#0B192C] text-white overflow-hidden border border-sky-500/30 p-5 relative min-h-[180px] flex flex-col justify-end rounded-sm shadow-md">
              {/* Background abstract layout representing grid paths */}
              <div className="absolute inset-0 opacity-15">
                <svg className="w-full h-full object-cover" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,50 L400,50 M0,100 L400,100 M0,150 L400,150" stroke="#38BDF8" strokeWidth="1" />
                  <path d="M100,0 L100,200 M200,0 L200,200 M300,0 L300,200" stroke="#38BDF8" strokeWidth="1" />
                  <circle cx="150" cy="80" r="40" stroke="#38BDF8" strokeWidth="1.5" fill="none" />
                  <circle cx="150" cy="80" r="80" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4,4" fill="none" />
                </svg>
              </div>

              {/* Map Marker overlay */}
              <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-8 h-8 bg-sky-400/30 flex items-center justify-center animate-ping absolute rounded-full"></div>
                <div className="w-8 h-8 bg-orange-500 flex items-center justify-center text-white border-2 border-[#0B192C] shadow-lg relative z-10 font-bold rounded-full">
                  <Navigation className="w-4 h-4 transform rotate-45 text-white" />
                </div>
                <div className="bg-[#0B192C] text-sky-300 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 mt-1 whitespace-nowrap border border-sky-400/40 shadow-md rounded-xs">
                  ACS Corp Office • Ghaziabad, UP
                </div>
              </div>

              <div className="relative z-10 bg-[#0B192C]/90 p-3.5 border border-blue-400/30 rounded-xs">
                <div className="text-[10px] text-blue-400 font-bold tracking-widest uppercase">
                  SUPPLY CHAIN LOGISTICS BOUNDARY
                </div>
                <h5 className="text-white text-xs font-sans font-bold uppercase mt-0.5">Pan-India Industrial Supply Network</h5>
                <p className="text-[10px] text-slate-300 mt-1 leading-snug font-normal">
                  Strategically operating from D-53, Sector 08, Sangam Park, Khora, Ghaziabad, UP — delivering rapid industrial logistics and supplies all over India.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Lead Submission Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-6 md:p-8 flex flex-col justify-center shadow-sm rounded-sm">
            {isSuccess ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-300 rounded-full">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="text-2xl font-sans font-black text-slate-900 uppercase tracking-tight mb-2">Message Successfully Transmitted</h4>
                <p className="text-xs md:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your inquiry has been cataloged. A specialized Lubrication Consultant from ACS Corporation will contact you immediately via phone or email with wholesale pricing.
                </p>
                <div className="mt-8 text-[10px] text-blue-700 font-mono font-bold uppercase tracking-wider">
                  Enquiry Registry Reference: #ACS-{Math.floor(Math.random() * 900000 + 100000)}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h4 className="text-base font-sans font-bold text-slate-900 uppercase tracking-tight">Direct Procurement Quotation Request</h4>
                  <p className="text-[10px] text-blue-700 font-semibold uppercase tracking-wider mt-0.5">
                    Supplying industrial pack sizes, cartridges, aerosol cartons & bulk drums.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full text-xs px-3.5 py-2.5 border border-slate-300 bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-medium text-slate-900 placeholder-slate-400 rounded-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Enter corporate email"
                      className="w-full text-xs px-3.5 py-2.5 border border-slate-300 bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-medium text-slate-900 placeholder-slate-400 rounded-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Telephone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="Enter contact number"
                      className="w-full text-xs px-3.5 py-2.5 border border-slate-300 bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-medium text-slate-900 placeholder-slate-400 rounded-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Company / Plant Name *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Enter company or plant name"
                      className="w-full text-xs px-3.5 py-2.5 border border-slate-300 bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-medium text-slate-900 placeholder-slate-400 rounded-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Inquiry Purpose *</label>
                  <select
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full text-xs px-3.5 py-2.5 border border-slate-300 bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-medium text-slate-900 rounded-xs"
                  >
                    <option>Sales Inquiry (OKS / Klüber Products)</option>
                    <option>Festo Pneumatics / 3M Abrasives Inquiry</option>
                    <option>Technical Lubricant Consulting & Tribology</option>
                    <option>Urgent Callback Request</option>
                    <option>Dealer & Channel Support Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Product Details & Machinery Requirements *</label>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Describe your machinery operating speeds, temperature constraints, or list the exact OKS/Klüber part codes needed."
                    className="w-full text-xs px-3.5 py-2.5 border border-slate-300 bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-medium text-slate-900 placeholder-slate-400 rounded-xs"
                  />
                </div>

                <button
                  type="submit"
                  id="btn-general-enquiry-submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs py-3.5 px-4 transition-all flex items-center justify-center gap-2 tracking-widest uppercase shadow-md active:scale-98 rounded-xs cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  SUBMIT INDUSTRIAL QUOTATION REQUEST
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
