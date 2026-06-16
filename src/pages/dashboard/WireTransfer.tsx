import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  DollarSign,
  AlertTriangle,
  Info,
  Clock,
  Landmark,
  ChevronDown,
  X,
  Search,
  RefreshCw,
  FileText
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useStore } from '@/src/lib/store';
import { useNavigate } from 'react-router-dom';
import { CountrySelect, StateSelect } from '@/src/components/ui/CountrySelect';
import { COUNTRIES_DATA } from '@/src/lib/countries';
import { graphqlFetch, CREATE_WIRE_TRANSFER_MUTATION, MY_WIRE_TRANSFERS_QUERY } from '@/src/lib/graphql';

export default function WireTransfer() {
  const { balance, totalBalance, showToast } = useStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
     type: 'DOMESTIC WIRE',
     recipient: '',
     account: '',
     routing: '',
     bank: '',
     amount: '',
     country: 'United States',
     state: 'New York'
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [success, setSuccess] = useState(false);

  // Wire list state & filters
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wireTransfers, setWireTransfers] = useState<any[]>([]);
  const [loadingWires, setLoadingWires] = useState(false);
  const [wireError, setWireError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Use totalBalance if available, or fall back to balance
  const actualBalance = totalBalance > 0 ? totalBalance : balance;

  const loadWireTransfers = async () => {
    setLoadingWires(true);
    setWireError('');
    try {
      const res = await graphqlFetch(MY_WIRE_TRANSFERS_QUERY);
      if (res && res.myWireTransfers) {
        setWireTransfers(res.myWireTransfers);
      }
    } catch (err: any) {
      console.error("Failed to fetch wire transfers:", err);
      setWireError(err.message || 'Could not synchronize wire records.');
    } finally {
      setLoadingWires(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const amtNum = Number(formData.amount);
    if (!formData.recipient || !formData.account || !formData.bank || !formData.amount) {
      setSubmitError('Please complete all mandatory protocols.');
      return;
    }
    if (amtNum < 500 || amtNum > 1000000) {
      setSubmitError('Transfer limit protocols violated. Must be between $500.00 and $1,000,000.00.');
      return;
    }
    if (actualBalance < amtNum) {
      setSubmitError('Insufficient liquidity in authenticated nodes.');
      return;
    }

    setSubmitting(true);
    setSubmitError('');

    try {
      const input = {
        beneficiaryName: formData.recipient,
        beneficiaryBank: formData.bank,
        accountNumber: formData.account,
        swiftCode: formData.routing || 'N/A',
        amount: Number(formData.amount),
        reason: formData.type || 'PROTOCOL SETTLEMENT'
      };

      await graphqlFetch(CREATE_WIRE_TRANSFER_MUTATION, { input });
      showToast(`Wire transfer of $${Number(formData.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })} to ${formData.recipient} broadcasted successfully!`, 'success', 'WIRE OUTFLOW SIGNED');
      
      // Update local state balances
      const nextBalance = Math.max(0, actualBalance - amtNum);
      const newPrimary = Math.max(0, useStore.getState().primaryBalance - amtNum);
      useStore.getState().updateUser({
        balance: nextBalance,
        totalBalance: nextBalance,
        primaryBalance: newPrimary
      });
      
      setSuccess(true);
    } catch (err: any) {
      console.error("Wire transfer execution error:", err);
      setSubmitError(err.message || 'Execution connection failed. Please retry.');
    } finally {
      setSubmitting(false);
    }
  };

  const filteredWires = wireTransfers.filter(wire => {
    const term = searchQuery.toLowerCase();
    return (
      (wire.beneficiaryName || '').toLowerCase().includes(term) ||
      (wire.beneficiaryBank || '').toLowerCase().includes(term) ||
      (wire.reason || '').toLowerCase().includes(term) ||
      (wire.reference || '').toLowerCase().includes(term) ||
      (wire.status || '').toLowerCase().includes(term)
    );
  });

  if (success) {
    return (
      <div className="max-w-xl mx-auto py-24 px-6 text-center space-y-12">
        <div className="relative inline-block mx-auto">
          <div className="absolute inset-0 bg-[#FF4D00] blur-[60px] opacity-20 animate-pulse" />
          <div className="w-32 h-32 bg-orange-500/10 border border-orange-500/20 rounded-full flex items-center justify-center text-[#FF4D00] relative z-10 mx-auto group">
            <CheckCircle2 size={64} className="group-hover:scale-110 transition-transform duration-500" strokeWidth={2.5} />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl lg:text-5xl font-display font-black text-white italic tracking-tighter uppercase">TRANSFER <span className="text-[#FF4D00]">BROADCASTED</span></h2>
          <p className="text-zinc-500 font-bold max-w-md mx-auto text-xs uppercase leading-loose tracking-widest leading-relaxed">
            Your wire transfer of <span className="text-white font-black italic">${Number(formData.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}</span> to <span className="text-white font-black">{formData.recipient}</span> has been processed. The funds are cleared and in pipeline settlement.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button 
            type="button"
            onClick={() => navigate('/dashboard')}
            className="bg-[#FF4D00] text-black px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] italic shadow-2xl hover:scale-105 transition-all w-full sm:w-auto"
          >
            RETURN TO DASHBOARD
          </button>
          <button 
            type="button"
            onClick={() => navigate('/dashboard/transactions')}
            className="bg-zinc-950 text-white border border-white/10 px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] italic hover:bg-zinc-900 transition-all w-full sm:w-auto"
          >
            VIEW LEDGER LOGS
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pb-24 px-4 sm:px-0">
      {/* Orange/Black Header */}
      <div className="bg-[#FF4D00] p-6 sm:p-12 rounded-b-[2.5rem] sm:rounded-b-[4rem] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] -rotate-45" />
        <div className="relative z-10 text-center sm:text-left">
          <h1 className="text-2xl sm:text-4xl xs:text-5xl font-display font-black text-black italic tracking-tighter uppercase leading-none">WIRE TRANSFER</h1>
        </div>
        <div className="relative z-10 text-center sm:text-right">
          <p className="text-[8px] sm:text-[10px] text-black/50 font-black uppercase tracking-widest mb-1 italic leading-none">Protocol Balance</p>
          <p className="text-xl sm:text-3xl font-display font-black text-black italic tracking-tighter leading-none">${actualBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
        </div>
      </div>

      <div className="pt-8 sm:pt-10 space-y-8 sm:space-y-10">
        {/* Actions bar for triggering logs */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-[#FF4D00]" />
            <span className="text-[10px] font-black uppercase text-zinc-400 tracking-widest italic">SETTLEMENT QUEUE ACTIVE</span>
          </div>
          <button
            type="button"
            onClick={() => {
              setIsModalOpen(true);
              loadWireTransfers();
            }}
            className="w-full sm:w-auto bg-zinc-950 border border-white/10 hover:border-[#FF4D00]/50 text-white hover:text-[#FF4D00] px-6 py-4 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 italic shadow-lg"
          >
            <Clock size={12} strokeWidth={3} />
            View Past Wire Transfers
          </button>
        </div>

        {/* Information Box (light yellow) */}
        <div className="bg-[#FFFFCC] p-6 sm:p-8 border border-amber-200 rounded-[2rem] sm:rounded-[2.5rem] flex gap-3 sm:gap-4 md:items-center">
          <Info className="text-amber-600 shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
          <p className="text-[9px] sm:text-[11px] font-bold text-amber-900 leading-relaxed uppercase tracking-tight italic">
            Secure Wire Protocol: Ensure recipient data is verified. Clearing cycles vary by institution.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-zinc-950 border border-white/5 rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-14 space-y-6 sm:space-y-8 shadow-2xl">
          <div className="space-y-3 sm:space-y-4">
             <label className="text-[8px] sm:text-[10px] font-black text-zinc-800 uppercase tracking-widest ml-1 sm:ml-2 italic">Transfer Type *</label>
             <div className="relative">
                 <select 
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="w-full bg-black border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-[10px] sm:text-[11px] font-black text-white uppercase italic tracking-widest outline-none focus:border-orange-500 appearance-none"
                 >
                   <option>DOMESTIC WIRE</option>
                   <option>INTERNATIONAL SWIFT</option>
                   <option>SEPA SETTLEMENT</option>
                </select>
                <ChevronDown className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" size={16} />
             </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
             <label className="text-[8px] sm:text-[10px] font-black text-zinc-800 uppercase tracking-widest ml-1 sm:ml-2 italic">Recipient Name *</label>
             <input 
               placeholder="ENTER FULL NAME" 
               value={formData.recipient}
               onChange={(e) => setFormData({...formData, recipient: e.target.value})}
               className="w-full bg-black border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-[10px] sm:text-[11px] font-black text-white uppercase italic tracking-widest outline-none focus:border-orange-500" 
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 sm:space-y-4">
               <label className="text-[8px] sm:text-[10px] font-black text-zinc-800 uppercase tracking-widest ml-1 sm:ml-2 italic">Account Number *</label>
               <input 
                 placeholder="IBAN / SEQUENCE" 
                 value={formData.account}
                 onChange={(e) => setFormData({...formData, account: e.target.value})}
                 className="w-full bg-black border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-[10px] sm:text-[11px] font-black text-white uppercase italic tracking-widest outline-none focus:border-orange-500" 
               />
            </div>
            <div className="space-y-3 sm:space-y-4">
               <label className="text-[8px] sm:text-[10px] font-black text-zinc-800 uppercase tracking-widest ml-1 sm:ml-2 italic">Routing / Swift</label>
               <input 
                 placeholder="ROUTING / BIC" 
                 value={formData.routing}
                 onChange={(e) => setFormData({...formData, routing: e.target.value})}
                 className="w-full bg-black border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-[10px] sm:text-[11px] font-black text-white uppercase italic tracking-widest outline-none focus:border-orange-500" 
               />
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
             <label className="text-[8px] sm:text-[10px] font-black text-zinc-800 uppercase tracking-widest ml-1 sm:ml-2 italic">Bank Institution *</label>
             <input 
               placeholder="RECIPIENT BANK" 
               value={formData.bank}
               onChange={(e) => setFormData({...formData, bank: e.target.value})}
               className="w-full bg-black border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-[10px] sm:text-[11px] font-black text-white uppercase italic tracking-widest outline-none focus:border-orange-500" 
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CountrySelect 
               label="Bank Country *"
               value={formData.country}
               onChange={(val) => {
                  const countryObj = COUNTRIES_DATA.find(c => c.name === val);
                  setFormData({
                     ...formData,
                     country: val,
                     state: countryObj?.states[0] || ''
                  });
               }}
            />
            <StateSelect 
               label="Bank State / Province *"
               country={formData.country}
               value={formData.state}
               onChange={(val) => setFormData({...formData, state: val})}
            />
          </div>

          <div className="space-y-3 sm:space-y-4">
             <label className="text-[8px] sm:text-[10px] font-black text-zinc-800 uppercase tracking-widest ml-1 sm:ml-2 italic">Protocol Amount *</label>
             <div className="relative">
                 <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-black text-orange-500/50 italic">$</span>
                 <input 
                    placeholder="0.00" 
                    type="number" 
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    className="w-full bg-black border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 pl-12 sm:pl-14 text-2xl sm:text-4xl font-display font-black text-[#FF4D00] uppercase italic tracking-tighter outline-none focus:border-orange-500" 
                 />
             </div>
             <p className="text-[7.5px] sm:text-[9px] font-bold text-zinc-700 uppercase tracking-widest italic ml-1 sm:ml-2 text-center sm:text-left">Min: $500.00 - Max: $1,000,000.00</p>
          </div>

          {submitError && (
             <div className="p-5 bg-red-500/5 border border-red-500/10 rounded-2xl text-[10px] text-red-500 font-bold uppercase tracking-widest text-center">
               {submitError}
             </div>
          )}

          <button 
             type="submit"
             disabled={submitting}
             className="w-full h-20 sm:h-24 bg-[#FF4D00] text-black rounded-2xl sm:rounded-3xl text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] italic shadow-[0_20px_50px_rgba(255,77,0,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all mt-4 sm:mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
             {submitting ? "Processing Settlement Protocol..." : "Execute Transfer"}
          </button>
        </form>
      </div>

      {/* Modern, Premium, Responsive Wire Transfers Drawer/Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[85vh] relative"
            >
              {/* Modal Header */}
              <div className="bg-[#FF4D00] p-6 sm:p-8 flex items-center justify-between border-b border-black/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black/15 rounded-xl flex items-center justify-center text-black">
                    <FileText size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-black text-black italic tracking-tighter uppercase leading-none">WIRE TRANSACTIONS</h2>
                    <p className="text-[8px] font-black text-black/50 uppercase tracking-widest mt-1 italic leading-none">Previous settlement outflows</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-black border border-black/5 transition-all"
                >
                  <X size={18} strokeWidth={3} />
                </button>
              </div>

              {/* Filtering / Search Bar */}
              <div className="p-4 sm:p-6 border-b border-white/5 bg-black/25 flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-650" size={14} />
                  <input
                    type="text"
                    placeholder="Search by recipient, bank, reference, or status..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/5 rounded-xl pl-11 pr-4 py-3 text-[10px] sm:text-[11px] font-black text-white uppercase italic tracking-widest outline-none focus:border-[#FF4D00] transition-colors"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
                <button
                  type="button"
                  onClick={loadWireTransfers}
                  disabled={loadingWires}
                  className="bg-zinc-900 border border-white/5 hover:border-white/15 hover:bg-zinc-800 disabled:opacity-40 p-3 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white transition-all shrink-0"
                  title="Synchronize records"
                >
                  <RefreshCw size={14} className={cn("transition-transform duration-500", loadingWires && "animate-spin text-[#FF4D00]")} />
                </button>
              </div>

              {/* Modal Body / Scrolling Item List */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
                {loadingWires ? (
                  <div className="py-20 text-center space-y-4">
                    <RefreshCw className="animate-spin text-[#FF4D00] mx-auto w-8 h-8" />
                    <p className="text-[9px] text-zinc-500 font-black uppercase tracking-[0.3em] italic">SYNCHRONIZING WIRE RECORDS...</p>
                  </div>
                ) : wireError ? (
                  <div className="py-16 text-center space-y-4 border border-red-500/10 rounded-2xl bg-red-500/5">
                    <AlertTriangle className="text-red-500 mx-auto" size={32} />
                    <div>
                      <p className="text-red-500 text-xs font-black uppercase tracking-widest leading-none">Sync failed</p>
                      <p className="text-zinc-500 text-[9px] font-bold uppercase mt-2">{wireError}</p>
                    </div>
                    <button
                      type="button"
                      onClick={loadWireTransfers}
                      className="px-6 py-3 bg-zinc-900 border border-white/5 text-[9px] uppercase font-black tracking-widest text-[#FF4D00] rounded-xl hover:bg-zinc-850"
                    >
                      Retry Uplink
                    </button>
                  </div>
                ) : filteredWires.length === 0 ? (
                  <div className="py-20 text-center space-y-3 bg-black/10 border border-white/5 rounded-[2rem]">
                    <div className="w-14 h-14 bg-zinc-900/40 rounded-2xl flex items-center justify-center text-zinc-650 mx-auto">
                      <Landmark size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-white text-xs font-black uppercase tracking-widest italic leading-none">No transfers located</p>
                      <p className="text-[8px] text-zinc-650 font-black uppercase tracking-widest mt-2">
                        {searchQuery ? "Try altering search filtering criteria." : "Execute your first wire outflow to initiate ledger records."}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {filteredWires.map((wire) => (
                      <div
                        key={wire.id}
                        className="p-5 sm:p-6 bg-zinc-900/30 border border-white/5 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:border-white/10 transition-colors"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center gap-2.5">
                            <span className="text-[10px] font-black text-white uppercase italic tracking-widest">
                              {wire.beneficiaryName}
                            </span>
                            <span className="text-zinc-700">•</span>
                            <span className="text-[8px] font-mono text-zinc-550">
                              REF: {wire.reference || wire.id}
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                            <div className="flex flex-col">
                              <span className="text-[7px] text-zinc-600 uppercase tracking-widest">Beneficiary Bank</span>
                              <span className="text-[9px] font-black text-zinc-400 uppercase italic tracking-wider truncate">{wire.beneficiaryBank}</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[7px] text-zinc-600 uppercase tracking-widest">Account Number</span>
                              <span className="text-[9px] font-mono text-zinc-400 truncate">{wire.accountNumber}</span>
                            </div>
                            <div className="flex flex-col mt-1">
                              <span className="text-[7px] text-zinc-600 uppercase tracking-widest">SWIFT / Routing</span>
                              <span className="text-[9px] font-mono text-zinc-400">{wire.swiftCode || 'N/A'}</span>
                            </div>
                            <div className="flex flex-col mt-1">
                              <span className="text-[7px] text-zinc-600 uppercase tracking-widest">Transfer Purpose</span>
                              <span className="text-[9px] font-black text-zinc-400 uppercase italic tracking-wider truncate">{wire.reason || 'Settle Protocol'}</span>
                            </div>
                          </div>

                          <div className="text-[7.5px] font-bold text-zinc-550 border-t border-white/5 pt-2 mt-2">
                            BROADCAST DATE: {new Date(wire.createdAt).toLocaleString()}
                          </div>
                        </div>

                        <div className="flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center border-t sm:border-t-0 border-white/5 pt-3 sm:pt-0 shrink-0 select-none">
                          <span className="text-lg font-display font-black text-[#FF4D00] italic leading-none">
                            ${Number(wire.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                          </span>
                          <span className={cn(
                            "inline-block px-2.5 py-1 rounded-lg text-[6.5px] font-black uppercase tracking-widest border mt-2.5",
                            wire.status?.toLowerCase() === 'approved' || wire.status?.toLowerCase() === 'completed' || wire.status?.toLowerCase() === 'success'
                              ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-400"
                              : wire.status?.toLowerCase() === 'pending'
                              ? "bg-amber-950/40 border-amber-500/30 text-amber-500"
                              : "bg-red-950/40 border-red-500/30 text-red-500"
                          )}>
                            {wire.status || 'PENDING'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-5 sm:p-6 bg-black/40 border-t border-white/5 text-center text-[7px] font-bold text-zinc-500 uppercase tracking-widest italic">
                SECURED VAULT INTERACTION PROTOCOL // ISO-20022 STANDARDS INVOLVED
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
