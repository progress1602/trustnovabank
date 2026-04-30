import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Shield, Bell, Smartphone, MapPin, Mail, Phone, Camera, Save, Lock, ChevronRight, Fingerprint, Database, Cpu } from 'lucide-react';
import { DUMMY_USER, cn } from '@/src/lib/utils';

export default function Profile() {
  const [success, setSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20 selection:bg-gold selection:text-black">
      <div className="flex items-center justify-between">
         <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 text-gold rounded-2xl flex items-center justify-center shadow-2xl transition-transform hover:rotate-3">
               <User size={32} strokeWidth={2.5} />
            </div>
            <div>
               <h3 className="text-3xl italic gold-gradient-text font-black uppercase tracking-tighter">Identity Core</h3>
               <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] mt-2 italic">Manage global credentials & high-level security hardening</p>
            </div>
         </div>
         {success && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-green-500/10 border border-green-500/20 text-green-500 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-3 shadow-[0_0_20px_rgba(34,197,94,0.1)]"
            >
              <Shield size={14} strokeWidth={3} /> Changes Synchronized
            </motion.div>
         )}
      </div>

      <div className="grid lg:grid-cols-7 gap-12">
        <div className="lg:col-span-2 space-y-8">
           <div className="sleek-card p-12 text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[60px] pointer-events-none group-hover:bg-gold/10 transition-all duration-1000" />
              <div className="relative inline-block group/avatar mb-8">
                 <div className="w-32 h-32 bg-black-pure border-2 border-zinc-900 rounded-[2rem] flex items-center justify-center overflow-hidden group-hover/avatar:border-gold transition-all duration-500 shadow-2xl relative z-10">
                    <User size={64} className="text-zinc-800 group-hover/avatar:text-gold transition-colors duration-500" strokeWidth={1} />
                    <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover/avatar:opacity-100 transition-opacity" />
                 </div>
                 <button className="absolute -bottom-2 -right-2 w-12 h-12 bg-gold text-black rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all border-4 border-black-pure relative z-20">
                    <Camera size={20} strokeWidth={3} />
                 </button>
              </div>
              <h4 className="font-black text-xl tracking-tighter text-white uppercase italic mb-2">{DUMMY_USER.fullName}</h4>
              <p className="text-[10px] text-gold font-black uppercase tracking-[0.4em] mb-8 italic">Supreme Overseer</p>
              
              <div className="grid grid-cols-3 gap-3">
                 <div className="p-4 bg-black-pure border border-zinc-900 rounded-2xl text-zinc-600 hover:text-gold hover:border-gold/30 transition-all cursor-pointer flex items-center justify-center">
                    <Smartphone size={20} />
                 </div>
                 <div className="p-4 bg-black-pure border border-zinc-900 rounded-2xl text-zinc-600 hover:text-gold hover:border-gold/30 transition-all cursor-pointer flex items-center justify-center">
                    <Bell size={20} />
                 </div>
                 <div className="p-4 bg-black-pure border border-zinc-900 rounded-2xl text-zinc-600 hover:text-gold hover:border-gold/30 transition-all cursor-pointer flex items-center justify-center">
                    <MapPin size={20} />
                 </div>
              </div>
           </div>

           <div className="sleek-card p-10 space-y-10 relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-gold/5 blur-[80px] pointer-events-none" />
              <h5 className="font-black text-[10px] tracking-[0.4em] uppercase text-zinc-600 border-b border-zinc-900/50 pb-6 italic">CORESYNC METADATA</h5>
              <div className="space-y-8">
                 <div className="group">
                    <label className="block text-[8px] uppercase tracking-[0.4em] text-gold font-black mb-2 opacity-40 group-hover:opacity-100 transition-opacity italic">ENTITY_NODE_ID</label>
                    <div className="flex items-center gap-3">
                      <Cpu size={14} className="text-zinc-800" />
                      <p className="text-xs font-mono font-black tracking-[0.2em] text-white uppercase">#TNX-8820-EX-P</p>
                    </div>
                 </div>
                 <div className="group">
                    <label className="block text-[8px] uppercase tracking-[0.4em] text-gold font-black mb-2 opacity-40 group-hover:opacity-100 transition-opacity italic">SECURITY_CLEARANCE</label>
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                      <p className="text-[11px] font-black text-green-500 uppercase tracking-widest italic">IRON-CLAD OVERRIDE</p>
                    </div>
                 </div>
                 <div className="group">
                    <label className="block text-[8px] uppercase tracking-[0.4em] text-gold font-black mb-2 opacity-40 group-hover:opacity-100 transition-opacity italic">LEDGER_DOMAIN</label>
                    <div className="flex items-center gap-3">
                      <Database size={14} className="text-zinc-800" />
                      <p className="text-[11px] font-black uppercase tracking-widest text-zinc-400 italic">GLOBAL SOVEREIGN</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="lg:col-span-5 space-y-10">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="sleek-card p-12"
           >
              <h4 className="font-black text-[10px] uppercase tracking-[0.5em] mb-12 border-b border-zinc-900/50 pb-6 text-zinc-500 italic">IDENTITY PROTOCOLS</h4>
              <form onSubmit={handleSave} className="space-y-10">
                 <div className="grid sm:grid-cols-2 gap-10">
                    <div className="space-y-4">
                       <label className="block text-[9px] font-black uppercase tracking-[0.4em] text-zinc-700 ml-1 italic">Legal Alias Sequence</label>
                       <input type="text" defaultValue={DUMMY_USER.fullName} className="w-full px-8 py-6 bg-black-pure border border-zinc-900 rounded-2xl outline-none focus:border-gold/50 font-black text-sm uppercase transition-all text-white italic" />
                    </div>
                    <div className="space-y-4">
                       <label className="block text-[9px] font-black uppercase tracking-[0.4em] text-zinc-700 ml-1 italic">Primary Grid Uplink</label>
                       <input type="email" defaultValue={DUMMY_USER.email} className="w-full px-8 py-6 bg-black-pure border border-zinc-900 rounded-2xl outline-none focus:border-gold/50 font-black text-sm transition-all text-white italic" />
                    </div>
                    <div className="space-y-4">
                       <label className="block text-[9px] font-black uppercase tracking-[0.4em] text-zinc-700 ml-1 italic">Secure Comms Corridor</label>
                       <input type="tel" defaultValue="+1 (555) 0014-990" className="w-full px-8 py-6 bg-black-pure border border-zinc-900 rounded-2xl outline-none focus:border-gold/50 font-black text-sm transition-all text-white italic" />
                    </div>
                    <div className="space-y-4">
                       <label className="block text-[9px] font-black uppercase tracking-[0.4em] text-zinc-700 ml-1 italic">Geopolitical Node</label>
                       <input type="text" defaultValue="Zurich, Switzerland" className="w-full px-8 py-6 bg-black-pure border border-zinc-900 rounded-2xl outline-none focus:border-gold/50 font-black text-sm uppercase transition-all text-white italic" />
                    </div>
                 </div>
                 <div className="pt-10 border-t border-zinc-900/50 flex justify-end">
                    <button type="submit" className="sleek-button-gold px-14 py-6 group">
                       <Save size={20} strokeWidth={3} className="group-hover:scale-125 transition-transform" />
                       Commit Identity Sequence
                    </button>
                 </div>
              </form>
           </motion.div>

           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="sleek-card p-12"
           >
              <h4 className="font-black text-[10px] uppercase tracking-[0.5em] mb-12 border-b border-zinc-900/50 pb-6 text-zinc-500 italic">VAULT HARDENING</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="flex items-center justify-between p-8 bg-black-pure border border-zinc-900 rounded-[2rem] group cursor-pointer hover:border-gold/40 transition-all hover:bg-zinc-950/40">
                    <div className="flex items-center gap-6">
                       <div className="w-16 h-16 bg-zinc-950 border border-zinc-900 rounded-2xl flex items-center justify-center text-zinc-700 shadow-2xl group-hover:bg-gold group-hover:text-black transition-all group-hover:border-gold">
                          <Lock size={28} strokeWidth={2.5} />
                       </div>
                       <div>
                          <p className="text-sm font-black uppercase tracking-widest italic group-hover:text-gold transition-colors mb-1">Rotation Strategy</p>
                          <p className="text-[9px] text-zinc-700 font-black uppercase tracking-[0.2em] italic group-hover:text-zinc-500">Last event: 19 Cycles Ago</p>
                       </div>
                    </div>
                    <ChevronRight size={20} className="text-zinc-800 group-hover:text-gold transition-colors translate-x-0 group-hover:translate-x-2" />
                 </div>

                 <div className="flex items-center justify-between p-8 bg-black-pure border border-zinc-900 rounded-[2rem] group cursor-pointer hover:border-gold/40 transition-all hover:bg-zinc-950/40">
                    <div className="flex items-center gap-6">
                       <div className="w-16 h-16 bg-gold/5 border border-gold/20 text-gold rounded-2xl flex items-center justify-center shadow-2xl group-hover:bg-gold group-hover:text-black transition-all group-hover:border-gold">
                          <Fingerprint size={28} strokeWidth={2.5} />
                       </div>
                       <div>
                          <p className="text-sm font-black uppercase tracking-widest italic group-hover:text-gold transition-colors mb-1">Neuro-Biometric</p>
                          <p className="text-[9px] text-green-500/60 font-black uppercase tracking-[0.2em] italic">Active Protection Protocol</p>
                       </div>
                    </div>
                    <div className="w-14 h-7 bg-zinc-900 border border-zinc-800 rounded-full relative p-1 shadow-inner group-hover:border-gold/20">
                       <div className="absolute right-1 top-1 w-5 h-5 bg-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
