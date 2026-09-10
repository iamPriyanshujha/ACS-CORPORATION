import React from 'react';
import { Enquiry } from '../types';
import { Inbox, Check, Trash2, Calendar, User, Mail, Briefcase, FileText } from 'lucide-react';

interface EnquiryLogDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  enquiries: Enquiry[];
  onToggleStatus: (id: string) => void;
  onClearAll: () => void;
}

export const EnquiryLogDrawer: React.FC<EnquiryLogDrawerProps> = ({
  isOpen,
  onClose,
  enquiries,
  onToggleStatus,
  onClearAll
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#040A14]/70 backdrop-blur-xs flex justify-end">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Drawer content */}
      <div className="relative w-full max-w-lg bg-[#0A1E36] text-white h-full shadow-2xl flex flex-col z-10 animate-slideLeft border-l border-[#0284C7]/40">
        
        {/* Header */}
        <div className="p-5 bg-[#060F1E] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Inbox className="w-5 h-5 text-[#38BDF8]" />
            <div>
              <h4 className="font-extrabold text-sm tracking-wide text-white">ACS Lead Registry (CRM)</h4>
              <p className="text-[10px] text-slate-400">Review submitted quotes and contact requests</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white font-bold text-xs p-1"
          >
            ✕
          </button>
        </div>

        {/* Action Panel */}
        <div className="px-5 py-3.5 bg-[#081528] border-b border-slate-800 flex justify-between items-center text-xs">
          <span className="text-slate-300 font-bold">
            Total Submissions: <span className="bg-[#0284C7] text-white px-2 py-0.5 text-[10px] font-mono">{enquiries.length}</span>
          </span>
          {enquiries.length > 0 && (
            <button
              onClick={onClearAll}
              className="text-red-400 hover:text-red-300 font-bold flex items-center gap-1 hover:underline text-[10px] uppercase tracking-wider"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear Log
            </button>
          )}
        </div>

        {/* Lead List */}
        <div className="flex-grow overflow-y-auto p-5 space-y-4 bg-[#060F1E]">
          {enquiries.length > 0 ? (
            enquiries.map((enq) => (
              <div
                key={enq.id}
                className="bg-[#0A1E36] border border-slate-800 p-4 shadow-sm relative hover:border-[#0284C7]/60 transition-colors"
              >
                {/* Brand status indicator badge */}
                <span className={`absolute top-4 right-4 text-[9px] font-bold px-2 py-0.5 ${
                  enq.status === 'Contacted' 
                    ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/40' 
                    : 'bg-orange-950/80 text-orange-400 border border-orange-500/40'
                }`}>
                  {enq.status}
                </span>

                <div className="space-y-2.5 text-xs">
                  {/* Lead metadata heading */}
                  <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <User className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span className="font-extrabold text-white">{enq.name}</span>
                    <span className="text-slate-600">|</span>
                    <span className="text-slate-400 text-[10px]">{enq.company}</span>
                  </div>

                  {/* Core details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3 h-3 text-[#38BDF8]" />
                      <span className="truncate">{enq.email}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      <span>{enq.timestamp}</span>
                    </div>
                  </div>

                  {/* Product Tag if exists */}
                  {(enq.productName || enq.brandName) && (
                    <div className="flex items-center gap-1.5 text-[11px] text-[#38BDF8] bg-[#081528] px-2.5 py-1 border border-[#0284C7]/20">
                      <Briefcase className="w-3 h-3 text-[#F97316]" />
                      <span><strong>Product:</strong> {enq.productName} ({enq.brandName})</span>
                    </div>
                  )}

                  {/* Message body */}
                  <div className="bg-[#081528] p-3 text-[11px] text-slate-300 leading-relaxed border border-slate-800/80">
                    <div className="flex items-center gap-1 text-[9px] uppercase tracking-wider text-slate-500 font-bold mb-1">
                      <FileText className="w-3 h-3" />
                      Requirements Note:
                    </div>
                    {enq.message}
                  </div>

                  {/* Footer toggle button */}
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => onToggleStatus(enq.id)}
                      className={`text-[10px] font-bold px-3 py-1 transition-colors flex items-center gap-1.5 uppercase tracking-wider ${
                        enq.status === 'Contacted'
                          ? 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                          : 'bg-[#0284C7] hover:bg-[#38BDF8] hover:text-[#081528] text-white'
                      }`}
                    >
                      <Check className="w-3 h-3" />
                      Mark as {enq.status === 'Contacted' ? 'Pending' : 'Contacted'}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 text-slate-500">
              <Inbox className="w-12 h-12 mx-auto mb-3 opacity-30 text-[#38BDF8]" />
              <p className="text-xs font-bold text-slate-400">No quotation logs recorded yet</p>
              <p className="text-[10px] mt-1">When clients submit the quote or contact form, entries appear here.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#060F1E] border-t border-slate-800 text-center text-[10px] text-slate-500 font-bold uppercase tracking-wider">
          ACS Corporation Industrial CRM Registry
        </div>

      </div>
    </div>
  );
};
