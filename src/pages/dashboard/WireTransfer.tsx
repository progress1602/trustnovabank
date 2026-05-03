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
  ChevronDown
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useStore } from '@/src/lib/store';
import { useNavigate } from 'react-router-dom';
import { CountrySelect, StateSelect } from '@/src/components/ui/CountrySelect';
import { COUNTRIES_DATA } from '@/src/lib/countries';

export default function WireTransfer() {
  const { balance } = useStore();
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
          <p className="text-xl sm:text-3xl font-display font-black text-black italic tracking-tighter leading-none">${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
        </div>
      </div>

      <div className="pt-8 sm:pt-10 space-y-8 sm:space-y-10">
        {/* Information Box (light yellow) */}
        <div className="bg-[#FFFFCC] p-6 sm:p-8 border border-amber-200 rounded-[2rem] sm:rounded-[2.5rem] flex gap-3 sm:gap-4 md:items-center">
          <Info className="text-amber-600 shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
          <p className="text-[9px] sm:text-[11px] font-bold text-amber-900 leading-relaxed uppercase tracking-tight italic">
            Secure Wire Protocol: Ensure recipient data is verified. Clearing cycles vary by institution.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={(e) => e.preventDefault()} className="bg-zinc-950 border border-white/5 rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-14 space-y-6 sm:space-y-8 shadow-2xl">
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
             <p className="text-[7px] sm:text-[9px] font-bold text-zinc-700 uppercase tracking-widest italic ml-1 sm:ml-2 text-center sm:text-left">Min: $10,000.00 - Max: $1,000,000.00</p>
          </div>

          <button className="w-full h-20 sm:h-24 bg-[#FF4D00] text-black rounded-2xl sm:rounded-3xl text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] italic shadow-[0_20px_50px_rgba(255,77,0,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all mt-4 sm:mt-6">
            Execute Transfer
          </button>
        </form>
      </div>
    </div>
  );
}
