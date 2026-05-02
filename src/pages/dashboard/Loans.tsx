import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Home, 
  Heart, 
  User, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft,
  DollarSign,
  Calendar,
  Percent,
  CheckCircle2,
  Info,
  Clock,
  Briefcase,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useStore } from '@/src/lib/store';
import { useNavigate } from 'react-router-dom';

const LOAN_PLANS = [
  {
    id: 1,
    name: 'Personal Loan',
    rate: '5.5% APR',
    tenure: '12 - 60 Months',
    range: '$1,000 - $50,000',
    icon: User
  },
  {
    id: 2,
    name: 'Business Loan',
    rate: '4.2% APR',
    tenure: '24 - 120 Months',
    range: '$50,000 - $500,000',
    icon: Briefcase
  },
  {
    id: 3,
    name: 'Home Loan',
    rate: '3.5% APR',
    tenure: '120 - 360 Months',
    range: '$100,000 - $2,000,000',
    icon: Home
  },
  {
    id: 4,
    name: 'Car Loan',
    rate: '4.8% APR',
    tenure: '12 - 84 Months',
    range: '$5,000 - $100,000',
    icon: Building2
  }
];

export default function Loans() {
  const [selectedPlan, setSelectedPlan] = useState(LOAN_PLANS[0]);
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 space-y-10 pb-24">
      {/* Header */}
      <div className="space-y-4 text-center">
         <h1 className="text-4xl lg:text-6xl font-display font-black text-white italic tracking-tighter leading-none uppercase">
          LOAN <span className="text-gold">APPLICATION</span>
        </h1>
        <p className="text-zinc-600 font-bold uppercase tracking-[0.3em] text-[10px] mt-2 italic">
          Select a plan and initialize your liquidity request.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            key="plans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-10"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {LOAN_PLANS.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan)}
                  className={cn(
                    "p-8 rounded-[3rem] text-left transition-all duration-500 border relative overflow-hidden group",
                    selectedPlan.id === plan.id 
                      ? "bg-zinc-950 border-gold shadow-2xl scale-[1.02]" 
                      : "bg-zinc-950/50 border-white/5 hover:border-white/10"
                  )}
                >
                  <div className="absolute top-0 right-0 p-6 text-gold/5 pointer-events-none group-hover:text-gold/10 transition-colors">
                    <plan.icon size={80} />
                  </div>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="w-16 h-16 bg-black border border-white/10 rounded-2xl flex items-center justify-center text-gold">
                      <plan.icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-black text-white italic tracking-tighter uppercase leading-none">{plan.name}</h3>
                      <p className="text-[10px] font-black text-gold uppercase tracking-[0.2em] mt-2 italic">{plan.rate}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
                      <div>
                        <p className="text-[8px] text-zinc-600 font-black uppercase italic tracking-widest mb-1">Tenure</p>
                        <p className="text-[10px] font-black text-white italic">{plan.tenure}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[8px] text-zinc-600 font-black uppercase italic tracking-widest mb-1">Range</p>
                        <p className="text-[10px] font-black text-white italic">{plan.range}</p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-zinc-950 border border-white/5 rounded-[3rem] p-10 lg:p-14 space-y-10 shadow-2xl">
              <div className="space-y-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-zinc-800 uppercase tracking-widest ml-2 italic">Requested Amount *</label>
                  <div className="relative group">
                    <DollarSign className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-800 group-focus-within:text-gold transition-colors" size={24} />
                    <input 
                      placeholder="0.00" 
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full bg-black border border-white/10 rounded-2xl p-7 pl-16 text-3xl font-display font-black text-white uppercase italic tracking-tighter outline-none focus:border-gold transition-all" 
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-zinc-800 uppercase tracking-widest ml-2 italic">Repayment Period (Months) *</label>
                  <div className="relative">
                    <select className="w-full bg-black border border-white/10 rounded-2xl p-6 text-[11px] font-black text-white uppercase italic tracking-widest outline-none focus:border-gold appearance-none">
                      <option>12 MONTHS</option>
                      <option>24 MONTHS</option>
                      <option>36 MONTHS</option>
                      <option>48 MONTHS</option>
                      <option>60 MONTHS</option>
                    </select>
                    <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-600 rotate-90" size={18} />
                  </div>
                </div>
              </div>

              <div className="bg-[#FFFFCC] p-8 border border-amber-200 rounded-[2.5rem] flex gap-4">
                <Info className="text-amber-600 shrink-0" size={24} />
                <p className="text-[11px] font-bold text-amber-900 leading-relaxed uppercase tracking-tight italic">
                  LOAN APPROVAL IS SUBJECT TO CREDIT AUDIT AND SOVEREIGN RISK ASSESSMENT. ADDITIONAL DOCUMENTATION MAY BE REQUIRED AFTER SUBMISSION.
                </p>
              </div>

              <button 
                onClick={() => setStep(2)}
                disabled={!amount}
                className="w-full h-24 bg-gold text-black rounded-3xl text-[11px] font-black uppercase tracking-[0.5em] italic shadow-[0_20px_50px_rgba(212,175,55,0.25)] hover:scale-105 active:scale-95 transition-all group flex items-center justify-center gap-4 disabled:opacity-30 disabled:grayscale"
              >
                Submit Application <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zinc-950 border border-white/5 rounded-[4rem] p-16 text-center space-y-12 shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-12 text-emerald-500/5 pointer-events-none animate-pulse">
                <CheckCircle2 size={200} />
             </div>
             
             <div className="relative inline-block">
                <div className="absolute inset-0 bg-emerald-500 blur-[80px] opacity-20" />
                <div className="w-40 h-40 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 relative z-10 mx-auto">
                   <Clock size={80} strokeWidth={2.5} className="animate-pulse" />
                </div>
             </div>

             <div className="space-y-6 relative z-10">
                <h3 className="text-4xl lg:text-6xl font-display font-black text-white italic tracking-tighter uppercase leading-none">APPLICATION <span className="text-emerald-500">PENDING</span></h3>
                <p className="text-zinc-600 font-bold max-w-lg mx-auto text-[10px] uppercase leading-loose tracking-widest italic">
                  Your loan application for <span className="text-white font-black italic">${Number(amount).toLocaleString()}</span> has been successfully queued for audit. A credit officer will review your node profile and contact you within 24-48 hours.
                </p>
             </div>

             <div className="p-10 bg-black border border-white/5 rounded-[2.5rem] flex flex-col gap-3 max-w-sm mx-auto relative z-10">
                <p className="text-[9px] text-zinc-800 font-black uppercase tracking-[0.5em] italic">Reference ID</p>
                <p className="text-xl font-display font-black text-gold uppercase tracking-tighter">#LN-AUDIT-{Math.floor(Math.random()*1000000)}</p>
             </div>

             <div className="pt-8 relative z-10">
                <button 
                  onClick={() => navigate('/dashboard')}
                  className="bg-gold text-black px-16 py-8 rounded-[2rem] text-[11px] font-black uppercase tracking-[0.4em] italic shadow-2xl hover:scale-105 transition-all w-full sm:w-auto"
                >
                   Return to Hub
                </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
