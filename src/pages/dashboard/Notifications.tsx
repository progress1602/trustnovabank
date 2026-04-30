import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bell, 
  ShieldCheck, 
  ShieldAlert, 
  Zap, 
  CreditCard, 
  ArrowDownLeft, 
  ArrowUpRight, 
  Activity,
  CheckCircle2,
  AlertCircle,
  Inbox,
  Clock,
  Trash2,
  Settings as SettingsIcon,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const MOCK_NOTIFICATIONS = [
  { 
    id: 1, 
    type: 'success', 
    title: 'Deposit Approved', 
    message: 'Global node cleared 12,000.00 USD capital injection.', 
    time: '2 hours ago', 
    unread: true,
    icon: ArrowDownLeft
  },
  { 
    id: 2, 
    type: 'security', 
    title: 'Security Alert', 
    message: 'New login session detected from Zurich node (IP: 192.172.11.4).', 
    time: '5 hours ago', 
    unread: true,
    icon: ShieldAlert
  },
  { 
    id: 3, 
    type: 'system', 
    title: 'Verification Approved', 
    message: 'Your entity has been upgraded to Premium Sovereign status.', 
    time: 'Yesteday', 
    unread: false,
    icon: ShieldCheck
  },
  { 
    id: 4, 
    type: 'card', 
    title: 'Card Activated', 
    message: 'Elite Gold Physical Card has been dispatched via priority global node courier.', 
    time: '2 days ago', 
    unread: false,
    icon: CreditCard
  }
];

export default function Notifications() {
  const [filter, setFilter] = useState('All Intel');

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-zinc-900 pb-12">
        <div>
          <h1 className="text-4xl font-display font-black text-white italic tracking-tighter">
            Signal <span className="gold-gradient-text">Center</span>
          </h1>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px] mt-2">
            Incoming intelligence repository and node status alerts
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="p-3 bg-zinc-950 border border-zinc-900 rounded-xl text-zinc-600 hover:text-gold transition-colors">
            <Trash2 size={18} />
          </button>
          <button className="p-3 bg-zinc-950 border border-zinc-900 rounded-xl text-zinc-600 hover:text-gold transition-colors">
            <SettingsIcon size={18} />
          </button>
        </div>
      </div>

      {/* Filter Ribbon */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
         {['All Intel', 'Directives', 'Security Alerts', 'Transaction Signals'].map(f => (
           <button 
             key={f}
             onClick={() => setFilter(f)}
             className={cn(
                "px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest whitespace-nowrap transition-all border",
                filter === f ? 'bg-gold text-black border-gold' : 'bg-black text-zinc-600 border-zinc-900 hover:text-white'
             )}
           >
             {f}
           </button>
         ))}
      </div>

      {/* Signals Repository */}
      <div className="bg-zinc-950 border border-zinc-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
         <div className="divide-y divide-zinc-900">
            {MOCK_NOTIFICATIONS.map((n, i) => (
              <motion.div 
                key={n.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={cn(
                  "p-8 flex items-start gap-8 hover:bg-black/40 transition-all group cursor-pointer relative",
                  n.unread && "bg-gold/[0.02]"
                )}
              >
                 {n.unread && <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold"></div>}
                 
                 <div className={cn(
                   "w-14 h-14 rounded-2xl flex items-center justify-center border shrink-0 transition-all duration-500",
                   n.type === 'success' ? 'bg-green-500/5 border-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-black' :
                   n.type === 'security' ? 'bg-red-500/5 border-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-white' :
                   'bg-zinc-900 border-zinc-800 text-zinc-500 group-hover:bg-gold group-hover:text-black'
                 )}>
                    <n.icon size={24} strokeWidth={2.5} />
                 </div>

                 <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-start">
                       <h4 className={cn(
                         "text-lg font-black italic tracking-tighter transition-colors",
                         n.unread ? "text-white group-hover:text-gold" : "text-zinc-400"
                       )}>
                         {n.title}
                       </h4>
                       <span className="text-[10px] font-black text-zinc-700 uppercase tracking-widest">{n.time}</span>
                    </div>
                    <p className="text-zinc-500 text-xs font-medium leading-relaxed max-w-2xl">
                      {n.message}
                    </p>
                    <div className="flex items-center gap-6 pt-2">
                       <button className="text-[9px] font-black uppercase text-zinc-600 hover:text-gold transition-colors italic tracking-widest">Mark as Read</button>
                       <button className="text-[9px] font-black uppercase text-zinc-600 hover:text-red-500 transition-colors italic tracking-widest">Secure Purge</button>
                    </div>
                 </div>

                 <ChevronRight className="self-center text-zinc-900 group-hover:text-gold transition-colors" size={20} />
              </motion.div>
            ))}
         </div>
         
         <div className="p-10 text-center border-t border-zinc-900 bg-black/40">
            <p className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.3em] flex items-center justify-center gap-3">
              Archives accessible via <span className="text-gold italic underline">Signal Historical Ledger</span>
            </p>
         </div>
      </div>

      {/* Empty State Mockup */}
      {false && (
         <div className="h-64 flex flex-col items-center justify-center space-y-4 opacity-50">
            <Inbox size={48} className="text-zinc-800" />
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-700">Intel Buffer Empty</p>
         </div>
      )}
    </div>
  );
}
