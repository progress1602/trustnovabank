import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  ShieldCheck, 
  ShieldAlert, 
  CheckCircle2, 
  Lock, 
  ChevronRight,
  FileText,
  User,
  Smartphone,
  Globe,
  Zap,
  Star,
  Crown
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const TIERS = [
  {
    level: 1,
    name: 'Basic Protocol',
    icon: Shield,
    status: 'Completed',
    requirements: [
      { label: 'Email Managed', status: 'verified', icon: Globe },
      { label: 'Phone Linked', status: 'verified', icon: Smartphone }
    ],
    limits: {
      transfer: '$1,000 Daily',
      withdraw: '$500 Daily'
    },
    color: 'zinc-500'
  },
  {
    level: 2,
    name: 'Standard Asset',
    icon: ShieldCheck,
    status: 'Action Required',
    requirements: [
      { label: 'Passport / National ID', status: 'pending', icon: User },
      { label: 'Proof of Residency', status: 'pending', icon: FileText }
    ],
    limits: {
      transfer: '$10,000 Daily',
      withdraw: '$5,000 Daily'
    },
    color: 'gold'
  },
  {
    level: 3,
    name: 'Premium Sovereign',
    icon: Crown,
    status: 'Locked',
    requirements: [
      { label: 'Source of Wealth', status: 'locked', icon: Zap },
      { label: 'Biometric Verification', status: 'locked', icon: ShieldAlert },
      { label: 'Enhanced Review', status: 'locked', icon: Star }
    ],
    limits: {
      transfer: 'Unlimited Protocol',
      withdraw: 'High-Volume Access'
    },
    benefits: [
      'Priority Asset Manager',
      'Exclusive Physical Cards',
      'Nano-second Approvals'
    ],
    color: 'purple-500'
  }
];

export default function Verification() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-app-border pb-12">
        <div>
          <h1 className="text-4xl font-display font-black text-app-text italic tracking-tighter">
            Verification <span className="gold-gradient-text">Center</span>
          </h1>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px] mt-2">
            Elevate your entity status to unlock global capital limits
          </p>
        </div>
        <div className="px-6 py-3 bg-app-card border border-app-border rounded-2xl flex items-center gap-4">
           <div className="w-2 h-2 bg-gold rounded-full animate-pulse shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
           <span className="text-[10px] font-black uppercase text-app-text tracking-widest italic">Current Status: Standard Progression</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {TIERS.map((tier, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={cn(
               "bg-app-card border rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden group transition-all duration-500 shadow-2xl",
               tier.status === 'Completed' ? 'border-app-border' : 
               tier.status === 'Action Required' ? 'border-gold/40 shadow-gold/5' : 'border-app-border opacity-60'
            )}
          >
            {/* Background Accent */}
            <div className={cn(
              "absolute -top-20 -right-20 w-48 h-48 rounded-full blur-[80px]",
              tier.level === 1 ? 'bg-zinc-500/5' : tier.level === 2 ? 'bg-gold/10' : 'bg-purple-500/5'
            )} />

            <div className="relative z-10 space-y-10 flex flex-col h-full">
              <div className="flex justify-between items-start">
                 <div className={cn(
                   "w-16 h-16 rounded-2xl flex items-center justify-center border",
                   tier.level === 2 ? 'bg-gold/10 border-gold/20 text-gold shadow-[0_0_20px_rgba(212,175,55,0.1)]' : 'bg-app-bg border-app-border text-zinc-500'
                 )}>
                    <tier.icon size={32} />
                 </div>
                 <span className={cn(
                   "text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border",
                   tier.status === 'Completed' ? 'text-green-500 border-green-500/20 bg-green-500/5' :
                   tier.status === 'Action Required' ? 'text-gold border-gold/20 bg-gold/5' : 'text-zinc-600 border-app-border bg-app-bg'
                 )}>
                   {tier.status}
                 </span>
              </div>

              <div>
                <h3 className="text-2xl font-display font-black text-app-text italic tracking-tighter mb-2">{tier.name}</h3>
                <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Protocol Level 0{tier.level}</p>
              </div>

              <div className="space-y-6 flex-1">
                <div className="space-y-4">
                  <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-gold" /> Validation Sequence
                  </p>
                  <div className="space-y-3">
                    {tier.requirements.map((req, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-app-bg rounded-xl border border-app-border group/item">
                        <div className="flex items-center gap-3">
                          <req.icon size={16} className="text-zinc-700 group-hover/item:text-gold transition-colors" />
                          <span className="text-xs font-bold text-zinc-400">{req.label}</span>
                        </div>
                        {req.status === 'verified' ? (
                          <CheckCircle2 size={16} className="text-green-500" />
                        ) : req.status === 'pending' ? (
                          <ChevronRight size={16} className="text-gold" />
                        ) : (
                          <Lock size={14} className="text-zinc-800" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-app-border">
                   <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Unlocked Protocols</p>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-app-bg rounded-xl border border-app-border">
                        <p className="text-[8px] text-zinc-600 uppercase font-black mb-1">Transfer</p>
                        <p className="text-xs font-black text-app-text italic tracking-tighter">{tier.limits.transfer}</p>
                      </div>
                      <div className="p-4 bg-app-bg rounded-xl border border-app-border">
                        <p className="text-[8px] text-zinc-600 uppercase font-black mb-1">Extraction</p>
                        <p className="text-xs font-black text-app-text italic tracking-tighter">{tier.limits.withdraw}</p>
                      </div>
                   </div>
                </div>

                {tier.benefits && (
                  <div className="pt-6 space-y-3">
                    {tier.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-3 text-[10px] font-black text-zinc-400 italic">
                         <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                         {b}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-8">
                 {tier.status === 'Action Required' ? (
                   <button className="sleek-button-gold w-full py-5 text-[10px]">
                     Initialize Validation
                   </button>
                 ) : tier.status === 'Locked' ? (
                   <button disabled className="w-full bg-app-bg border border-app-border text-zinc-700 rounded-2xl py-5 font-black uppercase tracking-[0.2em] text-[10px] cursor-not-allowed">
                     Protocol Locked
                   </button>
                 ) : (
                   <button className="w-full bg-app-bg text-green-500 rounded-2xl py-5 font-black uppercase tracking-[0.2em] text-[10px] border border-green-500/20">
                     Verification Finalized
                   </button>
                 )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Manual Upload Section (Only shown for active verifications) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-app-card border border-app-border rounded-[2.5rem] p-12 text-center shadow-2xl"
      >
        <div className="max-w-2xl mx-auto space-y-8">
           <div className="w-20 h-20 bg-gold/10 rounded-3xl flex items-center justify-center text-gold mx-auto border border-gold/20">
             <FileText size={36} />
           </div>
           <h3 className="text-3xl font-display font-black text-app-text italic tracking-tighter">Submit Intelligence Documents</h3>
           <p className="text-zinc-500 font-medium leading-relaxed">
             Securely upload your National ID, Passport, or Residency proof for manual node review. All data is encrypted using military-grade sovereign protocols.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="bg-app-text text-app-bg px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-gold hover:text-black transition-colors shadow-lg">
                Select Protocol File
              </button>
              <button className="border border-app-border text-zinc-500 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:text-app-text transition-colors">
                Alternative Archive
              </button>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
