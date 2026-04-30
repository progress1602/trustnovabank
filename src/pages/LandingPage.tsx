import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, Smartphone, Globe, ArrowRight, Menu, X, Landmark, 
  Lock, Activity, ShieldCheck, Zap, TrendingUp, CreditCard, 
  CheckCircle2, Star, Users, ArrowUpRight, BarChart3, Fingerprint, 
  Wallet, Headphones, UserPlus, Mail, ArrowDownLeft
} from 'lucide-react';

import PublicNavbar from '@/src/components/PublicNavbar';
import PublicFooter from '@/src/components/PublicFooter';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold selection:text-black font-sans overflow-x-hidden">
      <PublicNavbar />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-black leading-[1.1] mb-6">
              Banking <br />
              Reimagined for <br />
              the <span className="text-gold">Modern World</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-medium">
              Experience secure transfers, instant access, and premium banking designed for your everyday life.
            </p>
            
            <div className="flex flex-wrap gap-5 mb-14">
              <Link to="/auth/register" className="bg-gold text-black px-10 py-4 rounded-lg font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-all shadow-xl shadow-gold/20">
                Open Free Account
              </Link>
              <button className="flex items-center gap-3 px-10 py-4 rounded-lg border border-white/10 hover:border-gold hover:text-gold transition-all text-white font-black uppercase tracking-widest text-[11px]">
                <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center p-1">
                   <ArrowUpRight size={14} className="rotate-45" />
                </div>
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-gold" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Secure Banking</span>
                </div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase">Your money is safe</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Headphones size={16} className="text-gold" />
                  <span className="text-[10px] font-black uppercase tracking-widest">24/7 Support</span>
                </div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase">We're here anytime</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-gold" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Instant Alerts</span>
                </div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase">Stay updated always</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center py-10 lg:py-20"
          >
            {/* Realism Base - The Podium */}
            <div className="absolute bottom-[10%] w-[120%] h-[20%] bg-gradient-to-t from-gold/5 to-transparent rounded-full blur-[100px]" />
            <div className="absolute bottom-[15%] w-[80%] h-4 bg-zinc-900/50 rounded-full blur-[20px]" />

            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              {/* Premium Card Visual - Floating */}
              <motion.div 
                animate={{ y: [0, -10, 0], rotate: [-15, -13, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] md:top-[15%] -left-4 md:-left-8 z-30 w-[75%] md:w-[65%] aspect-[1.58/1] bg-gradient-to-br from-zinc-800 to-black rounded-xl border border-white/10 p-4 md:p-6 shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
              >
                <div className="flex justify-between items-start mb-6 md:mb-8">
                   <div className="flex items-center gap-1.5 transform -translate-y-1">
                      <div className="bg-gold p-0.5 rounded-sm">
                        <Landmark size={10} md:size={12} className="text-black" />
                      </div>
                      <span className="text-[7px] md:text-[8px] font-black tracking-tighter text-white">TRUSTNOVA</span>
                   </div>
                   <div className="w-8 h-6 bg-gold/20 rounded-md border border-gold/10" />
                </div>
                <p className="text-white font-mono text-[9px] md:text-[11px] tracking-[0.2em] mb-4">4832 1234 5678 9021</p>
                <div className="flex justify-between items-end">
                   <div>
                     <p className="text-zinc-500 text-[6px] font-bold uppercase tracking-widest leading-none">VALID THRU</p>
                     <p className="text-white text-[8px] font-bold">12/28</p>
                     <p className="text-white text-[8px] font-black uppercase mt-1">DAVID JOHNSON</p>
                   </div>
                   <div className="text-right">
                      <span className="text-white italic font-black text-lg leading-none">VISA</span>
                      <p className="text-[6px] font-bold uppercase text-zinc-500">DEBIT</p>
                   </div>
                </div>
              </motion.div>

              {/* High-Quality Phone Mockup */}
              <div className="relative z-20 w-[70%] md:w-[60%] h-[400px] md:h-[480px] bg-black border-[6px] md:border-[8px] border-[#1a1a1a] rounded-[2.8rem] md:rounded-[3.2rem] shadow-[0_50px_100px_rgba(0,0,0,1)] overflow-hidden group">
                {/* Gloss Effect */}
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent skew-y-[-20deg] -translate-y-full group-hover:translate-y-0 transition-transform duration-1000 pointer-events-none z-40" />
                
                {/* Screen Content */}
                <div className="absolute inset-0 bg-[#050505] p-5 pt-8">
                   <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-zinc-800 border border-white/5" />
                        <div>
                          <p className="text-[6px] text-zinc-500">Welcome back,</p>
                          <p className="text-[9px] font-black text-white">David Johnson</p>
                        </div>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center">
                         <Activity size={12} className="text-zinc-500" />
                      </div>
                   </div>

                   <div className="bg-gradient-to-br from-zinc-900/80 to-black p-5 rounded-[1.8rem] border border-white/5 mb-5 shadow-xl">
                      <p className="text-[7px] uppercase font-bold text-zinc-500 mb-1">Total Balance</p>
                      <p className="text-xl font-black text-white leading-none">$2,580,000.00</p>
                      <p className="text-[7px] text-zinc-600 mt-2 font-mono tracking-widest">•••• •••• •••• 4832</p>
                   </div>

                   <div className="grid grid-cols-4 gap-2 mb-6">
                      {['Send', 'Receive', 'Deposit', 'More'].map((btn, i) => (
                        <div key={i} className="flex flex-col items-center gap-1.5">
                           <div className="w-9 h-9 bg-zinc-900 border border-white/5 rounded-xl flex items-center justify-center text-gold shadow-lg">
                             {i===0 ? <ArrowUpRight size={14} /> : i===1 ? <ArrowDownLeft size={14} /> : i===2 ? <Landmark size={14} /> : <div className="flex gap-0.5"><div className="w-0.5 h-0.5 bg-gold rounded-full"/><div className="w-0.5 h-0.5 bg-gold rounded-full"/><div className="w-0.5 h-0.5 bg-gold rounded-full"/></div>}
                           </div>
                           <span className="text-[7px] text-zinc-500 font-bold">{btn}</span>
                        </div>
                      ))}
                   </div>

                   <div className="space-y-3">
                      <div className="flex justify-between items-center px-1">
                        <span className="text-[8px] font-black text-white uppercase tracking-widest">Recent Transactions</span>
                        <span className="text-[7px] text-gold font-bold">See all</span>
                      </div>
                      {[
                        { name: 'Transfer to Sarah', amt: '-$120,000', color: 'text-white' },
                        { name: 'Deposit', amt: '+$500,000', color: 'text-green-500' },
                      ].map((tx, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-xl border border-white/5">
                           <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-lg bg-zinc-800" />
                              <span className="text-[8px] font-bold text-white">{tx.name}</span>
                           </div>
                           <span className={`text-[8px] font-black ${tx.color}`}>{tx.amt}</span>
                        </div>
                      ))}
                   </div>
                </div>

                {/* iPhone Notch/Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl z-50 flex items-center justify-center">
                   <div className="w-8 h-1 bg-zinc-900 rounded-full" />
                </div>
              </div>

              {/* Floating Decorative Gold Sphere */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-1/4 w-12 h-12 bg-gradient-to-br from-gold/40 to-transparent rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. LIVE STATS SECTION */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Happy Customers', val: '50K+', icon: Users, color: 'text-gold' },
            { label: 'Total Transactions', val: '$500M+', icon: Wallet, color: 'text-gold' },
            { label: 'System Uptime', val: '99.9%', icon: ShieldCheck, color: 'text-gold' },
            { label: 'Customer Support', val: '24/7', icon: Headphones, color: 'text-gold' }
          ].map((stat, i) => (
            <div key={i} className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl flex items-center gap-6 shadow-2xl relative overflow-hidden group hover:border-gold/30 transition-all">
               <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                  <stat.icon size={28} />
               </div>
               <div>
                 <p className="text-white font-display font-black text-2xl group-hover:text-gold transition-colors">{stat.val}</p>
                 <p className="text-zinc-500 text-[10px] uppercase font-black tracking-widest">{stat.label}</p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE SECTION */}
      <section className="py-24 md:py-32 px-6 bg-black overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.05)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-20 relative">
            <h2 className="text-3xl md:text-5xl font-display font-black leading-tight text-white flex flex-col items-center gap-4">
              Why Choose TrustNova Bank?
              <div className="w-16 h-1 bg-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Zap, title: 'Instant Transfers', desc: 'Send and receive money instantly with zero hassle.' },
              { icon: Wallet, title: 'Smart Wallet', desc: 'Manage your funds easily with our smart wallet.' },
              { icon: CreditCard, title: 'Premium Cards', desc: 'Get virtual cards for secure online payments.' },
              { icon: ShieldCheck, title: 'Top Security', desc: 'Bank-level security to protect your every move.' },
              { icon: TrendingUp, title: 'Easy Withdrawals', desc: 'Withdraw your money anytime you want.' },
              { icon: Headphones, title: 'Dedicated Support', desc: 'Our support team is always ready to assist you.' }
            ].map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900/40 p-8 md:p-10 border border-white/5 rounded-3xl hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500 group text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gold/5 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:scale-110 group-hover:bg-gold group-hover:text-black transition-all duration-500 shadow-lg">
                  <f.icon size={28} className="md:w-8 md:h-8" />
                </div>
                <h4 className="text-xl font-display font-black mb-4 text-white group-hover:text-gold transition-colors">{f.title}</h4>
                <p className="text-zinc-500 leading-relaxed text-sm font-medium">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CARD SHOWCASE SECTION */}
      <section className="py-40 px-6 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
             <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-display font-black leading-tight text-white">
                  Premium Banking <br /> Cards <span className="text-gold">for You</span>
                </h2>
                <p className="text-zinc-500 text-lg leading-relaxed max-w-md font-medium">
                  Get a virtual card that works everywhere. Shop online, subscribe, and pay bills securely with TrustNova Bank cards.
                </p>
             </div>

             <div className="space-y-4 pt-4">
                {[
                  'Virtual Cards', 'Secure Online Payments', 
                  'International Ready', 'Freeze or Unfreeze Anytime'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-5 h-5 bg-gold rounded-full flex items-center justify-center">
                       <CheckCircle2 size={14} className="text-black" strokeWidth={3} />
                    </div>
                    <span className="font-bold text-zinc-300 text-sm">{item}</span>
                  </div>
                ))}
             </div>

             <button className="bg-gold text-black px-12 py-4 rounded-lg font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-all shadow-xl shadow-gold/20">
                Get Your Card
             </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center py-20"
          >
            {/* Realism Base */}
            <div className="absolute bottom-[20%] w-[400px] h-10 bg-gold/5 rounded-full blur-[60px]" />
            
            {/* The Arsenal Card */}
            <div className="relative z-10 w-full max-w-lg aspect-[1.58/1] bg-gradient-to-br from-[#1a1a1a] to-black rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,1)] group overflow-hidden">
               {/* Realistic Pattern Overlay */}
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
               
               <div className="relative z-20 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3 transform -translate-y-2 md:-translate-y-4">
                       <div className="bg-gold p-1 md:p-1.5 rounded-lg shadow-lg">
                          <Landmark className="w-4 h-4 md:w-6 md:h-6 text-black" strokeWidth={2.5} />
                       </div>
                       <div className="flex flex-col">
                         <span className="text-[8px] md:text-[10px] font-black tracking-widest text-white leading-none">TRUSTNOVA</span>
                         <span className="text-[6px] md:text-[7px] font-bold tracking-widest text-white leading-none">BANK</span>
                       </div>
                    </div>
                  </div>

                  <div>
                     {/* Gold Chip - Moved up slightly for better hierarchy */}
                     <div className="w-10 h-8 md:w-14 md:h-11 bg-gradient-to-br from-gold/40 to-gold/10 rounded-lg border border-gold/30 mb-4 md:mb-8 relative overflow-hidden">
                        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 opacity-30">
                           <div className="border-r border-b border-gold/50" />
                           <div className="border-r border-b border-gold/50" />
                           <div className="border-b border-gold/50" />
                           <div className="border-r border-gold/50" />
                           <div className="border-r border-gold/50" />
                        </div>
                     </div>
                     
                     <p className="text-white font-mono text-lg sm:text-2xl md:text-3xl tracking-[0.25em] mb-6 md:mb-8">4832 1234 5678 9021</p>
                     
                     <div className="flex justify-between items-end">
                        <div className="flex gap-4 md:gap-10">
                           <div>
                              <p className="text-zinc-600 text-[6px] md:text-[8px] font-black uppercase tracking-widest mb-1 md:mb-1.5">VALID THRU</p>
                              <p className="text-white text-[10px] md:text-sm font-bold tracking-widest">12/28</p>
                           </div>
                           <div>
                              <p className="text-zinc-600 text-[6px] md:text-[8px] font-black uppercase tracking-widest mb-1 md:mb-1.5">CARD HOLDER</p>
                              <p className="text-white text-[10px] md:text-sm font-bold tracking-widest uppercase truncate max-w-[80px] md:max-w-none">DAVID JOHNSON</p>
                           </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-display font-black text-xl md:text-3xl italic tracking-tighter leading-none">VISA</p>
                          <p className="text-gold text-[6px] md:text-[8px] font-black uppercase tracking-widest mt-1">DEBIT</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. HOW IT WORKS SECTION */}
      <section className="py-32 bg-black overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-display font-black text-white">How It Works</h2>
            <div className="w-16 h-1 bg-gold rounded-full mx-auto mt-4" />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px border-t-2 border-dashed border-white/10" />
            
            {[
              { icon: UserPlus, title: 'Open Account', desc: 'Create your free account in just a few minutes.', step: '1' },
              { icon: Wallet, title: 'Fund Wallet', desc: 'Add money to your wallet securely and instantly.', step: '2' },
              { icon: ArrowUpRight, title: 'Send & Withdraw', desc: 'Transfer, pay bills, or withdraw with complete ease.', step: '3' }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="relative mb-8">
                   <div className="w-8 h-8 bg-gold text-black text-xs font-black rounded-full flex items-center justify-center absolute -top-2 -left-2 z-20 shadow-xl border border-black">
                     {step.step}
                   </div>
                   <div className="w-20 h-20 bg-zinc-900 border border-white/10 shadow-[0_0_30px_rgba(212,175,55,0.1)] rounded-2xl flex items-center justify-center text-white group-hover:bg-gold group-hover:text-black transition-all duration-500">
                     <step.icon size={32} />
                   </div>
                </div>
                <h4 className="text-xl font-display font-black text-white mb-3 group-hover:text-gold transition-colors">{step.title}</h4>
                <p className="text-zinc-500 text-[10px] max-w-[200px] leading-relaxed font-black uppercase tracking-[0.2em]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MOBILE APP SECTION */}
      <section className="py-40 px-6 bg-black overflow-hidden relative">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
             {/* Realistic Phone Mockups from the design */}
             <div className="relative w-full max-w-sm h-[480px] sm:h-[520px]">
                {/* Back phone - Dashboard view */}
                <div className="absolute top-0 left-0 w-[80%] h-full bg-black border-[7px] border-zinc-900 rounded-[2.8rem] shadow-2xl z-10 overflow-hidden transform -rotate-6">
                   <div className="relative p-5 pt-10 h-full bg-[#050505]">
                      <div className="flex justify-between items-center mb-6">
                         <div className="w-7 h-7 rounded-full bg-zinc-800" />
                         <Activity size={12} className="text-zinc-500" />
                      </div>
                      <div className="bg-zinc-900/50 p-5 rounded-2xl border border-white/5 mb-6">
                         <p className="text-[7px] text-zinc-500 uppercase font-black mb-1">Total Balance</p>
                         <p className="text-lg font-black text-white leading-none">$2,580,000.00</p>
                      </div>
                      <div className="grid grid-cols-4 gap-2 mb-6">
                        {[1,2,3,4].map(j => (
                          <div key={j} className="h-8 bg-zinc-900 rounded-lg" />
                        ))}
                      </div>
                      <div className="space-y-3">
                        {[1,2,3].map(j => (
                          <div key={j} className="h-10 bg-zinc-900/50 rounded-xl" />
                        ))}
                      </div>
                   </div>
                </div>

                {/* Front phone - Statistics view with Donut Chart */}
                <div className="absolute top-[12%] right-[-10%] w-[80%] h-full bg-black border-[7px] border-[#1a1a1a] rounded-[2.8rem] shadow-[0_40px_80px_rgba(0,0,0,0.8)] z-20 overflow-hidden transform rotate-6 scale-105 group">
                   {/* Gloss Effect */}
                   <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent skew-y-[-20deg] pointer-events-none z-40" />
                   
                   <div className="relative p-5 pt-10 h-full bg-black">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-b-xl z-50" />
                      
                      <div className="text-center mb-8">
                         <p className="text-[12px] font-black text-white italic tracking-tighter">Statistics</p>
                      </div>

                      <div className="mb-8">
                         <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-4">Spending Overview</p>
                         <div className="relative w-32 h-32 mx-auto">
                            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                               <circle cx="18" cy="18" r="16" fill="none" stroke="#111" strokeWidth="4" />
                               <circle cx="18" cy="18" r="16" fill="none" stroke="#D4AF37" strokeWidth="4" strokeDasharray="65, 100" strokeLinecap="round" />
                               <circle cx="18" cy="18" r="16" fill="none" stroke="#222" strokeWidth="4" strokeDasharray="15, 100" strokeDashoffset="-65" strokeLinecap="round" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                               <p className="text-[7px] text-zinc-500 uppercase font-black leading-none">TOTAL</p>
                               <p className="text-[10px] font-black text-white">$1,450,000</p>
                            </div>
                         </div>
                      </div>

                      <div className="space-y-3">
                         <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-2 px-1">Category</p>
                         {[
                            { name: 'Transfers', amt: '$600,000', color: 'bg-gold' },
                            { name: 'Shopping', amt: '$350,000', color: 'bg-zinc-700' },
                            { name: 'Bills', amt: '$300,000', color: 'bg-zinc-800' },
                            { name: 'Others', amt: '$200,000', color: 'bg-zinc-900' }
                         ].map(cat => (
                            <div key={cat.name} className="flex justify-between items-center px-4 py-3 bg-zinc-900/50 rounded-xl border border-white/5">
                               <div className="flex items-center gap-3">
                                  <div className={`w-2 h-2 rounded-full ${cat.color}`} />
                                  <span className="text-[9px] text-white font-black">{cat.name}</span>
                               </div>
                               <span className="text-[9px] text-zinc-500 font-bold">{cat.amt}</span>
                            </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
             <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-display font-black text-white">Bank Anywhere, Anytime</h2>
                <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                  Our mobile app gives you full control of your finances on the go. Fast, secure and reliable.
                </p>
             </div>

             <div className="space-y-4">
                {[
                  'Track your spending', 'Receive instant alerts', 
                  'Transfer funds quickly', 'Secure login & protection'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-5 h-5 bg-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                       <CheckCircle2 size={12} className="text-black" strokeWidth={3} />
                    </div>
                    <span className="font-black text-white text-xs uppercase tracking-widest">{item}</span>
                  </div>
                ))}
             </div>

             <div className="flex gap-4 pt-4">
                <button className="bg-black text-white px-6 py-2.5 rounded-lg flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl">
                   <div className="flex flex-col items-start leading-none">
                      <span className="text-[7px] uppercase font-bold text-zinc-500">Download on the</span>
                      <span className="text-xs font-black">App Store</span>
                   </div>
                </button>
                <button className="bg-black text-white px-6 py-2.5 rounded-lg flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl">
                   <div className="flex flex-col items-start leading-none">
                      <span className="text-[7px] uppercase font-bold text-zinc-500">GET IT ON</span>
                      <span className="text-xs font-black">Google Play</span>
                   </div>
                </button>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 8. TESTIMONIAL SECTION */}
      <section className="py-40 bg-black overflow-hidden px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white">What Our Customers Say</h2>
            <div className="w-16 h-1 bg-gold rounded-full mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "TrustNova Bank has completely changed the way I bank. Fast, secure and reliable!", author: "Michael D.", delay: 0 },
              { quote: "The best digital bank I've used so far. Everything is just so smooth.", author: "Sarah J.", delay: 0.1 },
              { quote: "Customer support is amazing and withdrawals are always instant.", author: "James T.", delay: 0.2 },
            ].map((t, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: t.delay }}
                className="bg-[#0a0a0a] p-10 rounded-2xl border border-white/5 relative group hover:border-gold/20 transition-all duration-500"
              >
                <div className="text-gold/30 mb-8 transform -translate-x-2">
                   <svg width="48" height="48" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c.341 0 .67-.028.988-.083C10.518 22.316 8.441 24 6 24v2c4.418 0 8-3.582 8-8V10a2 2 0 0 0-2-2h-2zm14 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c.341 0 .67-.028.988-.083C24.518 22.316 22.441 24 20 24v2c4.418 0 8-3.582 8-8V10a2 2 0 0 0-2-2h-2z" />
                   </svg>
                </div>
                <p className="text-zinc-400 text-[13px] font-medium leading-relaxed mb-10 italic">
                  "{t.quote}"
                </p>
                <div className="pt-6 border-t border-white/5">
                   <p className="font-black text-white text-xs uppercase tracking-widest mb-3">-- {t.author}</p>
                   <div className="flex gap-1 text-gold">
                      {[1,2,3,4,5].map(s => <Star key={s} size={10} fill="currentColor" />)}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8.5. CTA SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gold rounded-[2rem] md:rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl shadow-gold/10"
          >
             <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 transform -rotate-12 group-hover:opacity-10 transition-opacity">
                <Landmark size={300} className="text-black" />
             </div>
             
             <div className="relative z-10 space-y-8 md:space-y-10">
                <h2 className="text-3xl md:text-6xl font-display font-black text-black leading-tight">
                  Ready to Join <br className="hidden md:block" /> TrustNova Bank?
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/auth/register" className="bg-black text-white px-10 py-5 rounded-xl font-black text-lg md:text-xl hover:scale-105 transition-transform shadow-2xl">
                    Open Free Account
                  </Link>
                  <button className="bg-black/10 backdrop-blur-md border border-black/10 text-black px-10 py-5 rounded-xl font-black text-lg md:text-xl hover:bg-black hover:text-white transition-all">
                    Contact Support
                  </button>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 9. FINAL SECURITY ROW */}
      <section className="py-20 px-6 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { icon: Shield, title: 'Bank-Level Security', desc: 'Your data and money are protected with top encryption.' },
             { icon: Lock, title: 'Encrypted Transactions', desc: 'All transactions are 100% encrypted and secure.' },
             { icon: Activity, title: 'Fraud Monitoring', desc: 'We monitor every activity to prevent fraud.' },
             { icon: ShieldCheck, title: 'Safe & Reliable', desc: 'Millions trust us for their daily banking.' }
           ].map((item, i) => (
             <div key={i} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold shrink-0">
                   <item.icon size={20} />
                </div>
                <div>
                   <h4 className="text-xs font-black text-white uppercase tracking-widest mb-1">{item.title}</h4>
                   <p className="text-[10px] text-zinc-600 font-bold leading-relaxed">{item.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
