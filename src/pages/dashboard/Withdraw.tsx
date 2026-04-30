import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpCircle, 
  Landmark, 
  CreditCard, 
  Bitcoin, 
  ShieldCheck, 
  AlertCircle,
  Plus,
  ChevronRight,
  TrendingUp,
  Clock,
  ArrowRight,
  ArrowUpRight,
  Send
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useStore } from '@/src/lib/store';
import { useNavigate } from 'react-router-dom';

const WITHDRAWAL_METHODS = [
  {
    id: 'bank',
    name: 'Bank Withdrawal',
    icon: Landmark,
    description: 'Transfer to your external bank account',
    time: '2-4 Business Days',
    limit: 'Up to $100,000 / Day',
  },
  {
    id: 'crypto',
    name: 'Crypto Withdrawal',
    icon: Bitcoin,
    description: 'Fast settlement via BTC/USDT',
    time: 'Instant',
    limit: 'Unlimited',
  }
];

export default function Withdraw() {
  const [step, setStep] = useState(1);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  
  const { balance, withdraw } = useStore();
  const navigate = useNavigate();

  const handleWithdraw = () => {
    if (!amount || !selectedMethod) return;
    
    if (Number(amount) > balance) {
      alert("Insufficient funds for this withdrawal.");
      return;
    }

    const method = WITHDRAWAL_METHODS.find(m => m.id === selectedMethod);
    withdraw(Number(amount), method?.name || selectedMethod, address);
    setStep(3);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-700">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-app-border pb-12">
        <div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-app-text italic tracking-tighter">
            Withdraw <span className="gold-gradient-text">Funds</span>
          </h1>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px] mt-2">
            Move your assets to an external account
          </p>
        </div>
        <div className="flex items-center gap-4 bg-app-card border border-app-border px-6 py-3 rounded-2xl w-full lg:w-auto justify-end">
           <div className="flex flex-col items-end">
              <p className="text-[8px] text-zinc-700 font-black uppercase tracking-widest leading-none mb-1">Available Balance</p>
              <p className="text-base sm:text-lg font-black text-app-text italic tracking-tighter">${balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
           </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid gap-6"
          >
            {WITHDRAWAL_METHODS.map((method) => (
              <div
                key={method.id}
                onClick={() => {
                  setSelectedMethod(method.id);
                  setStep(2);
                }}
                className="bg-app-card border border-app-border rounded-[2rem] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 cursor-pointer hover:border-gold/40 hover:bg-app-bg transition-all group shadow-2xl"
              >
                <div className="flex items-center gap-4 sm:gap-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-app-bg border border-app-border rounded-2xl flex items-center justify-center text-zinc-500 group-hover:text-gold transition-all shrink-0">
                    <method.icon size={24} className="sm:size-[32px]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-black text-app-text italic tracking-tighter group-hover:text-gold transition-colors">{method.name}</h3>
                    <p className="text-zinc-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mt-1">{method.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-12 w-full md:w-auto border-t md:border-t-0 md:border-l border-app-border pt-8 md:pt-0 md:pl-12">
                   <div className="hidden sm:block">
                      <p className="text-[9px] text-zinc-700 font-black uppercase mb-1">Processing Time</p>
                      <p className="text-xs font-black text-app-text italic tracking-tighter">{method.time}</p>
                   </div>
                   <ChevronRight className="text-zinc-800 group-hover:text-gold group-hover:translate-x-1 transition-all" size={24} />
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="bg-app-card border border-app-border rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 max-w-2xl mx-auto shadow-2xl"
          >
             <div className="space-y-8 sm:space-y-12">
                <div className="text-center">
                   <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gold/10 rounded-[2rem] flex items-center justify-center text-gold mx-auto mb-6 sm:mb-8">
                      <ArrowUpCircle size={28} className="sm:size-[36px]" />
                   </div>
                   <h2 className="text-2xl sm:text-3xl font-display font-black text-app-text italic tracking-tighter">Enter Withdrawal Amount</h2>
                   <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.3em] mt-2">Specify the amount you'd like to transfer</p>
                </div>

                <div className="space-y-8 sm:space-y-10">
                   <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 ml-1">Amount (USD)</label>
                      <div className="bg-app-bg border border-app-border rounded-2xl p-4 sm:p-6 flex items-center">
                         <span className="text-2xl sm:text-4xl font-display font-black text-gold mr-4">$</span>
                         <input 
                           type="number" 
                           value={amount}
                           onChange={(e) => setAmount(e.target.value)}
                           placeholder="0.00" 
                           className="bg-transparent border-none outline-none text-2xl sm:text-4xl font-display font-black text-app-text italic w-full"
                         />
                      </div>
                      <p className="text-right text-[9px] font-black uppercase text-gold/60 tracking-widest">Max: ${balance.toLocaleString()}</p>
                   </div>

                   <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 ml-1">Recipient Account / Address</label>
                      <input 
                        type="text" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder={selectedMethod === 'crypto' ? "Enter Wallet Address..." : "Enter Account Details..."}
                        className="w-full bg-app-bg border border-app-border px-6 py-5 rounded-2xl text-xs font-black text-app-text italic outline-none focus:border-gold transition-all"
                      />
                   </div>
                </div>

                   <div className="flex gap-4">
                   <button 
                     onClick={() => setStep(1)}
                     className="flex-1 border border-app-border py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-zinc-600 hover:text-app-text transition-colors"
                   >
                     Back
                   </button>
                   <button 
                     onClick={handleWithdraw}
                     className="sleek-button-gold flex-[2] py-5"
                   >
                     Confirm Withdrawal
                   </button>
                </div>
             </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto text-center"
          >
             <div className="bg-app-card border border-app-border rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-16 space-y-10 shadow-22xl">
                 <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gold rounded-full flex items-center justify-center text-black mx-auto shadow-2xl shadow-gold/20">
                   <ShieldCheck size={32} className="sm:size-[48px]" strokeWidth={3} />
                </div>
                <div>
                   <h3 className="text-2xl sm:text-3xl font-display font-black text-app-text italic tracking-tighter">Withdrawal Initialized</h3>
                   <p className="text-zinc-500 font-medium leading-relaxed mt-4 text-xs sm:text-base">
                      Your withdrawal request has been received and is being processed. You will receive a notification once the transfer is complete.
                   </p>
                </div>
                <div className="p-6 bg-app-bg rounded-2xl border border-app-border flex flex-col gap-2 shadow-inner">
                   <p className="text-[9px] text-zinc-700 font-black uppercase tracking-widest">Transaction ID</p>
                   <p className="text-sm font-mono font-black text-gold">#TNX-WD-{Math.floor(Math.random()*1000000)}</p>
                </div>
                <button 
                  onClick={() => navigate('/dashboard')}
                  className="w-full bg-zinc-900 text-white py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors shadow-lg"
                >
                   Go to Dashboard
                </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
