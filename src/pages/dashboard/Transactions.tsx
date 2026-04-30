import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Filter, 
  ArrowDownLeft, 
  ArrowUpRight, 
  Download, 
  Calendar,
  ChevronDown,
  LayoutGrid,
  List as ListIcon,
  Clock,
  Shield,
  CreditCard,
  Landmark,
  ArrowUpCircle
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useStore } from '@/src/lib/store';

const FILTERS = ['Today', '7 Days', '30 Days', 'Custom Range'];
const CATEGORIES = ['All Activity', 'Deposits', 'Transfers', 'Withdrawals'];

export default function Transactions() {
  const [activeFilter, setActiveFilter] = useState('7 Days');
  const [activeCategory, setActiveCategory] = useState('All Activity');
  const { transactions } = useStore();

  const filteredTransactions = useMemo(() => {
    if (activeCategory === 'All Activity') return transactions;
    return transactions.filter(tx => tx.type + 's' === activeCategory);
  }, [transactions, activeCategory]);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header & Controls */}
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8">
        <div>
           <h1 className="text-3xl sm:text-4xl font-display font-black text-app-text italic tracking-tighter">
             Transaction <span className="gold-gradient-text">History</span>
           </h1>
           <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px] mt-2">
             A complete history of all your account activities
           </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
           <button className="flex items-center justify-center gap-3 px-6 py-3 bg-app-card border border-app-border rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-gold hover:border-gold/50 transition-all shadow-xl flex-1 sm:flex-none">
             <Download size={14} /> Statements
           </button>
           <button className="sleek-button-gold px-6 py-3 text-[10px] flex-1 sm:flex-none">
             <Calendar size={14} className="mr-2" /> Recurring
           </button>
        </div>
      </div>

      {/* Filter Matrix */}
      <div className="bg-app-card border border-app-border rounded-[2rem] p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
         <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto">
            {CATEGORIES.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest whitespace-nowrap transition-all",
                  activeCategory === cat ? 'bg-app-bg text-gold border border-gold/20 shadow-inner' : 'text-zinc-600 hover:text-app-text'
                )}
              >
                {cat}
              </button>
            ))}
         </div>

         <div className="flex items-center gap-4 w-full md:w-auto justify-end">
            <div className="flex items-center gap-1 bg-app-bg p-1 rounded-xl border border-app-border">
               {FILTERS.map(f => (
                 <button 
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={cn(
                      "px-4 py-2 rounded-lg text-[8px] font-black uppercase tracking-widest transition-all",
                      activeFilter === f ? 'bg-app-card text-app-text shadow-sm border border-app-border' : 'text-zinc-700 hover:text-zinc-400'
                    )}
                 >
                   {f}
                 </button>
               ))}
            </div>
            <button className="p-3 bg-app-bg border border-app-border rounded-xl text-zinc-500 hover:text-gold transition-colors">
               <Filter size={18} />
            </button>
         </div>
      </div>

      {/* Main Ledger Table */}
      <div className="bg-app-card border border-app-border rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl">
         {/* Desktop Table View */}
         <div className="hidden sm:block overflow-x-auto no-scrollbar">
            <table className="w-full">
               <thead>
                  <tr className="bg-app-bg/50 border-b border-app-border">
                     <th className="px-10 py-6 text-left text-[9px] font-black uppercase tracking-[0.3em] text-zinc-700 w-[40%]">Detail</th>
                     <th className="px-10 py-6 text-center text-[9px] font-black uppercase tracking-[0.3em] text-zinc-700">Method</th>
                     <th className="px-10 py-6 text-center text-[9px] font-black uppercase tracking-[0.3em] text-zinc-700">Date/Time</th>
                     <th className="px-10 py-6 text-right text-[9px] font-black uppercase tracking-[0.3em] text-zinc-700">Amount</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-app-border">
                  {filteredTransactions.length > 0 ? filteredTransactions.map((tx, idx) => (
                    <motion.tr 
                      key={tx.id || idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="group hover:bg-app-bg/40 transition-colors cursor-pointer"
                    >
                       <td className="px-10 py-7">
                          <div className="flex items-center gap-6">
                             <div className={cn(
                               "w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500",
                               tx.type === 'Deposit' 
                                 ? 'bg-green-500/5 border-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-black shadow-[0_0_15px_rgba(34,197,94,0.1)]' 
                                 : 'bg-gold/5 border-gold/10 text-gold group-hover:bg-gold group-hover:text-black group-hover:border-gold'
                             )}>
                                {tx.type === 'Deposit' ? <ArrowDownLeft size={22} strokeWidth={3} /> : <ArrowUpRight size={22} strokeWidth={3} />}
                             </div>
                             <div>
                                <p className="text-sm sm:text-lg font-black text-app-text italic group-hover:text-gold transition-colors truncate max-w-[150px] sm:max-w-none">{tx.description}</p>
                                <div className="flex items-center gap-2 mt-1">
                                   <Shield size={10} className="text-zinc-700" />
                                   <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest italic">{tx.id || `TXN-P${Math.floor(Math.random()*10000)}`}</p>
                                </div>
                             </div>
                          </div>
                       </td>
                       <td className="px-10 py-7 text-center">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-app-bg/50 rounded-lg border border-app-border">
                             {tx.type === 'Deposit' ? <Landmark size={12} className="text-zinc-500" /> : <CreditCard size={12} className="text-zinc-500" />}
                             <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">{tx.type}</span>
                          </div>
                       </td>
                       <td className="px-10 py-7 text-center">
                          <div className="flex flex-col items-center">
                             <p className="text-[11px] font-black text-app-text uppercase italic tracking-tighter">{tx.date}</p>
                             <div className="flex items-center gap-1.5 mt-1">
                                <Clock size={10} className="text-zinc-800" />
                                <span className="text-[8px] text-zinc-700 font-black tracking-widest">14:{idx < 10 ? '0'+idx : idx} UTC</span>
                             </div>
                          </div>
                       </td>
                       <td className="px-10 py-7 text-right">
                          <p className={cn(
                            "text-xl sm:text-2xl font-black italic tracking-tighter",
                            tx.type === 'Deposit' ? 'text-green-500' : 'text-app-text'
                          )}>
                             {tx.type === 'Deposit' ? '+' : '-'}${tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                          </p>
                          <p className={cn(
                             "text-[8px] sm:text-[9px] uppercase font-black tracking-[0.2em] mt-1",
                             tx.status === 'Approved' ? 'text-green-400/50' : 'text-gold/50'
                          )}>{tx.status}</p>
                       </td>
                    </motion.tr>
                  )) : (
                    <tr>
                      <td colSpan={4} className="px-10 py-20 text-center">
                         <p className="text-zinc-500 font-black uppercase tracking-widest italic">No transactions found in currently selected range.</p>
                      </td>
                    </tr>
                  )}
               </tbody>
            </table>
         </div>

         {/* Mobile Card View */}
         <div className="sm:hidden divide-y divide-app-border">
            {filteredTransactions.length > 0 ? filteredTransactions.map((tx, idx) => (
               <motion.div 
                 key={tx.id || idx}
                 initial={{ opacity: 0, x: -10 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: idx * 0.05 }}
                 className="p-6 space-y-6"
               >
                  <div className="flex justify-between items-start">
                     <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center border",
                          tx.type === 'Deposit' ? 'bg-green-500/5 border-green-500/10 text-green-500' : 'bg-gold/5 border-gold/10 text-gold'
                        )}>
                           {tx.type === 'Deposit' ? <ArrowDownLeft size={18} /> : <ArrowUpRight size={18} />}
                        </div>
                        <div>
                           <p className="text-sm font-black text-app-text italic">{tx.description}</p>
                           <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest mt-1 italic">{tx.date}</p>
                        </div>
                     </div>
                     <div className="text-right">
                        <p className={cn(
                          "text-lg font-black italic tracking-tighter",
                          tx.type === 'Deposit' ? 'text-green-500' : 'text-app-text'
                        )}>
                           {tx.type === 'Deposit' ? '+' : '-'}${tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </p>
                        <span className={cn(
                          "text-[8px] font-black uppercase inline-block mt-1",
                          tx.status === 'Approved' ? 'text-green-500/60' : 'text-gold/60'
                        )}>{tx.status}</span>
                     </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-app-border/30">
                     <div className="flex items-center gap-2">
                        <Shield size={10} className="text-zinc-800" />
                        <span className="text-[8px] text-zinc-700 font-black tracking-widest">{tx.id || `TXN-P${Math.floor(Math.random()*10000)}`}</span>
                     </div>
                     <div className="flex items-center gap-2">
                        {tx.type === 'Deposit' ? <Landmark size={10} className="text-zinc-800" /> : <CreditCard size={10} className="text-zinc-800" />}
                        <span className="text-[8px] text-zinc-700 font-black uppercase tracking-widest">{tx.type}</span>
                     </div>
                  </div>
               </motion.div>
            )) : (
              <div className="p-12 text-center">
                 <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest italic">No transactions found</p>
              </div>
            )}
         </div>
         
         <div className="p-6 sm:p-8 border-t border-app-border bg-app-bg/50 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-[9px] sm:text-[10px] text-zinc-600 font-black uppercase tracking-[0.2em] text-center sm:text-left">Showing {filteredTransactions.length} of {filteredTransactions.length}</p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
               <button className="flex-1 sm:flex-none px-5 py-3 bg-app-card border border-app-border rounded-lg text-[9px] font-black text-zinc-700 hover:text-gold transition-colors italic uppercase tracking-widest">Prev</button>
               <button className="flex-1 sm:flex-none px-5 py-3 bg-app-card border border-app-border rounded-lg text-[9px] font-black text-app-text hover:bg-app-bg transition-colors italic uppercase tracking-widest">Next</button>
            </div>
         </div>
      </div>
    </div>
  );
}
