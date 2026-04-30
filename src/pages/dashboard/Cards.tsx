import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CreditCard, 
  Plus, 
  ShieldCheck, 
  Zap, 
  Lock, 
  Crown, 
  Briefcase,
  Layers,
  ChevronRight,
  Landmark,
  Eye,
  Settings,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useStore } from '@/src/lib/store';

const CARD_SERIES = [
  {
    id: 1,
    name: 'Virtual Shadow',
    type: 'Digital Protocol' as const,
    limit: '$5,000 Monthly',
    color: 'zinc-800',
    icon: ShieldCheck,
    features: ['Instant Issuance', 'Dynamic CVV', 'One-time Use']
  },
  {
    id: 2,
    name: 'Elite Gold',
    type: 'Sovereign' as const,
    limit: '$25,000 Monthly',
    color: 'gold',
    icon: Crown,
    features: ['Physical NFC', 'Insurance Coverage', 'Global Access']
  },
  {
    id: 3,
    name: 'Business Platinum',
    type: 'Elite' as const,
    limit: 'Unlimited Corridors',
    color: 'zinc-400',
    icon: Briefcase,
    features: ['Corporate Controls', 'Tax Archiving', '2% Cashback']
  }
];

export default function Cards() {
  const [activeTab, setActiveTab] = useState('My Arsenal');
  const [showOrderModal, setShowOrderModal] = useState<typeof CARD_SERIES[0] | null>(null);
  const [orderComplete, setOrderComplete] = useState(false);
  const { cards, orderCard, fullName } = useStore();

  const handleOrder = () => {
    if (showOrderModal) {
      orderCard(showOrderModal.type as any, showOrderModal.name);
      setOrderComplete(true);
      setTimeout(() => {
        setOrderComplete(false);
        setShowOrderModal(null);
        setActiveTab('My Arsenal');
      }, 2000);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-app-border pb-12">
        <div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-app-text italic tracking-tighter">
            Asset <span className="gold-gradient-text">Arsenal</span>
          </h1>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px] mt-2">
            Management and issuance of physical and virtual sovereign tokens
          </p>
        </div>
        
        <div className="flex bg-app-card border border-app-border p-1 rounded-2xl w-full md:w-auto overflow-x-auto no-scrollbar">
           {['My Arsenal', 'Issue Protocol', 'Security Controls'].map(tab => (
             <button 
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={cn(
                 "px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap flex-1 md:flex-none",
                 activeTab === tab ? "bg-gold text-black shadow-lg shadow-gold/10" : "text-zinc-600 hover:text-app-text"
               )}
             >
               {tab}
             </button>
           ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'My Arsenal' && (
          <motion.div 
            key="arsenal"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="grid lg:grid-cols-2 gap-12"
          >
            <section className="space-y-8">
               <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 px-2 flex items-center gap-3">
                  <Layers size={14} className="text-gold" /> Active Identifiers
               </h3>
               
               <div className="space-y-6">
                  {cards.map(card => (
                    <div 
                      key={card.id}
                      className="bg-app-card border border-app-border rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 flex flex-col md:flex-row items-center gap-6 sm:gap-10 group cursor-pointer hover:border-gold/30 transition-all shadow-2xl"
                    >
                       <div className={cn(
                         "w-full md:w-64 h-44 sm:h-40 rounded-2xl relative overflow-hidden transition-all duration-700 shrink-0",
                         card.type === 'Elite' || card.type === 'Sovereign' ? "bg-gold text-black shadow-2xl shadow-gold/10" : "bg-black border border-zinc-800 text-gold"
                       )}>
                          <div className="p-6 h-full flex flex-col justify-between relative z-10">
                             <div className="flex justify-between items-start">
                                <p className="text-[10px] font-black uppercase tracking-widest italic">{card.name}</p>
                                <Landmark size={20} strokeWidth={3} />
                             </div>
                             <p className="text-xl font-mono font-black tracking-[0.3em]">**** {card.number}</p>
                             <div className="flex justify-between items-end">
                                <p className="text-[9px] font-black uppercase tracking-tighter">{fullName.toUpperCase()}</p>
                                <p className="text-[10px] font-mono font-black">{card.expiry}</p>
                             </div>
                          </div>
                          {card.status === 'pending' && (
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-20">
                               <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-gold text-black px-3 py-1 rounded-full animate-pulse">Encoding...</span>
                            </div>
                          )}
                       </div>

                       <div className="flex-1 space-y-6 w-full">
                          <div className="flex justify-between items-start">
                             <div>
                                <h4 className="text-xl font-display font-black text-app-text italic tracking-tighter group-hover:text-gold transition-colors">
                                  {card.name} 
                                </h4>
                                <p className="text-zinc-600 text-[9px] font-black uppercase tracking-widest mt-1 italic">Status: {card.status === 'active' ? 'Secure Pipeline' : 'Protocol Pending'}</p>
                             </div>
                             <div className="flex gap-2">
                                <div className="w-10 h-10 bg-app-bg border border-app-border rounded-xl flex items-center justify-center text-zinc-700 hover:text-gold transition-colors">
                                   <Lock size={18} />
                                </div>
                                <div className="w-10 h-10 bg-app-bg border border-app-border rounded-xl flex items-center justify-center text-zinc-700 hover:text-gold transition-colors">
                                   <Settings size={18} />
                                </div>
                             </div>
                          </div>
                          <div className="pt-6 border-t border-app-border flex justify-between items-center">
                             <div>
                                <p className="text-zinc-700 text-[8px] font-black uppercase mb-1">Available Yield</p>
                                <p className="text-sm font-black text-app-text italic tracking-tighter">${card.balance.toLocaleString()}.00 Clear</p>
                             </div>
                             <ChevronRight className="text-zinc-900 group-hover:text-gold transition-colors" size={24} />
                          </div>
                       </div>
                    </div>
                  ))}

                  <button 
                    onClick={() => setActiveTab('Issue Protocol')}
                    className="w-full border-2 border-dashed border-app-border rounded-[2.5rem] p-10 flex flex-col items-center gap-4 hover:border-gold/30 hover:bg-app-card transition-all group"
                  >
                     <div className="w-14 h-14 bg-app-card border border-app-border rounded-2xl flex items-center justify-center text-zinc-700 group-hover:text-gold group-hover:bg-gold/10 transition-all">
                        <Plus size={28} />
                     </div>
                     <p className="text-[10px] font-black uppercase text-zinc-700 tracking-[0.3em] group-hover:text-app-text transition-colors">Initialize New Protocol</p>
                  </button>
               </div>
            </section>

            <section className="space-y-8">
               <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 px-2 flex items-center gap-3">
                  <ShieldCheck size={14} className="text-gold" /> Global Deployment
               </h3>
               <div className="bg-app-card border border-app-border rounded-[2.5rem] p-10 space-y-10">
                  <div className="space-y-6">
                     <p className="text-[9px] text-zinc-700 font-black uppercase tracking-widest px-1">Network Permissions</p>
                     {[
                       { label: 'E-Commerce Nodes', status: true },
                       { label: 'ATM Extraction', status: true },
                       { label: 'Contactless Yield', status: false },
                       { label: 'Sub-Zero Transactions', status: true }
                     ].map((s, idx) => (
                       <div key={idx} className="flex justify-between items-center p-5 bg-app-bg rounded-2xl border border-app-border group cursor-pointer hover:border-gold/20 transition-all">
                          <span className="text-[11px] font-black text-app-text uppercase tracking-tighter italic group-hover:text-gold transition-colors">{s.label}</span>
                          <div className={cn(
                            "w-10 h-5 rounded-full relative transition-all duration-300",
                            s.status ? "bg-gold" : "bg-zinc-800"
                          )}>
                             <div className={cn(
                               "absolute top-1 w-3 h-3 rounded-full bg-black transition-all",
                               s.status ? "right-1" : "left-1"
                             )} />
                          </div>
                       </div>
                     ))}
                  </div>

                  <div className="pt-10 border-t border-zinc-900 space-y-4">
                     <button className="sleek-button-gold w-full py-5">
                        Commit Arsenal Constraints
                     </button>
                     <p className="text-[9px] text-zinc-600 text-center font-bold uppercase tracking-widest italic opacity-50">Node Sync Frequency: 0.03ms</p>
                  </div>
               </div>
            </section>
          </motion.div>
        )}

        {activeTab === 'Issue Protocol' && (
          <motion.div
            key="issue"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {CARD_SERIES.map((tier, idx) => (
              <div
                key={idx}
                className={cn(
                   "bg-app-card border rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden group hover:scale-[1.02] transition-all duration-500",
                   tier.color === 'gold' ? "border-gold/30 shadow-2xl shadow-gold/5" : "border-app-border"
                )}
              >
                 <div className="relative z-10 flex flex-col h-full space-y-12">
                    <div className="flex justify-between items-start">
                       <div className={cn(
                         "w-16 h-16 rounded-2xl flex items-center justify-center border",
                         tier.color === 'gold' ? "bg-gold/10 border-gold/20 text-gold shadow-[0_0_20px_rgba(212,175,55,0.1)]" : "bg-app-bg border-app-border text-zinc-600"
                       )}>
                          <tier.icon size={32} />
                       </div>
                    </div>

                    <div>
                       <h3 className="text-2xl font-display font-black text-app-text italic tracking-tighter group-hover:text-gold transition-colors">{tier.name}</h3>
                       <p className="text-zinc-600 text-[10px] font-black uppercase italic tracking-widest mt-2">{tier.type} • {tier.limit}</p>
                    </div>

                    <div className="space-y-4 flex-1">
                       {tier.features.map((f, i) => (
                         <div key={i} className="flex items-center gap-3 text-[10px] font-black text-zinc-500 uppercase tracking-tight italic">
                            <Zap size={10} className="text-gold" /> {f}
                         </div>
                       ))}
                    </div>

                    <button 
                      onClick={() => setShowOrderModal(tier)}
                      className={cn(
                        "w-full py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl",
                        tier.color === 'gold' ? "bg-gold text-black shadow-gold/20" : "bg-zinc-900 text-white hover:bg-zinc-800"
                      )}
                    >
                      Initialize Request
                    </button>
                 </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Order Modal */}
      <AnimatePresence>
        {showOrderModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => !orderComplete && setShowOrderModal(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-app-card border border-app-border rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl pointer-events-none" />
              
              {orderComplete ? (
                <div className="py-8 sm:py-12 flex flex-col items-center gap-6 sm:gap-8 text-center animate-in zoom-in duration-500">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gold/10 rounded-full flex items-center justify-center text-gold border border-gold/20">
                      <CheckCircle2 size={36} className="sm:size-[48px] animate-in zoom-in spin-in-90 duration-700" strokeWidth={3} />
                   </div>
                   <div>
                      <h3 className="text-2xl sm:text-3xl font-display font-black text-app-text italic tracking-tighter">Protocol Authorized</h3>
                      <p className="text-zinc-500 text-[9px] sm:text-[10px] font-black uppercase tracking-widest mt-3">Encoding identifier to arsenal...</p>
                   </div>
                </div>
              ) : (
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold border border-gold/20">
                       <showOrderModal.icon size={24} className="sm:size-[32px]" />
                    </div>
                    <button className="p-2 text-zinc-700 hover:text-white transition-colors" onClick={() => setShowOrderModal(null)}>
                       <Plus size={20} className="rotate-45 sm:size-[24px]" />
                    </button>
                  </div>

                  <div>
                     <h3 className="text-2xl sm:text-4xl font-display font-black text-app-text italic tracking-tighter">Confirm Issue <span className="gold-gradient-text">Protocol</span></h3>
                     <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mt-2">Initialize {showOrderModal.name} sequence</p>
                  </div>

                  <div className="space-y-4 pt-6">
                    <div className="flex justify-between p-5 bg-app-bg rounded-2xl border border-app-border">
                       <span className="text-zinc-600 text-[9px] font-black uppercase tracking-widest">Protocol Tier</span>
                       <span className="text-app-text text-sm font-black italic">{showOrderModal.name}</span>
                    </div>
                    <div className="flex justify-between p-5 bg-app-bg rounded-2xl border border-app-border">
                       <span className="text-zinc-600 text-[9px] font-black uppercase tracking-widest">Extraction Limit</span>
                       <span className="text-app-text text-sm font-black italic">{showOrderModal.limit}</span>
                    </div>
                    <div className="flex justify-between p-5 bg-app-bg rounded-2xl border border-app-border">
                       <span className="text-zinc-600 text-[9px] font-black uppercase tracking-widest">Issuance Fee</span>
                       <span className="text-gold text-sm font-black italic">FREE (ELITE_PERMIT)</span>
                    </div>
                  </div>

                  <button 
                    onClick={handleOrder}
                    className="sleek-button-gold w-full py-6 mt-8 shadow-[0_20px_50px_rgba(255,191,0,0.15)]"
                  >
                    Commit Protocol
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
