import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Smartphone, 
  MapPin, 
  Mail, 
  Globe, 
  DollarSign, 
  Languages, 
  Moon, 
  Sun,
  Camera,
  ShieldCheck,
  ChevronRight,
  Bell,
  Trash2,
  Calendar
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useStore } from '@/src/lib/store';

export default function Settings() {
  const { theme, toggleTheme, fullName } = useStore();
  const email = "a.sokolov@sovereign.node"; // email not in store yet
  const [currency, setCurrency] = useState('USD');

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-app-border pb-12">
        <div>
          <h1 className="text-4xl font-display font-black text-app-text italic tracking-tighter">
            Entity <span className="gold-gradient-text">Settings</span>
          </h1>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px] mt-2">
            Configure your sovereign profile and interface protocols
          </p>
        </div>
      </div>

      <div className="grid gap-12">
        {/* Profile Identity Section */}
        <section className="space-y-8">
           <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 px-2 flex items-center gap-3">
             <User size={14} className="text-gold" /> Master Identity Profile
           </h3>
           
           <div className="bg-app-card border border-app-border rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-12 shadow-2xl">
              <div className="relative group">
                 <div className="w-32 h-32 bg-app-bg border-2 border-app-border rounded-3xl flex items-center justify-center text-gold overflow-hidden">
                    <span className="text-4xl font-display font-black italic">
                      {fullName.split(' ').map(n => n[0]).join('')}
                    </span>
                 </div>
                 <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-gold text-black rounded-xl flex items-center justify-center shadow-lg shadow-gold/20 hover:scale-110 transition-all">
                    <Camera size={18} strokeWidth={3} />
                 </button>
              </div>

              <div className="flex-1 grid md:grid-cols-2 gap-8 w-full">
                 <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-700 ml-1">Full Entity Name</label>
                    <input 
                       type="text" 
                       defaultValue={fullName}
                       className="w-full bg-app-bg border border-app-border px-6 py-4 rounded-xl text-sm font-black text-app-text italic outline-none focus:border-gold transition-all"
                    />
                 </div>
                 <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-700 ml-1">Phone Protocol</label>
                    <input 
                       type="tel" 
                       defaultValue="+1 (555) 482-9011"
                       className="w-full bg-app-bg border border-app-border px-6 py-4 rounded-xl text-sm font-black text-app-text italic outline-none focus:border-gold transition-all"
                    />
                 </div>
                 <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-700 ml-1">Global Mail Node</label>
                    <input 
                       type="email" 
                       defaultValue={email}
                       className="w-full bg-app-bg border border-app-border px-6 py-4 rounded-xl text-sm font-black text-app-text italic outline-none focus:border-gold transition-all"
                    />
                 </div>
                 <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-700 ml-1">Jurisdiction (Country)</label>
                    <input 
                       type="text" 
                       defaultValue="Switzerland"
                       className="w-full bg-app-bg border border-app-border px-6 py-4 rounded-xl text-sm font-black text-app-text italic outline-none focus:border-gold transition-all"
                    />
                 </div>
              </div>
           </div>
        </section>

        {/* Preferences Protocol */}
        <section className="space-y-8">
           <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 px-2 flex items-center gap-3">
             <ShieldCheck size={14} className="text-gold" /> Interface Control Protocols
           </h3>
           
           <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-app-card border border-app-border rounded-[2rem] p-8 flex items-center justify-between group shadow-xl">
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-app-bg border border-app-border rounded-xl flex items-center justify-center text-zinc-600 group-hover:text-gold transition-colors">
                       <DollarSign size={20} />
                    </div>
                    <div>
                       <h4 className="text-xs font-black text-app-text uppercase tracking-widest">Base Currency</h4>
                       <p className="text-[9px] text-zinc-600 font-bold mt-1 uppercase tracking-tight">Active: {currency} Protocol</p>
                    </div>
                 </div>
                 <select 
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="bg-app-bg border border-app-border text-[10px] font-black text-gold px-4 py-2 rounded-lg outline-none uppercase tracking-widest cursor-pointer"
                 >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="CHF">CHF</option>
                 </select>
              </div>

              <div className="bg-app-card border border-app-border rounded-[2rem] p-8 flex items-center justify-between group shadow-xl">
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-app-bg border border-app-border rounded-xl flex items-center justify-center text-zinc-600 group-hover:text-gold transition-colors">
                       <Languages size={20} />
                    </div>
                    <div>
                       <h4 className="text-xs font-black text-app-text uppercase tracking-widest">System Language</h4>
                       <p className="text-[9px] text-zinc-600 font-bold mt-1 uppercase tracking-tight">Active: English (US)</p>
                    </div>
                 </div>
                 <button className="text-[10px] font-black text-gold uppercase tracking-widest">Modify Node</button>
              </div>

              <div className="bg-app-card border border-app-border rounded-[2rem] p-8 flex items-center justify-between group shadow-xl">
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-app-bg border border-app-border rounded-xl flex items-center justify-center text-zinc-600 group-hover:text-gold transition-colors">
                       {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                    </div>
                    <div>
                       <h4 className="text-xs font-black text-app-text uppercase tracking-widest">Chroma Theme</h4>
                       <p className="text-[9px] text-zinc-600 font-bold mt-1 uppercase tracking-tight">Active: {theme} Node</p>
                    </div>
                 </div>
                 <div className="flex bg-app-bg border border-app-border p-1 rounded-xl">
                    <button 
                      onClick={() => theme === 'dark' && toggleTheme()}
                      className={cn("px-4 py-2 rounded-lg text-[8px] font-black uppercase transition-all", theme === 'light' ? 'bg-gold text-black' : 'text-zinc-700')}
                    >
                      Light
                    </button>
                    <button 
                      onClick={() => theme === 'light' && toggleTheme()}
                      className={cn("px-4 py-2 rounded-lg text-[8px] font-black uppercase transition-all", theme === 'dark' ? 'bg-zinc-900 text-white' : 'text-zinc-700')}
                    >
                      Dark
                    </button>
                 </div>
              </div>

              <div className="bg-app-card border border-app-border rounded-[2rem] p-8 flex items-center justify-between group shadow-xl">
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-app-bg border border-app-border rounded-xl flex items-center justify-center text-zinc-600 group-hover:text-gold transition-colors">
                       <Bell size={20} />
                    </div>
                    <div>
                       <h4 className="text-xs font-black text-app-text uppercase tracking-widest">Signal Center</h4>
                       <p className="text-[9px] text-zinc-600 font-bold mt-1 uppercase tracking-tight">Email & Push Active</p>
                    </div>
                 </div>
                 <button className="text-[10px] font-black text-gold uppercase tracking-widest">Configure</button>
              </div>
           </div>
        </section>

        {/* Global Save Action */}
        <div className="flex justify-end gap-4">
           <button className="px-10 py-5 rounded-2xl border border-app-border text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 hover:text-app-text transition-all">
             Abort Changes
           </button>
           <button className="sleek-button-gold px-10 py-5">
             Commit Entity Settings
           </button>
        </div>

        {/* Danger Protocol */}
        <section className="pt-20 border-t border-app-border">
           <div className="bg-red-500/5 border border-red-500/10 rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl">
              <div>
                 <h4 className="text-sm font-black text-red-500 uppercase tracking-widest mb-2">Entity Termination Protocol</h4>
                 <p className="text-[11px] text-zinc-600 font-bold uppercase italic tracking-tight">
                   Permanent deletion of all archival records, assets, and transaction history from global nodes. This action is irreversible.
                 </p>
              </div>
              <button className="px-8 py-4 bg-app-bg border border-red-500/20 text-red-500 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] hover:bg-red-500 hover:text-white transition-all flex items-center gap-3">
                 <Trash2 size={14} /> Initialize Erasure
              </button>
           </div>
        </section>
      </div>
    </div>
  );
}
