import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDownCircle, Landmark, Copy, CheckCircle2, ChevronRight, Calculator, ShieldCheck, Upload, Clock } from 'lucide-react';
import { useStore } from '@/src/lib/store';
import { useNavigate } from 'react-router-dom';

export default function Deposit() {
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('Bank Transfer');
  const [isRequested, setIsRequested] = useState(false);
  const [proofFile, setProofFile] = useState<File | null>(null);
  const deposit = useStore(state => state.deposit);
  const navigate = useNavigate();

  const handleDeposit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !proofFile) return;
    deposit(Number(amount), method, 'Pending');
    setIsRequested(true);
  };

  if (isRequested) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl mx-auto sleek-card p-8 sm:p-16 text-center border-gold/20"
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gold/10 text-gold border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
           <Clock size={32} className="sm:size-[48px]" strokeWidth={2.5} />
        </div>
        <h2 className="text-3xl sm:text-4xl mb-6 italic text-app-text">Request Pending</h2>
        <p className="text-zinc-500 mb-12 leading-relaxed uppercase text-xs font-bold tracking-[0.1em]">
          Your deposit for <span className="text-gold font-black font-mono text-xl">${Number(amount || 0).toLocaleString()}</span> has been submitted. 
          The admin will review your proof of payment and approve the deposit shortly.
        </p>
        <button 
          onClick={() => navigate('/dashboard')}
          className="sleek-button-gold w-full py-6"
        >
          Check Status in Dashboard
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sleek-card p-6 sm:p-12"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-12 text-center sm:text-left">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-app-bg border border-app-border text-gold rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
            <ArrowDownCircle size={28} className="sm:size-[36px]" strokeWidth={2.5} />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl italic gold-gradient-text font-display font-black">Add Funds</h3>
            <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em] mt-2 italic">Refill your account balance instantly</p>
          </div>
        </div>

        <form onSubmit={handleDeposit} className="space-y-10">
          <div className="group">
            <label className="block text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-4 group-focus-within:text-gold transition-colors">Amount to Add ($)</label>
            <div className="relative">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xl sm:text-2xl font-black text-zinc-700 italic">$</span>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-app-bg border border-app-border rounded-[1.5rem] pl-16 pr-8 py-6 sm:py-8 text-2xl sm:text-3xl font-black focus:outline-none focus:border-gold/50 focus:ring-4 focus:ring-gold/5 transition-all text-app-text italic"
                placeholder="0.00"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <label className="block text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-4">Payment Method</label>
              <select 
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="w-full bg-app-bg border border-app-border rounded-2xl px-6 py-6 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-gold/50 transition-all appearance-none cursor-pointer text-app-text"
              >
                <option>Bank Transfer</option>
                <option>Credit / Debit Card</option>
                <option>Crypto Deposit (BTC/USDT)</option>
              </select>
            </div>
            <div className="group">
              <label className="block text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-4">Currency</label>
              <select className="w-full bg-app-bg border border-app-border rounded-2xl px-6 py-6 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-gold/50 transition-all appearance-none cursor-pointer text-app-text">
                <option>USD - US Dollar</option>
                <option>EUR - Euro</option>
                <option>GBP - British Pound</option>
              </select>
            </div>
          </div>

          <div className="p-8 bg-app-bg rounded-2xl border border-dashed border-app-border flex items-center gap-6">
             <Landmark className="text-zinc-800 shrink-0" size={32} />
             <p className="text-[11px] leading-snug text-zinc-600 font-bold uppercase tracking-tight italic">
               Funds will be added to your balance after verification. Processing typically takes <span className="text-zinc-400">few minutes.</span>
             </p>
          </div>

          <div className="group">
            <label className="block text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-4 group-focus-within:text-gold transition-colors">Proof of Payment</label>
            <div className="relative">
              <div className="w-full bg-app-bg border-2 border-dashed border-app-border rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:border-gold/30 transition-all cursor-pointer relative overflow-hidden">
                <input 
                  type="file" 
                  onChange={(e) => setProofFile(e.target.files?.[0] || null)}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  required
                />
                <Upload size={32} className="text-zinc-700" />
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  {proofFile ? proofFile.name : "Click or Drag proof of payment here"}
                </p>
              </div>
            </div>
            <p className="text-[9px] text-zinc-700 mt-3 uppercase tracking-widest font-black italic">Supported: JPG, PNG, PDF (Max 5MB)</p>
          </div>

          <button 
            type="submit" 
            className="sleek-button-gold w-full py-8 text-lg"
          >
            Submit for Approval
          </button>
        </form>
      </motion.div>
    </div>
  );
}
