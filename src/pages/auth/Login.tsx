import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Landmark, ArrowRight, Eye, EyeOff, ShieldCheck, Mail, Lock } from 'lucide-react';
import { useStore } from '@/src/lib/store';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const setAuthenticated = useStore(state => state.setAuthenticated);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthenticated(true);
    navigate('/auth/pin-entry');
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
            <h2 className="text-6xl font-display font-black text-white mb-8 leading-tight">
              Premium <br />
              <span className="text-gold italic">Access.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-sm font-medium">
              Enter the secure gateway to your premium financial ecosystem. Total control, unparalleled trust.
            </p>
          </motion.div>
        </div>

        <div className="relative z-10 flex items-center gap-4 text-zinc-600 text-xs font-bold uppercase tracking-widest">
           <ShieldCheck className="text-gold w-5 h-5" />
           Bank-Level Protection Active
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-24 bg-black">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-12 block md:hidden text-center">
            <Link to="/" className="flex items-center justify-center gap-3">
              <Landmark className="w-10 h-10 text-gold" strokeWidth={2.5} />
              <span className="text-3xl font-display font-black text-white tracking-tight">TrustNova</span>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
             <h1 className="text-4xl font-display font-black text-white mb-2">Welcome Back</h1>
             <p className="text-zinc-500 mb-10 font-semibold tracking-tight">Enter your credentials to access your account</p>

             <form className="space-y-8" onSubmit={handleLogin}>
                <div className="space-y-3">
                   <label className="block text-xs font-black uppercase tracking-[0.2em] text-zinc-400 ml-1">Email Address</label>
                   <div className="relative group">
                      <input 
                        type="email" 
                        required
                        placeholder="your@email.com" 
                        className="w-full px-6 py-5 bg-zinc-950 border border-zinc-900 rounded-2xl outline-none focus:border-gold focus:ring-4 focus:ring-gold/5 transition-all text-sm font-bold text-white placeholder:text-zinc-700"
                      />
                      <Mail size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-gold transition-colors" />
                   </div>
                </div>

                <div className="space-y-3">
                   <div className="flex justify-between items-center ml-1">
                      <label className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Password</label>
                      <button type="button" className="text-[10px] font-black uppercase tracking-widest text-gold hover:text-white transition-colors">Forgot Password?</button>
                   </div>
                   <div className="relative group">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        required
                        placeholder="••••••••" 
                        className="w-full px-6 py-5 bg-zinc-950 border border-zinc-900 rounded-2xl outline-none focus:border-gold focus:ring-4 focus:ring-gold/5 transition-all text-sm font-bold tracking-[0.3em] text-white placeholder:text-zinc-700"
                      />
                      <button 
                        type="button" 
                        className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-700 hover:text-gold transition-colors"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                         {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                   </div>
                </div>

                <div className="pt-4">
                   <button 
                     type="submit" 
                     className="sleek-button-gold w-full py-5 text-lg shadow-xl shadow-gold/20"
                   >
                      Login Account <ArrowRight size={20} className="ml-2" />
                   </button>
                </div>
             </form>

             <div className="mt-12 text-center">
                <p className="text-zinc-500 font-semibold tracking-tight">
                   Don't have an account? <Link to="/auth/register" className="text-gold font-black hover:underline underline-offset-4">Open One Now</Link>
                </p>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
