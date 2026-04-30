import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  Search, 
  MessageSquare, 
  FileText, 
  Video, 
  Globe, 
  Terminal,
  Shield,
  LifeBuoy,
  ChevronDown,
  ArrowRight,
  Send,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const FAQS = [
  {
    q: "How do I withdraw funds?",
    a: "Withdrawals can be initiated through the Withdraw section. Ensure your bank account or wallet address is correct before confirming the request."
  },
  {
    q: "What are the account verification levels?",
    a: "Verification levels determine your deposit and withdrawal limits. Higher levels grant access to higher limits and faster processing."
  },
  {
    q: "Are my transactions secure?",
    a: "Yes. TrustNova use state-of-the-art encryption and security protocols to ensure all your data and funds are protected at all times."
  },
  {
    q: "How do I order a physical card?",
    a: "Navigate to the Cards section, select 'Order Card', and choose your preferred card type. Some cards may require higher verification levels."
  }
];

export default function Help() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
    setMessage('');
  };

  return (
    <div className="space-y-16 animate-in fade-in duration-700 pb-20">
      {/* Header & Global Search */}
      <div className="flex flex-col items-center text-center space-y-8 max-w-2xl mx-auto pt-10 px-4 sm:px-0">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gold/10 border border-gold/20 rounded-[2rem] flex items-center justify-center text-gold shadow-[0_0_50px_rgba(212,175,55,0.1)]">
           <HelpCircle size={32} className="sm:size-[40px]" strokeWidth={2.5} />
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-display font-black text-app-text italic tracking-tighter">
            Help <span className="gold-gradient-text text-app-text">Center</span>
          </h1>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px]">
            Find answers and get support for your account
          </p>
        </div>

        <div className="w-full relative group">
           <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-gold transition-colors" size={20} />
           <input 
             type="text" 
             placeholder="Search for help articles..."
             className="w-full bg-app-card border border-app-border rounded-[2rem] pl-16 pr-8 py-5 text-sm font-black uppercase tracking-widest text-app-text outline-none focus:border-gold/50 shadow-2xl transition-all"
           />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-1 space-y-6">
           <h3 className="text-xl font-display font-black text-app-text italic tracking-tighter ml-2">Resources</h3>
           <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'User Guides', icon: FileText, desc: 'Detailed Documentation', color: 'text-blue-500' },
                { label: 'Video Tutorials', icon: Video, desc: 'Watch and Learn', color: 'text-purple-500' },
                { label: 'Developer API', icon: Terminal, desc: 'Technical Docs', color: 'text-green-500' },
                { label: 'Security Reports', icon: Shield, desc: 'Trust and Safety', color: 'text-gold' }
              ].map((item, i) => (
                <button key={i} className="bg-app-card border border-app-border p-6 rounded-[2rem] flex items-center gap-6 group hover:border-gold/30 transition-all text-left shadow-xl">
                   <div className={cn("w-12 h-12 rounded-xl bg-app-bg border border-app-border flex items-center justify-center transition-all group-hover:scale-110", item.color)}>
                      <item.icon size={22} />
                   </div>
                   <div>
                      <h4 className="text-sm font-black text-app-text uppercase italic tracking-tight">{item.label}</h4>
                      <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest leading-none mt-1">{item.desc}</p>
                   </div>
                </button>
              ))}
           </div>
        </div>

        {/* Global FAQs */}
        <div className="lg:col-span-2 space-y-6">
           <h3 className="text-xl font-display font-black text-app-text italic tracking-tighter ml-2">Frequent Inquiries</h3>
           <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-app-card border border-app-border rounded-[2rem] overflow-hidden shadow-xl">
                   <button 
                     onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                     className="w-full p-8 flex items-center justify-between text-left group"
                   >
                      <span className={cn(
                        "text-sm font-black uppercase italic tracking-tight transition-colors",
                        activeFaq === i ? "text-gold" : "text-app-text group-hover:text-gold"
                      )}>
                        {faq.q}
                      </span>
                      <ChevronDown className={cn("text-zinc-700 transition-transform duration-500", activeFaq === i && "rotate-180 text-gold")} size={20} />
                   </button>
                   <AnimatePresence>
                      {activeFaq === i && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                           <div className="px-8 pb-8 text-xs text-zinc-500 font-medium leading-relaxed border-t border-app-border pt-6">
                              {faq.a}
                           </div>
                        </motion.div>
                      )}
                   </AnimatePresence>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Support Interface */}
      <section className="bg-app-card border border-app-border rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 shadow-2xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[100px] rounded-full pointer-events-none"></div>
         
         <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-8 text-center lg:text-left">
               <h2 className="text-2xl sm:text-3xl font-display font-black text-app-text italic tracking-tighter">
                 24/7 <span className="gold-gradient-text italic text-app-text">Priority Support</span>
               </h2>
               <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                 Can't find what you're looking for? Connect directly with our support team. Typical response time: <span className="text-gold font-black">Under 5 minutes</span>.
               </p>
               
               <div className="flex flex-col items-center lg:items-start gap-4 pt-4">
                  <div className="flex items-center gap-4 text-app-text">
                     <div className="w-10 h-10 rounded-xl bg-app-bg border border-app-border flex items-center justify-center text-gold shadow-lg shadow-gold/5">
                        <MessageSquare size={18} />
                     </div>
                     <span className="text-xs font-black uppercase tracking-widest italic">Live Chat</span>
                  </div>
                  <div className="flex items-center gap-4 text-app-text">
                     <div className="w-10 h-10 rounded-xl bg-app-bg border border-app-border flex items-center justify-center text-gold shadow-lg shadow-gold/5">
                        <Zap size={18} />
                     </div>
                     <span className="text-xs font-black uppercase tracking-widest italic">Priority Support</span>
                  </div>
               </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-zinc-600 tracking-[0.3em] ml-4 italic">Message</label>
                  <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?..."
                    className="w-full bg-app-bg border border-app-border rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 text-sm text-app-text placeholder:text-zinc-800 outline-none focus:border-gold/30 min-h-[160px] sm:min-h-[180px] transition-all no-scrollbar"
                  />
               </div>
               
               <button 
                type="submit" 
                disabled={isSent}
                className={cn(
                  "sleek-button-gold w-full h-16 text-lg",
                  isSent && "bg-zinc-900 text-gold border-gold/20"
                )}
               >
                  {isSent ? (
                    <>
                      <CheckCircle2 size={24} className="mr-3" /> Message Sent
                    </>
                  ) : (
                    <>
                      <Send size={24} className="mr-3" /> Send Message
                    </>
                  )}
               </button>
            </form>
         </div>
      </section>
    </div>
  );
}
