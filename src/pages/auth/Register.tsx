import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Landmark, ArrowRight, ShieldCheck, User, Mail, Lock, Phone } from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black selection:bg-gold selection:text-black font-sans">
      {/* Brand Side */}
      <div className="hidden md:flex md:w-1/2 bg-black p-20 flex-col justify-between relative overflow-hidden border-r border-zinc-900/50">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,191,0,0.1),transparent_70%)]" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(255,191,0,0.05),transparent_60%)]" />
        </div>
        
        <Link to="/" className="flex items-center gap-3 relative z-10 group">
          <div className="bg-gold p-1.5 rounded-lg shadow-[0_0_15px_rgba(255,191,0,0.3)]">
             <Landmark className="w-8 h-8 text-black" strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-display font-black text-white tracking-tight uppercase">TrustNova</span>
        </Link>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl font-display font-black text-white mb-10 leading-tight">
              Start Your <br />
              <span className="text-gold italic">Legacy.</span>
            </h2>
            <div className="space-y-6">
               {[
                 "Instant Account Activation",
                 "Zero Maintenance Fees",
                 "Premium Virtual Cards"
               ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                     <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                       <ShieldCheck className="w-4 h-4" />
                     </div>
                     <span className="text-zinc-400 font-bold tracking-tight text-sm">{benefit}</span>
                  </div>
               ))}
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 flex items-center gap-4 text-zinc-600 text-xs font-bold uppercase tracking-widest leading-relaxed">
           © 2026 TrustNova Financial Infrastructure <br />
           Swiss-Core Compliance Active
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-24 py-20 relative bg-black">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-12 block md:hidden text-center">
            <Link to="/" className="flex items-center justify-center gap-3">
              <Landmark className="w-10 h-10 text-gold" strokeWidth={2.5} />
              <span className="text-3xl font-display font-black text-white tracking-tight">TrustNova</span>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
             <h1 className="text-4xl font-display font-black text-white mb-2">Create Account</h1>
             <p className="text-zinc-500 mb-10 font-semibold tracking-tight">Join the elite global banking ecosystem today</p>

             <form className="space-y-6" onSubmit={handleRegister}>
                <div className="space-y-2.5">
                   <label className="block text-xs font-black uppercase tracking-[0.2em] text-zinc-400 ml-1">Full Name</label>
                   <div className="relative group">
                      <input 
                        type="text" 
                        required
                        placeholder="Alexander Sterling" 
                        className="w-full px-6 py-4 bg-zinc-950 border border-zinc-900 rounded-xl outline-none focus:border-gold transition-all text-sm font-bold text-white placeholder:text-zinc-700"
                      />
                      <User size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-gold transition-colors" />
                   </div>
                </div>

                <div className="space-y-2.5">
                   <label className="block text-xs font-black uppercase tracking-[0.2em] text-zinc-400 ml-1">Email Address</label>
                   <div className="relative group">
                      <input 
                        type="email" 
                        required
                        placeholder="your@email.com" 
                        className="w-full px-6 py-4 bg-zinc-950 border border-zinc-900 rounded-xl outline-none focus:border-gold transition-all text-sm font-bold text-white placeholder:text-zinc-700"
                      />
                      <Mail size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-gold transition-colors" />
                   </div>
                </div>

                <div className="space-y-2.5">
                   <label className="block text-xs font-black uppercase tracking-[0.2em] text-zinc-400 ml-1">Phone Number</label>
                   <div className="relative group">
                      <input 
                        type="tel" 
                        required
                        placeholder="+1 (555) 000-0000" 
                        className="w-full px-6 py-4 bg-zinc-950 border border-zinc-900 rounded-xl outline-none focus:border-gold transition-all text-sm font-bold text-white placeholder:text-zinc-700"
                      />
                      <Phone size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-gold transition-colors" />
                   </div>
                </div>

                <div className="space-y-2.5">
                   <label className="block text-xs font-black uppercase tracking-[0.2em] text-zinc-400 ml-1">Secure Password</label>
                   <div className="relative group">
                      <input 
                        type="password" 
                        required
                        placeholder="••••••••" 
                        className="w-full px-6 py-4 bg-zinc-950 border border-zinc-900 rounded-xl outline-none focus:border-gold transition-all text-sm font-bold tracking-[0.3em] text-white placeholder:text-zinc-700"
                      />
                      <Lock size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-gold transition-colors" />
                   </div>
                </div>

                <div className="pt-6">
                   <p className="text-[10px] text-zinc-500 mb-8 px-1 font-semibold leading-relaxed">
                      By clicking current protocol activation, you agree to the <span className="text-gold font-bold underline underline-offset-4 cursor-pointer">Terms of Service</span> and <span className="text-gold font-bold underline underline-offset-4 cursor-pointer">Privacy Logic</span>.
                   </p>
                   <button 
                     type="submit" 
                     className="sleek-button-gold w-full py-5 text-lg shadow-xl shadow-gold/20"
                   >
                      Initialize Account <ArrowRight size={20} className="ml-2" />
                   </button>
                </div>
             </form>

             <p className="text-center mt-12 text-zinc-500 font-semibold tracking-tight">
                Already part of the ecosystem? <Link to="/auth/login" className="text-gold font-black hover:underline underline-offset-4">Connect Account</Link>
             </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
