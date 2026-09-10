import React, { useState } from 'react';
import { Enquiry, UserProfile } from '../types';
import { UserAvatar } from './UserAvatar';
import { 
  ShieldCheck, 
  X, 
  Trash2, 
  Calendar, 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Download, 
  Search, 
  Filter, 
  ExternalLink,
  MessageSquare,
  LogOut
} from 'lucide-react';

interface AdminControlDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser?: UserProfile | null;
  enquiries: Enquiry[];
  onToggleStatus: (id: string) => void;
  onClearAll: () => void;
  onDeleteEnquiry?: (id: string) => void;
  onUpdateNotes?: (id: string, notes: string) => void;
  onLogout?: () => void;
  adminEmail?: string;
}

export const AdminControlDrawer: React.FC<AdminControlDrawerProps> = ({
  isOpen,
  onClose,
  currentUser,
  enquiries,
  onToggleStatus,
  onClearAll,
  onDeleteEnquiry,
  onUpdateNotes,
  onLogout,
  adminEmail
}) => {
  const [filterStatus, setFilterStatus] = useState<'All' | 'Pending' | 'Contacted'>('All');
  const [filterBrand, setFilterBrand] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);
  const [tempNotes, setTempNotes] = useState<string>('');

  if (!isOpen) return null;

  const displayEmail = adminEmail || currentUser?.email || 'acscorporation.in@gmail.com';
  const displayName = currentUser?.name || 'Administrator';

  const filteredEnquiries = enquiries.filter(enq => {
    const matchesStatus = filterStatus === 'All' || enq.status === filterStatus;
    const matchesBrand = filterBrand === 'All' || (enq.brandName && enq.brandName.toLowerCase().includes(filterBrand.toLowerCase()));
    const matchesSearch = !searchTerm || 
      enq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enq.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (enq.productName && enq.productName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      enq.message.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesBrand && matchesSearch;
  });

  const pendingCount = enquiries.filter(e => e.status === 'Pending').length;
  const contactedCount = enquiries.filter(e => e.status === 'Contacted').length;
  const oksCount = enquiries.filter(e => e.brandName === 'OKS' || e.message.toLowerCase().includes('oks')).length;
  const kluberCount = enquiries.filter(e => e.brandName === 'Klüber' || e.message.toLowerCase().includes('klüber') || e.message.toLowerCase().includes('kluber')).length;

  const exportToCSV = () => {
    if (enquiries.length === 0) return;
    const headers = ['ID', 'Date', 'Name', 'Company', 'Email', 'Phone', 'Brand', 'Product', 'Status', 'Message'];
    const rows = enquiries.map(e => [
      `"${e.id}"`,
      `"${e.timestamp}"`,
      `"${e.name}"`,
      `"${e.company}"`,
      `"${e.email}"`,
      `"${e.phone}"`,
      `"${e.brandName || 'N/A'}"`,
      `"${e.productName || 'N/A'}"`,
      `"${e.status}"`,
      `"${e.message.replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `ACS_Industrial_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#040A14]/85 backdrop-blur-sm flex justify-end animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Drawer */}
      <div className="relative w-full max-w-2xl bg-[#081528] text-white h-full shadow-2xl flex flex-col z-10 animate-slideLeft border-l-2 border-[#38BDF8]/40">
        
        {/* Top Header */}
        <div className="p-5 bg-[#060F1E] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <UserAvatar
              name={displayName}
              email={displayEmail}
              picture={currentUser?.picture}
              size="lg"
              className="border-2 border-[#38BDF8]"
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-sans font-black text-sm uppercase tracking-wider text-white">
                  ACS Admin Control Center
                </h3>
                <span className="bg-[#D81E05] text-white text-[9px] font-black uppercase px-2 py-0.5">
                  Restricted
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Logged in as <strong className="text-[#38BDF8]">{displayEmail}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onLogout && (
              <button
                onClick={onLogout}
                className="text-red-400 hover:text-red-300 p-1.5 hover:bg-slate-800 text-xs font-bold flex items-center gap-1 transition-colors"
                title="Sign Out"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1.5 hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Executive Stats Bar */}
        <div className="grid grid-cols-4 gap-2 p-4 bg-[#050D1A] border-b border-slate-800 text-center">
          <div className="bg-[#081528] p-2 border border-slate-800">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Total Leads</span>
            <span className="text-lg font-black text-white">{enquiries.length}</span>
          </div>
          <div className="bg-[#081528] p-2 border border-slate-800">
            <span className="text-[9px] font-bold text-orange-400 uppercase tracking-wider block">Pending</span>
            <span className="text-lg font-black text-orange-400">{pendingCount}</span>
          </div>
          <div className="bg-[#081528] p-2 border border-slate-800">
            <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider block">Contacted</span>
            <span className="text-lg font-black text-emerald-400">{contactedCount}</span>
          </div>
          <div className="bg-[#081528] p-2 border border-slate-800">
            <span className="text-[9px] font-bold text-[#38BDF8] uppercase tracking-wider block">OKS / Klüber</span>
            <span className="text-lg font-black text-[#38BDF8]">{oksCount} / {kluberCount}</span>
          </div>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="p-4 bg-[#0A1E36] border-b border-slate-800 space-y-3">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            {/* Search */}
            <div className="relative flex-grow w-full">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search leads by customer, company, product, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#060F1E] border border-slate-700 focus:border-[#0284C7] pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 outline-none"
              />
            </div>

            {/* Export CSV */}
            <button
              onClick={exportToCSV}
              disabled={enquiries.length === 0}
              className="w-full sm:w-auto bg-[#081528] hover:bg-[#102747] border border-[#0284C7]/40 text-[#38BDF8] hover:text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shrink-0"
              title="Download Excel / CSV format"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>

          {/* Quick Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Status:</span>
              {(['All', 'Pending', 'Contacted'] as const).map(st => (
                <button
                  key={st}
                  onClick={() => setFilterStatus(st)}
                  className={`text-[10px] font-bold px-2 py-0.5 uppercase transition-all ${
                    filterStatus === st 
                      ? 'bg-[#0284C7] text-white' 
                      : 'bg-[#060F1E] text-slate-400 hover:text-white'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Brand:</span>
              {['All', 'OKS', 'Klüber', '3M', 'Cortec'].map(br => (
                <button
                  key={br}
                  onClick={() => setFilterBrand(br)}
                  className={`text-[10px] font-bold px-2 py-0.5 uppercase transition-all ${
                    filterBrand === br 
                      ? 'bg-[#F97316] text-white' 
                      : 'bg-[#060F1E] text-slate-400 hover:text-white'
                  }`}
                >
                  {br}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Lead List */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-[#060F1E]">
          {filteredEnquiries.length > 0 ? (
            filteredEnquiries.map((enq) => (
              <div
                key={enq.id}
                className={`bg-[#0A1E36] border p-4 shadow-md transition-all ${
                  enq.status === 'Pending' 
                    ? 'border-orange-500/40 bg-gradient-to-r from-[#0A1E36] to-[#0A1E36]/90' 
                    : 'border-slate-800'
                }`}
              >
                {/* Header with status pill and date */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#38BDF8]" />
                      <h4 className="font-extrabold text-sm text-white">{enq.name}</h4>
                    </div>
                    <p className="text-xs text-[#F97316] font-bold mt-0.5">{enq.company}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-black px-2.5 py-0.5 uppercase tracking-wider ${
                      enq.status === 'Contacted'
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/50'
                        : 'bg-orange-950 text-orange-400 border border-orange-500/50'
                    }`}>
                      {enq.status}
                    </span>
                    {onDeleteEnquiry && (
                      <button
                        onClick={() => onDeleteEnquiry(enq.id)}
                        className="text-slate-500 hover:text-red-400 p-1"
                        title="Delete record"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Contact Coordinates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[#060F1E] p-2.5 border border-slate-800 text-xs mb-3">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <a href={`mailto:${enq.email}`} className="text-slate-300 hover:text-[#38BDF8] truncate">
                      {enq.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#F97316]" />
                    <a href={`tel:${enq.phone}`} className="text-slate-300 hover:text-white">
                      {enq.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 sm:col-span-2 text-[10px] text-slate-500">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    <span>Received: {enq.timestamp}</span>
                  </div>
                </div>

                {/* Product specifics */}
                {(enq.productName || enq.brandName) && (
                  <div className="mb-3 bg-[#081528] px-3 py-1.5 border border-[#0284C7]/30 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-semibold">Target Product:</span>
                    <span className="text-[#38BDF8] font-bold">{enq.productName} ({enq.brandName})</span>
                  </div>
                )}

                {/* Message note */}
                <div className="bg-[#060F1E] p-3 text-xs text-slate-300 leading-relaxed border border-slate-800 mb-3">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Client Specifications:
                  </div>
                  {enq.message}
                </div>

                {/* Internal Notes / Follow-up */}
                {enq.notes && (
                  <div className="bg-[#08182E] p-2.5 border-l-2 border-[#38BDF8] text-[11px] text-slate-300 mb-3">
                    <strong className="text-[#38BDF8] block text-[10px] uppercase">Internal Admin Note:</strong>
                    {enq.notes}
                  </div>
                )}

                {/* Action Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${enq.email}?subject=ACS%20Corporation%20Quotation%20Follow-up%20for%20${encodeURIComponent(enq.company)}`}
                      className="bg-[#060F1E] hover:bg-[#102747] text-slate-200 border border-slate-700 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"
                    >
                      <Mail className="w-3 h-3 text-[#38BDF8]" />
                      <span>Reply Email</span>
                    </a>
                    <a
                      href={`tel:${enq.phone}`}
                      className="bg-[#060F1E] hover:bg-[#102747] text-slate-200 border border-slate-700 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3 text-[#F97316]" />
                      <span>Call Client</span>
                    </a>
                  </div>

                  <button
                    onClick={() => onToggleStatus(enq.id)}
                    className={`text-[10px] font-black px-3 py-1.5 transition-all uppercase tracking-wider flex items-center gap-1.5 ${
                      enq.status === 'Contacted'
                        ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        : 'bg-[#0284C7] hover:bg-[#38BDF8] hover:text-[#081528] text-white'
                    }`}
                  >
                    {enq.status === 'Contacted' ? (
                      <>
                        <Clock className="w-3 h-3" />
                        <span>Re-Open (Mark Pending)</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Mark as Contacted</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            ))
          ) : (
            <div className="text-center py-16 text-slate-500">
              <ShieldCheck className="w-12 h-12 mx-auto mb-3 opacity-30 text-[#38BDF8]" />
              <p className="text-xs font-bold text-slate-400">No leads matching current filters</p>
              <p className="text-[10px] mt-1">Try resetting the search keywords or status filter.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#060F1E] border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>ACS Corporation Internal CRM</span>
          {enquiries.length > 0 && (
            <button
              onClick={onClearAll}
              className="text-red-400 hover:text-red-300 font-bold flex items-center gap-1 text-[10px] uppercase tracking-wider"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear All Logs</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
