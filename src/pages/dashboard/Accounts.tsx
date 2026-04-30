import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Landmark, 
  TrendingUp, 
  Wallet, 
  ArrowRight, 
  Globe, 
  DollarSign, 
  Euro, 
  CircleDollarSign,
  Plus,
  ArrowUpRight,
  ShieldCheck,
  History
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useStore } from '@/src/lib/store';
import { Link } from 'react-router-dom';

export default function Accounts() {
  const { balance } = useStore();

  const ACCOUNT_SEGMENTS = [
    {
      name: 'Sovereign Checking',
      type: 'Checking Account',
      balance: balance,
      currency: 'USD',
      id: 'TNX-8820-A1',
      color: 'gold',
      icon: Landmark,
      trend: '+2.4%'
    },
    {
      name: 'Growth Reserve',
      type: 'Savings Account',
      balance: 425000.00,
      currency: 'USD',
      id: 'TNX-8820-S4',
      color: 'zinc-400',
      icon: TrendingUp,
      trend: '+5.8%'
    },
    {
      name: 'Euro-Corridor',
      type: 'Exchange Wallet',
      balance: 12400.00,
      currency: 'EUR',
      id: 'TNX-8820-E2',
      color: 'zinc-600',
      icon: Globe,
      trend: '-0.2%'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-app-border pb-12">
        <div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-app-text italic tracking-tighter">
            My <span className="gold-gradient-text">Accounts</span>
          </h1>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px] mt-2">
            Manage your multiple accounts and balances
          </p>
        </div>
        <button className="sleek-button-gold px-10 py-4 flex items-center justify-center gap-3 w-full md:w-auto">
          <Plus size={18} strokeWidth={3} /> Request New Account
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {ACCOUNT_SEGMENTS.map((acc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-app-card border border-app-border rounded-[2.5rem] p-8 group hover:border-gold/30 transition-all cursor-pointer relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-4 sm:p-6 text-[8px] sm:text-[10px] font-black font-mono text-zinc-800 uppercase tracking-widest">{acc.id}</div>
            
            <div className="flex flex-col h-full space-y-8 sm:space-y-10 relative z-10">
               <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center border",
                    acc.color === 'gold' ? 'bg-gold/10 border-gold/20 text-gold shadow-[0_0_20px_rgba(212,175,55,0.1)]' : 'bg-app-bg border-app-border text-zinc-500'
                  )}>
                     <acc.icon size={20} className="sm:size-[24px]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-black text-app-text italic tracking-tighter group-hover:text-gold transition-colors">{acc.name}</h3>
                    <p className="text-zinc-600 text-[9px] uppercase font-black tracking-widest">{acc.type}</p>
                  </div>
               </div>

               <div>
                  <p className="text-zinc-500 text-[9px] font-black uppercase tracking-[0.3em] mb-2">Available Balance</p>
                  <div className="flex items-baseline gap-2 flex-wrap">
                     <p className="text-3xl sm:text-4xl font-display font-black text-app-text italic tracking-tighter">
                        {acc.currency === 'USD' ? '$' : acc.currency === 'EUR' ? '€' : '£'}
                        {acc.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                     </p>
                     <p className={cn(
                       "text-[10px] font-black flex items-center gap-1",
                       acc.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'
                     )}>
                        {acc.trend} <TrendingUp size={10} />
                     </p>
                  </div>
               </div>

               <div className="pt-8 border-t border-app-border flex justify-between items-center">
                  <Link to={`/dashboard/transactions`} className="text-[10px] font-black text-zinc-600 uppercase tracking-widest hover:text-app-text transition-colors flex items-center gap-2">
                    <History size={14} /> View History
                  </Link>
                  <Link to="/dashboard/transfer" className="w-10 h-10 bg-app-bg rounded-xl flex items-center justify-center text-zinc-500 hover:text-gold hover:border-gold/50 border border-app-border transition-all shadow-lg">
                    <ArrowUpRight size={20} />
                  </Link>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Asset Analytics */}
        <section className="bg-app-card border border-app-border rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 shadow-2xl">
           <h3 className="text-xl sm:text-2xl font-display font-black text-app-text italic tracking-tighter mb-10 flex items-center gap-4">
             <ShieldCheck size={24} className="text-gold sm:size-[28px]" /> Allocation Intelligence
           </h3>
           <div className="space-y-8">
              {[
                { label: 'Fiat Reserves', val: 85, color: 'bg-gold' },
                { label: 'Digital Assets', val: 10, color: 'bg-zinc-600' },
                { label: 'Pending Liquidity', val: 5, color: 'bg-zinc-800' }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                   <div className="flex justify-between items-end">
                      <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{item.label}</p>
                      <p className="text-xs font-black text-app-text">{item.val}%</p>
                   </div>
                   <div className="w-full h-2 bg-app-bg border border-app-border rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.val}%` }}
                        transition={{ delay: 0.5 + (i * 0.2), duration: 1 }}
                        className={cn("h-full rounded-full shadow-[0_0_10px_rgba(212,175,55,0.3)]", item.color)} 
                      />
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* Currency Rates Widget */}
        <section className="bg-app-card border border-app-border rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 shadow-2xl">
           <h3 className="text-xl sm:text-2xl font-display font-black text-app-text italic tracking-tighter mb-10 flex items-center gap-4">
             <Globe size={24} className="text-gold sm:size-[28px]" /> Global Nodes
           </h3>
           <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6">
              {[
                { pair: 'USD/EUR', rate: 0.92, status: 'Active' },
                { pair: 'USD/GBP', rate: 0.78, status: 'Active' },
                { pair: 'EUR/CHF', rate: 0.96, status: 'Active' },
                { pair: 'GBP/JPY', rate: 191.4, status: 'Active' }
              ].map((node, i) => (
                <div key={i} className="p-4 sm:p-6 bg-app-bg border border-app-border rounded-2xl hover:border-gold/30 transition-all group shadow-sm">
                   <p className="text-[9px] sm:text-[10px] text-zinc-600 font-black uppercase tracking-widest mb-1">{node.pair}</p>
                   <div className="flex justify-between items-end">
                      <p className="text-lg sm:text-xl font-black text-app-text italic tracking-tighter group-hover:text-gold transition-colors">{node.rate}</p>
                      <div className="flex items-center gap-1.5 mb-1">
                         <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                         <span className="text-[7px] sm:text-[8px] text-zinc-700 font-black uppercase tracking-widest">{node.status}</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
}
