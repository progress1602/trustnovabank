import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  DollarSign, 
  Check, 
  MessageSquare, 
  Plus, 
  ArrowLeft,
  ChevronRight,
  Info,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useStore } from '@/src/lib/store';
import { useNavigate } from 'react-router-dom';
import { graphqlFetch, CREATE_CHARITY_MUTATION } from '@/src/lib/graphql';

const CHARITIES = [
  {
    id: 1,
    name: 'Education For All',
    category: 'Education',
    description: 'Providing quality education to underprivileged children globally.',
    icon: '🎓'
  },
  {
    id: 2,
    name: 'Clean Water Initiative',
    category: 'Health',
    description: 'Ensuring access to safe and clean drinking water in developing regions.',
    icon: '💧'
  },
  {
    id: 3,
    name: 'Reforestation Group',
    category: 'Environment',
    description: 'Restoring forests and protecting biodiversity through tree planting.',
    icon: '🌳'
  },
  {
    id: 4,
    name: 'Global Hunger Relief',
    category: 'Poverty',
    description: 'Fighting food insecurity by providing meals to those in need.',
    icon: '🍲'
  }
];

export default function Charity() {
  const { balance, showToast } = useStore();
  const navigate = useNavigate();
  const [selectedCharity, setSelectedCharity] = useState(CHARITIES[0]);
  const [amount, setAmount] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [donorMessage, setDonorMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [success, setSuccess] = useState(false);

  const lowBalance = balance < Number(amount);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || lowBalance) return;

    setSubmitting(true);
    setSubmitError('');
    try {
      const input = {
        amount: Number(amount),
        organizationName: selectedCharity.name,
        message: isAnonymous ? `ANONYMOUS DONATION: ${donorMessage || 'N/A'}` : (donorMessage || 'GOD BLESS')
      };

      await graphqlFetch(CREATE_CHARITY_MUTATION, { input });
      showToast(`Generous donation of $${Number(amount).toLocaleString('en-US', { minimumFractionDigits: 2 })} to ${selectedCharity.name} processed successfully.`, 'success', 'HUMANITARIAN FLOW SIGNED');
      setSuccess(true);
    } catch (err: any) {
      console.error("Charity donation error:", err);
      setSubmitError(err.message || 'Donation validation error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-xl mx-auto py-24 px-6 text-center space-y-12">
        <div className="relative inline-block mx-auto">
          <div className="absolute inset-0 bg-emerald-500 blur-[60px] opacity-20 animate-pulse" />
          <div className="w-32 h-32 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 relative z-10 mx-auto group">
            <Heart size={64} className="group-hover:scale-110 transition-transform duration-500" strokeWidth={2.5} />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl lg:text-5xl font-display font-black text-white italic tracking-tighter uppercase">DONATION <span className="text-emerald-500">RECEIVED</span></h2>
          <p className="text-zinc-500 font-bold max-w-md mx-auto text-xs uppercase leading-loose tracking-widest leading-relaxed">
            Your generous donation of <span className="text-white font-black italic">${Number(amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}</span> to <span className="text-white font-black">{selectedCharity.name}</span> has been debited and queued for real-time disbursement. Thank you for your humanitarian protocol.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button 
            type="button"
            onClick={() => navigate('/dashboard')}
            className="bg-emerald-600 text-white px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] italic shadow-2xl hover:bg-emerald-500 transition-all w-full sm:w-auto"
          >
            RETURN TO DASHBOARD
          </button>
          <button 
            type="button"
            onClick={() => {
              setAmount('');
              setDonorMessage('');
              setSuccess(false);
            }}
            className="bg-zinc-950 text-white border border-white/10 px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] italic hover:bg-zinc-900 transition-all w-full sm:w-auto"
          >
            NEW CONTRIBUTE
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 space-y-10 pb-24">
      {/* Hero Balance Card */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] -rotate-45" />
        <div className="relative z-10 space-y-2">
          <p className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em] italic">Available Balance</p>
          <h2 className="text-5xl font-display font-black text-white italic tracking-tighter leading-none whitespace-pre-wrap flex items-baseline gap-2">
            ${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </h2>
          <p className="text-[11px] font-bold text-white/80 uppercase tracking-tight italic">Funds available for charitable donations</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
        {/* Left: Charity List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-[11px] font-black text-white uppercase tracking-widest italic">Select Charity</h3>
          </div>
          <div className="space-y-4">
            {CHARITIES.map((charity) => (
              <button
                key={charity.id}
                onClick={() => setSelectedCharity(charity)}
                className={cn(
                  "w-full p-6 rounded-[2rem] text-left transition-all duration-500 border flex items-center gap-5 group",
                  selectedCharity.id === charity.id 
                    ? "bg-zinc-950 border-gold shadow-2xl scale-[1.02]" 
                    : "bg-zinc-950/50 border-white/5 hover:border-white/10"
                )}
              >
                <div className="w-14 h-14 bg-black border border-white/10 rounded-2xl flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform">
                  {charity.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-black text-white uppercase italic tracking-widest">{charity.name}</h4>
                  <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-tight truncate border-b border-white/5 pb-1 mb-1">{charity.category}</p>
                  <p className="text-[9px] font-bold text-zinc-500 lowercase leading-relaxed line-clamp-1 italic">{charity.description}</p>
                </div>
                {selectedCharity.id === charity.id && (
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-black shadow-lg">
                    <Check size={16} strokeWidth={4} />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Donation Form */}
        <div className="bg-zinc-950 border border-white/5 rounded-[3rem] p-10 lg:p-14 space-y-10 shadow-2xl relative">
          <div className="absolute top-0 right-0 p-8 text-gold/5 pointer-events-none">
            <Heart size={100} />
          </div>
          
          <div className="space-y-2 relative z-10">
            <h3 className="text-2xl font-display font-black text-white italic tracking-tighter uppercase leading-none">Donation <span className="text-gold">Details</span></h3>
            <p className="text-zinc-600 font-bold uppercase tracking-[0.3em] text-[10px] italic">Complete your contribution</p>
          </div>

          <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <label className="text-[10px] font-black text-zinc-800 uppercase tracking-widest ml-2 italic">How much would you like to donate? *</label>
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

            <div className="space-y-6">
              <div 
                className="flex items-center gap-4 group cursor-pointer"
                onClick={() => setIsAnonymous(!isAnonymous)}
              >
                <div className={cn(
                  "w-7 h-7 rounded-xl border-2 flex items-center justify-center transition-all",
                  isAnonymous ? "bg-emerald-600 border-emerald-500 scale-110" : "bg-black border-white/10"
                )}>
                  {isAnonymous && <Check size={16} strokeWidth={4} className="text-white" />}
                </div>
                <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest italic group-hover:text-white transition-colors">Make this donation anonymous</p>
              </div>

              <div className="space-y-4">
                 <label className="text-[10px] font-black text-zinc-800 uppercase tracking-widest ml-2 italic">Leave a Message (Optional)</label>
                 <div className="relative group">
                    <MessageSquare className="absolute left-6 top-6 text-zinc-800 group-focus-within:text-gold transition-colors" size={20} />
                    <textarea 
                      placeholder="YOUR MESSAGE..." 
                      value={donorMessage}
                      onChange={(e) => setDonorMessage(e.target.value)}
                      className="w-full bg-black border border-white/10 rounded-2xl p-6 pl-16 h-32 text-[11px] font-black text-white uppercase italic tracking-widest outline-none focus:border-gold transition-all resize-none" 
                    />
                 </div>
              </div>
            </div>

            {lowBalance && Number(amount) > 0 && (
              <div className="bg-[#FFFFCC] p-6 border border-amber-200 rounded-[2rem] flex gap-4 items-start animate-in fade-in slide-in-from-top-4 duration-500">
                <AlertCircle className="text-amber-600 shrink-0" size={20} />
                <div className="space-y-3">
                  <p className="text-[11px] font-black text-amber-900 leading-relaxed uppercase tracking-tight italic">
                    INSUFFICIENT BALANCE FOR THIS DONATION. PLEASE DEPOSIT FUNDS TO CONTINUE.
                  </p>
                  <button 
                    type="button"
                    onClick={() => navigate('/dashboard/deposit')}
                    className="flex items-center gap-2 text-[9px] font-black text-amber-600 uppercase tracking-widest italic hover:text-amber-700 transition-colors"
                  >
                    Deposit Funds <Plus size={14} />
                  </button>
                </div>
              </div>
            )}

            {submitError && (
              <div className="p-5 bg-red-500/5 border border-red-500/10 rounded-2xl text-[10px] text-red-500 font-bold uppercase tracking-widest text-center">
                {submitError}
              </div>
            )}

            <button 
              type="submit"
              disabled={submitting || lowBalance || !amount}
              className="w-full h-20 bg-emerald-600 text-white rounded-3xl text-[11px] font-black uppercase tracking-[0.5em] italic shadow-[0_20px_50px_rgba(5,150,105,0.25)] hover:scale-105 active:scale-95 transition-all disabled:grayscale disabled:opacity-30 disabled:cursor-not-allowed group flex items-center justify-center gap-4"
            >
              {submitting ? "Processing Donation..." : "Donate Now"} 
              {!submitting && <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
