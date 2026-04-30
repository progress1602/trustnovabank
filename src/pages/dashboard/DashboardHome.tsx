import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  Landmark,
  Plus,
  Send,
  Activity,
  ShieldCheck,
  TrendingUp,
  CreditCard,
  Search,
  ArrowRight,
  TrendingDown,
  Globe,
  DollarSign,
  Euro,
  CircleDollarSign
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';
import { useStore } from '@/src/lib/store';

const EXCHANGE_RATES = [
  { pair: 'USD / EUR', rate: '0.92', trend: 'up' },
  { pair: 'USD / GBP', rate: '0.78', trend: 'down' },
  { pair: 'USD / JPY', rate: '151.4', trend: 'up' },
];

export default function DashboardHome() {
  const { balance, fullName, transactions } = useStore();

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Top Protocol Area: Welcome & Tier Status */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-app-text italic tracking-tighter">
            Welcome, <span className="gold-gradient-text">{fullName.split(' ')[0]}</span>
          </h1>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px] mt-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Interface active • Secure Connection
          </p>
        </div>
        
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <div className="flex flex-col items-end pr-6 border-r border-app-border flex-1 lg:flex-none">
            <p className="text-zinc-600 text-[9px] font-black uppercase tracking-widest mb-1">Account Level</p>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-gold" />
              <span className="text-sm font-black text-app-text italic tracking-tighter uppercase whitespace-nowrap">Elite Status</span>
            </div>
          </div>
          <div className="flex flex-col items-end flex-1 lg:flex-none">
            <p className="text-zinc-600 text-[9px] font-black uppercase tracking-widest mb-1">Security</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-black text-green-500 italic tracking-tighter uppercase">Verified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Liquidity Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-2 bg-app-card border border-app-border rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[100px] pointer-events-none group-hover:bg-gold/10 transition-all duration-1000" />
          
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-12">
               <div>
                  <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Total Balance</p>
                  <h2 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter italic text-app-text flex items-baseline gap-2 flex-wrap">
                    <span className="text-gold">$</span>{balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </h2>
               </div>
               <div className="bg-app-bg border border-app-border p-4 rounded-xl sm:rounded-2xl flex flex-col items-start sm:items-end w-full sm:w-auto">
                  <p className="text-zinc-500 text-[9px] font-black uppercase tracking-widest mb-1">Available to Withdraw</p>
                  <p className="text-lg sm:text-xl font-black text-gold italic">${(balance * 0.95).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
               </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <Link to="/dashboard/deposit" className="sleek-button-gold py-4 sm:py-5">
                <Plus size={18} strokeWidth={3} /> Add Funds
              </Link>
              <Link to="/dashboard/transfer" className="bg-app-bg text-app-text border border-app-border rounded-xl sm:rounded-2xl py-4 sm:py-5 px-6 flex items-center justify-center gap-3 font-black uppercase tracking-widest text-[9px] sm:text-[10px] hover:bg-zinc-800 transition-all">
                <Send size={18} strokeWidth={2.5} /> Transfer
              </Link>
              <Link to="/dashboard/withdraw" className="bg-app-bg text-app-text border border-app-border rounded-xl sm:rounded-2xl py-4 sm:py-5 px-6 flex items-center justify-center gap-3 font-black uppercase tracking-widest text-[9px] sm:text-[10px] hover:bg-zinc-800 transition-all">
                <ArrowUpRight size={18} strokeWidth={2.5} /> Withdraw
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Rewards Widget */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           className="bg-app-card border border-gold/20 rounded-[2.5rem] p-8 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/10 transition-colors" />
           <div className="relative z-10">
            <p className="text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-8">Yield & Rewards</p>
            <div className="space-y-6">
              <div>
                <p className="text-zinc-500 text-[9px] font-black uppercase tracking-widest mb-1">Pending Cashback</p>
                <p className="text-2xl sm:text-3xl font-display font-black text-app-text italic">+$482.10</p>
              </div>
              <div className="flex items-center gap-4 py-4 border-y border-app-border">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center text-gold">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="text-app-text text-[10px] sm:text-xs font-black uppercase tracking-tight">Standard Yield</p>
                  <p className="text-zinc-600 text-[8px] sm:text-[10px] font-bold">2.4% APR Active</p>
                </div>
              </div>
            </div>
          </div>
          <button 
            onClick={() => alert("Reward Protocol Initialized. Assets will be added to your reserve shortly.")}
            className="relative z-10 w-full py-4 text-[9px] font-black uppercase tracking-widest text-gold hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            Claim Rewards <ArrowRight size={12} />
          </button>
        </motion.div>
      </div>

      {/* Tertiary Functional Grid */}
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Quick Send */}
        <section className="sm:col-span-2 lg:col-span-1 bg-app-card border border-app-border rounded-[2rem] p-6 sm:p-8">
           <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-8 px-2 flex items-center gap-2">
             <Send size={14} className="text-gold" /> Quick Transfer
           </h4>
           <div className="space-y-6">
              <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                {['JD', 'MS', 'KB', 'TR'].map((init, i) => (
                  <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-app-border bg-app-bg flex items-center justify-center text-zinc-500 text-[9px] sm:text-[10px] font-black hover:border-gold cursor-pointer transition-all shrink-0">
                    {init}
                  </div>
                ))}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-app-border border-dashed bg-app-bg flex items-center justify-center text-gold cursor-pointer hover:border-gold transition-all shrink-0">
                  <Plus size={16} />
                </div>
              </div>
              <div className="space-y-4">
                 <div className="bg-app-bg border border-app-border rounded-xl p-4 flex items-center justify-between">
                    <span className="text-zinc-700 text-[10px] font-black uppercase tracking-widest">Amount</span>
                    <span className="text-app-text font-black italic">$0.00</span>
                 </div>
                 <Link to="/dashboard/transfer" className="w-full bg-gold text-black font-black uppercase tracking-widest text-[9px] py-4 rounded-xl shadow-lg shadow-gold/10 flex items-center justify-center">
                   Initiate Transfer
                 </Link>
              </div>
           </div>
        </section>

        {/* Exchange Rates */}
        <section className="sm:col-span-2 lg:col-span-1 bg-app-card border border-app-border rounded-[2rem] p-6 sm:p-8">
           <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-8 px-2 flex items-center gap-2">
             <Globe size={14} className="text-gold" /> Markets
           </h4>
           <div className="space-y-4 sm:space-y-5">
              {EXCHANGE_RATES.map((rate, i) => (
                <div key={i} className="flex justify-between items-center p-3 hover:bg-app-bg rounded-xl transition-colors group cursor-pointer border border-transparent hover:border-gold/20">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-600 group-hover:text-gold transition-colors">
                        {rate.pair.includes('EUR') ? <Euro size={14} /> : rate.pair.includes('GBP') ? <CircleDollarSign size={14} /> : <DollarSign size={14} />}
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-black text-white italic">{rate.pair}</span>
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] sm:text-xs font-black text-white">{rate.rate}</p>
                      <p className={cn("text-[7px] sm:text-[8px] font-black uppercase", rate.trend === 'up' ? 'text-green-500' : 'text-red-500')}>
                        {rate.trend === 'up' ? '▲ High' : '▼ Low'}
                      </p>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* Latest Activity Pulse */}
        <section className="sm:col-span-4 lg:col-span-2 bg-app-card border border-app-border rounded-[2rem] overflow-hidden flex flex-col shadow-2xl">
           <div className="p-6 sm:p-8 border-b border-app-border flex justify-between items-center bg-app-bg/40">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 flex items-center gap-3">
                <Activity size={16} className="text-gold" /> Recent
              </h4>
              <Link to="/dashboard/transactions" className="text-[9px] font-black uppercase text-gold hover:underline">View All</Link>
           </div>
           <div className="divide-y divide-app-border flex-1 overflow-y-auto no-scrollbar">
              {transactions.slice(0, 3).map((tx, i) => (
                <div key={i} className="p-4 sm:p-6 flex items-center justify-between hover:bg-app-bg transition-colors group gap-4">
                   <div className="flex items-center gap-3 sm:gap-5">
                      <div className={cn(
                        "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center border shrink-0",
                        tx.type === 'Deposit' ? 'bg-green-500/5 border-green-500/10 text-green-500' : 'bg-gold/5 border-gold/10 text-gold'
                      )}>
                        {tx.type === 'Deposit' ? <ArrowDownLeft size={18} className="sm:size-[20px]" /> : <ArrowUpRight size={18} className="sm:size-[20px]" />}
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-black text-app-text group-hover:text-gold transition-colors truncate max-w-[100px] sm:max-w-none">
                          {tx.description}
                        </p>
                        <p className="text-[8px] sm:text-[9px] text-zinc-600 font-bold uppercase tracking-widest mt-1">{tx.date}</p>
                      </div>
                   </div>
                   <div className="text-right shrink-0">
                      <p className={cn("text-base sm:text-lg font-black italic tracking-tighter", tx.type === 'Deposit' ? 'text-green-500' : 'text-app-text')}>
                        {tx.type === 'Deposit' ? '+' : '-'}${tx.amount.toLocaleString()}
                      </p>
                      <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-widest text-zinc-700">{tx.status}</span>
                   </div>
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
}
