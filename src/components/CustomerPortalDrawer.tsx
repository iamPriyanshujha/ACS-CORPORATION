import React from 'react';
import { UserProfile, Enquiry } from '../types';
import { UserAvatar } from './UserAvatar';
import { 
  User, 
  X, 
  Mail, 
  Building, 
  FileText, 
  Clock, 
  CheckCircle2, 
  LogOut, 
  Phone, 
  ShieldCheck, 
  Download,
  Package
} from 'lucide-react';

interface CustomerPortalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile | null;
  onLogout: () => void;
  userEnquiries: Enquiry[];
  onOpenNewRFQ: () => void;
}

export const CustomerPortalDrawer: React.FC<CustomerPortalDrawerProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLogout,
  userEnquiries,
  onOpenNewRFQ
}) => {
  if (!isOpen || !currentUser) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#040A14]/80 backdrop-blur-sm flex justify-end animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#081528] text-white h-full shadow-2xl flex flex-col z-10 animate-slideLeft border-l-2 border-[#0284C7]/40">
        
        {/* Header */}
        <div className="p-5 bg-[#060F1E] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <UserAvatar 
              name={currentUser.name} 
              email={currentUser.email} 
              picture={currentUser.picture} 
              size="lg"
              className="border-2 border-[#38BDF8]"
            />
            <div>
              <h3 className="font-sans font-black text-sm uppercase tracking-wide text-white">
                {currentUser.name}
              </h3>
              <p className="text-[11px] text-slate-400">
                {currentUser.company || 'Industrial Buyer'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 hover:bg-slate-800 transition-colors"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Card info */}
        <div className="p-4 bg-[#0A1E36] border-b border-slate-800 space-y-2 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span className="truncate">{currentUser.email}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Verified Google Corporate Account</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-4 bg-[#060F1E] border-b border-slate-800 flex items-center justify-between gap-3">
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quotation Tracker
            </h4>
            <p className="text-[10px] text-slate-400">
              Review your submitted RFQ inquiries
            </p>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenNewRFQ();
            }}
            className="bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-black px-3 py-1.5 text-[10px] uppercase tracking-wider transition-all shadow-md flex items-center gap-1 active:scale-95"
          >
            <FileText className="w-3 h-3" />
            <span>New RFQ</span>
          </button>
        </div>

        {/* Inquiries / RFQ History */}
        <div className="flex-grow overflow-y-auto p-4 space-y-3 bg-[#060F1E]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            My Submitted RFQs & Requests ({userEnquiries.length})
          </span>

          {userEnquiries.length > 0 ? (
            userEnquiries.map((enq) => (
              <div key={enq.id} className="bg-[#0A1E36] border border-slate-800 p-3.5 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold text-white block">
                      {enq.productName || 'General Industrial Lubrication Enquiry'}
                    </span>
                    <span className="text-[10px] text-[#38BDF8] font-bold">
                      Brand: {enq.brandName || 'OKS / Klüber'}
                    </span>
                  </div>
                  <span className={`text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider ${
                    enq.status === 'Contacted'
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                      : 'bg-orange-950 text-orange-400 border border-orange-500/40'
                  }`}>
                    {enq.status === 'Contacted' ? 'Processing / Replied' : 'Under Review'}
                  </span>
                </div>

                <p className="text-[11px] text-slate-300 bg-[#060F1E] p-2 border border-slate-800/80 leading-relaxed">
                  {enq.message}
                </p>

                <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
                  <span>Submitted: {enq.timestamp}</span>
                  <span className="text-slate-400">Ref: #{enq.id.slice(-6)}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 bg-[#0A1E36]/50 border border-slate-800 p-6">
              <Package className="w-10 h-10 text-slate-600 mx-auto mb-2" />
              <p className="text-xs font-bold text-slate-300">No active RFQ requests yet</p>
              <p className="text-[11px] text-slate-500 mt-1 mb-4">
                Submit an inquiry or request a bulk quotation to track your order batches here.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenNewRFQ();
                }}
                className="bg-[#0284C7] hover:bg-[#38BDF8] hover:text-[#081528] text-white font-bold px-4 py-1.5 text-xs uppercase tracking-wider transition-all"
              >
                Request First Quote
              </button>
            </div>
          )}

          {/* Technical Help & Direct Dispatch Desk */}
          <div className="bg-[#08182E] border border-[#0284C7]/30 p-3.5 space-y-2 mt-4">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Dedicated Technical Support Desk</span>
            </h5>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Need urgent batch certificates (COA), NSF H1 compliance documents, or express dispatch from Delhi/Bangalore warehouses?
            </p>
            <a
              href="tel:01171571463"
              className="inline-block bg-[#060F1E] text-[#38BDF8] border border-slate-700 hover:border-[#38BDF8] px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all"
            >
              Direct Line: 01171571463
            </a>
          </div>
        </div>

        {/* Footer Logout button */}
        <div className="p-4 bg-[#060F1E] border-t border-slate-800 flex items-center justify-between">
          <span className="text-[10px] text-slate-500 font-bold uppercase">
            ACS Customer Session
          </span>
          <button
            onClick={() => {
              onLogout();
              onClose();
            }}
            className="text-red-400 hover:text-red-300 font-bold flex items-center gap-1.5 text-xs uppercase tracking-wider"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>

      </div>
    </div>
  );
};
