import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Lock, 
  Smartphone, 
  Key, 
  Eye, 
  EyeOff, 
  Globe, 
  Fingerprint,
  ChevronRight,
  ShieldCheck,
  ShieldAlert,
  History
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function SecurityDashboard() {
  const securityFeatures = [
    {
      title: 'Biometric Login',
      description: 'Use FaceID or Fingerprint for secure access.',
      status: 'Active',
      icon: Fingerprint,
      active: true
    },
    {
      title: 'Two-Factor Auth',
      description: 'Extra layer of security for your account.',
      status: 'Active',
      icon: Smartphone,
      active: true
    },
    {
      title: 'Safe Storage',
      description: 'Your assets are stored in high-security vaults.',
      status: 'Secured',
      icon: Lock,
      active: true
    },
    {
      title: 'Advanced Encryption',
      description: 'Protects your data from unauthorized access.',
      status: 'Active',
      icon: ShieldCheck,
      active: true
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-app-border pb-12">
        <div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-app-text italic tracking-tighter">
            Security <span className="gold-gradient-text">Center</span>
          </h1>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px] mt-2">
            Manage your account security and protection settings
          </p>
        </div>
        <div className="flex items-center gap-4 px-6 py-4 bg-green-500/10 border border-green-500/20 rounded-2xl w-full md:w-auto">
          <ShieldCheck className="text-green-500" size={24} />
          <div>
            <p className="text-[10px] font-black uppercase text-green-500 tracking-widest">Status</p>
            <p className="text-xs font-black text-app-text uppercase tracking-tighter">Your account is secure</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Security Summary */}
        <section className="bg-app-card border border-app-border rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 shadow-2xl space-y-12">
           <div className="flex items-center justify-between">
              <h3 className="text-xl sm:text-2xl font-display font-black text-app-text italic tracking-tighter flex items-center gap-4">
                Account Security
              </h3>
              <Globe size={20} className="text-gold animate-pulse sm:size-[24px]" />
           </div>

           <div className="space-y-4 sm:space-y-6">
              {securityFeatures.map((f, i) => (
                <div key={i} className="flex items-center justify-between p-4 sm:p-6 bg-app-bg border border-app-border rounded-2xl group hover:border-gold/30 transition-all shadow-sm">
                   <div className="flex items-center gap-4 sm:gap-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-app-card border border-app-border flex items-center justify-center text-gold shadow-lg shadow-gold/5 group-hover:scale-110 transition-transform flex-shrink-0">
                        <f.icon size={18} className="sm:size-[20px]" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-black text-app-text uppercase italic tracking-tight">{f.title}</h4>
                        <p className="text-[9px] sm:text-[10px] text-zinc-500 font-medium">{f.description}</p>
                      </div>
                   </div>
                   <div className="flex flex-col items-end">
                      <span className="text-[8px] sm:text-[9px] font-black uppercase text-gold tracking-widest leading-none">{f.status}</span>
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 animate-pulse shadow-[0_0_5px_rgba(212,175,55,0.8)]"></div>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* Global Node Access */}
        <section className="bg-app-card border border-app-border rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 shadow-2xl flex flex-col justify-between">
           <div>
              <h3 className="text-xl sm:text-2xl font-display font-black text-app-text italic tracking-tighter mb-8 text-center sm:text-left">
                Session Audit Ledger
              </h3>
              
              <div className="divide-y divide-app-border">
                 {[
                   { node: 'Zurich, Switzerland', time: '12:45 UTC', device: 'Desktop App', action: 'Login Success', color: 'text-green-500' },
                   { node: 'Singapore, SG', time: 'Yesterday', device: 'Mobile App', action: 'Transfer Auth', color: 'text-gold' },
                   { node: 'London, UK', time: '3 Days Ago', device: 'Web Browser', action: 'Account Mod', color: 'text-gold' }
                 ].map((log, i) => (
                   <div key={i} className="py-4 sm:py-6 flex items-center justify-between group cursor-pointer hover:px-2 transition-all gap-4">
                      <div className="flex items-center gap-3 sm:gap-5">
                         <History className="text-zinc-800 shrink-0 sm:size-[18px]" size={16} />
                         <div>
                            <p className="text-xs sm:text-sm font-black text-app-text uppercase italic tracking-tight truncate max-w-[100px] sm:max-w-none">{log.node}</p>
                            <p className="text-[8px] sm:text-[9px] text-zinc-600 font-black uppercase tracking-widest">{log.device} • {log.time}</p>
                         </div>
                      </div>
                      <span className={cn("text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] italic shrink-0", log.color)}>{log.action}</span>
                   </div>
                 ))}
              </div>
           </div>

           <button className="sleek-button-outline w-full mt-12">
             Purge All Remote Sessions
           </button>
        </section>
      </div>

      {/* Advanced Controls */}
      <section className="bg-app-card border border-app-border rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[80px] -rotate-45 translate-x-1/2 -translate-y-1/2 group-hover:bg-gold/10 transition-all"></div>
         <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center sm:text-left">
               <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mx-auto sm:mx-0">
                  <ShieldAlert size={32} />
               </div>
               <h2 className="text-2xl sm:text-3xl font-display font-black text-white italic tracking-tighter">
                 Emergency <span className="gold-gradient-text text-white">Lockdown</span>
               </h2>
               <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-md mx-auto sm:mx-0">
                 Instantly freeze your account and logout of all devices. Use this if you suspect unauthorized access.
               </p>
               <button 
                 onClick={() => alert("Emergency lockdown initiated. Contact support for recovery.")}
                 className="px-8 py-4 bg-app-bg border border-red-500/30 text-red-500 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-red-500 hover:text-white transition-all shadow-lg hover:shadow-red-500/20 w-full sm:w-auto"
               >
                 Activate Lockdown
               </button>
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
               {[
                 { label: 'Freeze Assets', status: 'Ready' },
                 { label: 'Deactivate Node', status: 'Armed' },
                 { label: 'Clear History', status: 'Active' },
                 { label: 'Call Support', status: 'Standby' }
               ].map((ctrl, i) => (
                 <div key={i} className="p-6 bg-app-card border border-app-border rounded-2xl transition-all hover:border-red-500/20">
                    <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest mb-1">{ctrl.label}</p>
                    <p className="text-lg font-black text-white italic tracking-tighter">{ctrl.status}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
