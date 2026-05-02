import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  ArrowDownLeft, 
  ArrowUpRight, 
  Calendar,
  ChevronDown,
  History,
  Info,
  Clock,
  LayoutGrid,
  Filter,
  Plus
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useStore } from '@/src/lib/store';

export default function Transactions() {
  const { balance } = useStore();
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 space-y-10 pb-24">
      {/* Top Summary Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-600 p-8 rounded-[2.5rem] shadow-xl text-white space-y-4"
        >
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
            <History size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-60 italic">Total Transactions</p>
            <h2 className="text-4xl font-display font-black italic tracking-tighter leading-none">0</h2>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-emerald-600 p-8 rounded-[2.5rem] shadow-xl text-white space-y-4"
        >
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
            <ArrowDownLeft size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-60 italic">Total Deposits</p>
            <h2 className="text-4xl font-display font-black italic tracking-tighter leading-none">$0.00</h2>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-orange-600 p-8 rounded-[2.5rem] shadow-xl text-white space-y-4"
        >
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
            <ArrowUpRight size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-60 italic">Total Withdrawals</p>
            <h2 className="text-4xl font-display font-black italic tracking-tighter leading-none">$0.00</h2>
          </div>
        </motion.div>
      </div>

      {/* Filter Section */}
      <div className="bg-zinc-950 border border-white/5 rounded-[3rem] p-8 space-y-8 shadow-2xl">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 space-y-3">
             <label className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-600 ml-2 italic">From</label>
             <div className="relative">
                <input type="date" defaultValue="2026-05-01" className="w-full bg-black border border-white/10 rounded-2xl p-5 text-[11px] font-black text-white uppercase italic tracking-widest outline-none focus:border-gold" />
             </div>
          </div>
          <div className="flex-1 space-y-3">
             <label className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-600 ml-2 italic">To</label>
             <div className="relative">
                <input type="date" defaultValue="2026-05-31" className="w-full bg-black border border-white/10 rounded-2xl p-5 text-[11px] font-black text-white uppercase italic tracking-widest outline-none focus:border-gold" />
             </div>
          </div>
          <div className="flex items-end">
             <button className="h-[62px] px-12 bg-gold text-black rounded-2xl text-[10px] font-black uppercase tracking-widest italic hover:scale-105 transition-all w-full md:w-auto">
               Apply
             </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-6 border-t border-white/5">
          {['All', 'Deposits', 'Withdrawals', 'Transfers', 'Payments'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all italic",
                activeTab === tab ? "bg-gold text-black" : "bg-zinc-900 text-zinc-500 hover:text-white"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Area: Empty State */}
      <div className="bg-zinc-950 border border-white/5 rounded-[2.5rem] sm:rounded-[3rem] p-12 sm:p-24 text-center space-y-8 shadow-2xl overflow-hidden">
         <div className="relative inline-block">
            <div className="absolute inset-0 bg-gold/10 blur-[80px] rounded-full" />
            <History size={100} className="text-zinc-900 mx-auto transition-transform hover:scale-110 duration-1000 relative z-10 sm:w-[120px] sm:h-[120px]" strokeWidth={0.5} />
         </div>
         <div className="space-y-4 relative z-10">
            <h3 className="text-xl sm:text-2xl font-display font-black text-white italic tracking-tighter uppercase leading-none">No transactions found...</h3>
            <p className="text-zinc-700 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] italic max-w-sm mx-auto leading-relaxed">
               Current audit query returned null records for the selected date range. Please adjust filters or initialize a new migration sequence.
            </p>
         </div>
         <div className="pt-10">
            <button className="px-10 py-5 bg-zinc-900 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white transition-all italic">
               Refresh Ledger
            </button>
         </div>
      </div>
    </div>
  );
}
