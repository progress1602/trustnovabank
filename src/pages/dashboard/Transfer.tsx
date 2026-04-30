import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Users, 
  History, 
  ShieldCheck, 
  Plus, 
  Landmark,
  Zap,
  Clock,
  ArrowRight,
  TrendingUp,
  Search,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useStore } from '@/src/lib/store';
import { useNavigate } from 'react-router-dom';

const BENEFICIARIES = [
  { id: 1, name: 'Juliana Draper', account: '...4820', bank: 'Draper Wealth GMBH', initial: 'JD' },
  { id: 2, name: 'Marcus Sterling', account: '...1192', bank: 'Nova Crypto Node', initial: 'MS' },
  { id: 3, name: 'Klaus Bauer', account: '...9903', bank: 'Swiss Alpine Credit', initial: 'KB' },
  { id: 4, name: 'The Round Table', account: '...0044', bank: 'Sovereign Holding', initial: 'TR' }
];

export default function Transfer() {
  const [activeTab, setActiveTab] = useState('New Transaction');
  const [selectedBeneficiary, setSelectedBeneficiary] = useState<number | null>(null);
  const [amount, setAmount] = useState('');
  const [narrative, setNarrative] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { transfer, balance } = useStore();
  const navigate = useNavigate();

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !selectedBeneficiary) return;
    
    const beneficiary = BENEFICIARIES.find(b => b.id === selectedBeneficiary);
    if (!beneficiary) return;

    if (Number(amount) > balance) {
      alert("Insufficient assets for this settlement sequence.");
      return;
    }

    transfer(Number(amount), beneficiary.name);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl mx-auto sleek-card p-8 sm:p-16 text-center border-gold/20"
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gold/10 text-gold border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
           <CheckCircle2 size={32} className="sm:size-[48px]" strokeWidth={2.5} />
        </div>
        <h2 className="text-2xl sm:text-4xl mb-6 italic text-app-text font-display font-black">Transfer Confirmed</h2>
        <p className="text-zinc-500 mb-12 leading-relaxed uppercase text-[9px] sm:text-[10px] font-bold tracking-[0.1em]">
          The amount of <span className="text-gold font-black font-mono text-base sm:text-xl">${Number(amount).toLocaleString()}</span> has been sent successfully.
        </p>
        <button 
          onClick={() => navigate('/dashboard')}
          className="sleek-button-gold w-full py-6"
        >
          Back to Dashboard
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-app-border pb-12">
        <div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-app-text italic tracking-tighter">
            Send <span className="gold-gradient-text">Funds</span>
          </h1>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px] mt-2">
            Securely transfer assets to other users or bank accounts
          </p>
        </div>
        
        <div className="flex bg-app-card border border-app-border p-1 rounded-2xl w-full lg:w-auto overflow-x-auto no-scrollbar">
           {['New Transaction', 'Scheduled Payments', 'Beneficiaries'].map(tab => (
             <button 
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={cn(
                 "px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap flex-1 lg:flex-none",
                 activeTab === tab ? "bg-gold text-black shadow-lg shadow-gold/10" : "text-zinc-600 hover:text-app-text"
               )}
             >
               {tab}
             </button>
           ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
           <section className="bg-app-card border border-app-border rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 space-y-12 shadow-2xl">
              <form onSubmit={handleTransfer} className="space-y-12">
                <div className="space-y-8">
                  <div className="flex justify-between items-end px-2">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 flex items-center gap-3">
                        <Users size={14} className="text-gold" /> Select Beneficiary
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
                    {BENEFICIARIES.map(b => (
                      <div 
                        key={b.id}
                        onClick={() => setSelectedBeneficiary(b.id)}
                        className={cn(
                          "bg-app-bg border p-4 sm:p-6 rounded-2xl flex flex-col items-center gap-4 cursor-pointer transition-all hover:bg-zinc-900/5",
                          selectedBeneficiary === b.id ? "border-gold bg-gold/5 shadow-2xl shadow-gold/5 scale-[1.05]" : "border-app-border"
                        )}
                      >
                          <div className={cn(
                            "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-display font-black italic text-xs sm:text-sm",
                            selectedBeneficiary === b.id ? "bg-gold text-black" : "bg-app-card text-zinc-500"
                          )}>
                            {b.initial}
                          </div>
                          <p className="text-[9px] sm:text-[10px] font-black uppercase text-app-text tracking-widest text-center truncate w-full">{b.name.split(' ')[0]}</p>
                      </div>
                    ))}
                    <div className="bg-app-bg border border-dashed border-app-border p-4 sm:p-6 rounded-2xl flex flex-col items-center justify-center sm:justify-start gap-4 cursor-pointer hover:border-gold/50 hover:bg-zinc-900/5 group transition-all">
                       <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-app-card flex items-center justify-center text-zinc-800 group-hover:text-gold transition-colors">
                          <Plus size={18} />
                       </div>
                       <p className="text-[9px] sm:text-[10px] font-black uppercase text-zinc-800 tracking-widest group-hover:text-gold">Add</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-10 pt-12 border-t border-app-border">
                  <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 ml-1">Amount (USD)</label>
                      <div className="bg-app-bg border border-app-border rounded-2xl p-4 sm:p-6 flex items-center group focus-within:border-gold/50 transition-all">
                          <span className="text-2xl sm:text-3xl font-display font-black text-gold mr-4 italic">$</span>
                          <input 
                            type="number" 
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0.00" 
                            className="bg-transparent border-none outline-none text-2xl sm:text-3xl font-display font-black text-app-text italic w-full"
                            required
                          />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 ml-1">Transfer Frequency</label>
                      <div className="bg-app-bg border border-app-border rounded-2xl p-4 sm:p-6 focus-within:border-gold/50 transition-all">
                          <select className="bg-transparent border-none outline-none text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-app-text w-full appearance-none cursor-pointer">
                             <option className="bg-app-card">One-time Transfer</option>
                             <option className="bg-app-card">Weekly Auto-send</option>
                             <option className="bg-app-card">Monthly Auto-send</option>
                          </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 ml-1">Note (Optional)</label>
                    <input 
                      type="text" 
                      value={narrative}
                      onChange={(e) => setNarrative(e.target.value)}
                      placeholder="What is this for?..."
                      className="w-full bg-app-bg border border-app-border px-6 py-5 rounded-2xl text-xs font-black text-app-text outline-none focus:border-gold transition-all italic"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="sleek-button-gold w-full py-6 text-lg"
                >
                  Send Funds Now
                </button>
              </form>
           </section>
        </div>

        <div className="space-y-8">
           <section className="bg-app-card border border-app-border rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 shadow-xl">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-8 px-2 flex items-center gap-3">
                 <ShieldCheck size={14} className="text-gold" /> Security Ledger
              </h4>
              <div className="space-y-4 sm:space-y-6">
                 <div className="p-4 sm:p-6 bg-app-bg border border-app-border rounded-2xl flex gap-4">
                    <Zap className="text-gold shrink-0" size={18} />
                    <p className="text-[10px] font-medium text-zinc-500 leading-relaxed uppercase tracking-tight italic">
                      <span className="text-app-text font-black">Flash Clearing</span> enabled. All Peer-to-Peer sequences bypass standard node cooling.
                    </p>
                 </div>
                 <div className="p-6 bg-app-bg border border-app-border rounded-2xl flex gap-4">
                    <Landmark className="text-zinc-600 shrink-0" size={18} />
                    <p className="text-[10px] font-medium text-zinc-500 leading-relaxed uppercase tracking-tight italic">
                      SWIFT corridors active for international IBAN settlement.
                    </p>
                 </div>
              </div>
           </section>

           <div className="bg-app-card border border-gold/10 rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 space-y-6 shadow-xl">
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-zinc-500">
                 <span>Inter-Node Fees</span>
                 <span className="text-gold">0.00%</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-zinc-500">
                 <span>Latency Projection</span>
                 <span className="text-app-text italic">Synchronous</span>
              </div>
              <div className="pt-6 border-t border-app-border flex justify-between items-center">
                 <p className="text-[9px] text-zinc-700 font-bold uppercase italic tracking-widest leading-none">Status Code</p>
                 <p className="text-xs font-mono font-black text-green-500">OP_RECURS_OK</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
