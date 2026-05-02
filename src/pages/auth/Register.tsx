import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Landmark, ArrowRight, ShieldCheck, User, Mail, Lock, Phone, Globe, Briefcase, DollarSign, Wallet, Hash, ChevronDown } from 'lucide-react';
import { useStore } from '@/src/lib/store';
import { COUNTRIES_DATA } from '@/src/lib/countries';

export default function Register() {
  const navigate = useNavigate();
  const updateUser = useStore(state => state.updateUser);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
    pin: '',
    occupation: '',
    country: 'United States',
    state: 'New York',
    currency: 'USD',
    accountType: 'Savings/Checking'
  });

  const selectedCountry = COUNTRIES_DATA.find(c => c.name === formData.country) || COUNTRIES_DATA[0];

  const handleCountryChange = (countryName: string) => {
    const countryObj = COUNTRIES_DATA.find(c => c.name === countryName);
    if (countryObj) {
      setFormData({
        ...formData,
        country: countryName,
        currency: countryObj.currency,
        state: countryObj.states[0] || ''
      });
    }
  };

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match the protocol encryption.";
    }
    
    if (formData.pin.length !== 4) {
      newErrors.pin = "PIN must be exactly 4 digits.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    updateUser({
      firstName: formData.firstName,
      lastName: formData.lastName,
      fullName: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      username: formData.username,
      pin: formData.pin,
      occupation: formData.occupation,
      country: formData.country,
      currency: formData.currency,
      accountType: formData.accountType,
      isAuthenticated: true
    });

    navigate('/auth/pin-entry');
  };

  const inputClasses = "w-full px-6 py-4 bg-zinc-950 border border-zinc-900 rounded-xl outline-none focus:border-gold transition-all text-[11px] font-black uppercase tracking-widest text-white placeholder:text-zinc-800";
  const labelClasses = "block text-[8px] font-black uppercase tracking-[0.3em] text-zinc-500 ml-1 mb-2.5";

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-black selection:bg-gold selection:text-black font-sans">
      {/* Brand Side */}
      <div className="hidden lg:flex lg:w-[35%] bg-black p-16 flex-col justify-between relative overflow-hidden border-r border-gold/10">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.08),transparent_70%)]" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(212,175,55,0.05),transparent_60%)]" />
        </div>
        
        <Link to="/" className="flex items-center gap-4 relative z-10">
          <div className="bg-gold p-2 rounded-lg shadow-[0_0_20px_rgba(212,175,55,0.3)]">
             <Landmark className="w-8 h-8 text-black" strokeWidth={3} />
          </div>
          <div>
            <span className="text-2xl font-display font-black text-white tracking-tighter uppercase italic block leading-none">TrustNova</span>
            <span className="text-[7px] text-zinc-500 font-bold tracking-[0.4em] uppercase block mt-1">Sovereign Asset Group</span>
          </div>
        </Link>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl font-display font-black text-white mb-10 leading-[1.1] tracking-tighter">
              BEYOND <br />
              <span className="text-gold italic">BANKING.</span>
            </h2>
            <div className="space-y-6">
               {[
                 "INSTANT GLOBAL LIQUIDITY",
                 "END-TO-END NODE ENCRYPTION",
                 "SOVEREIGN ASSET PROTECTION"
               ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                     <div className="w-8 h-8 bg-zinc-900 border border-gold/10 rounded-lg flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                       <ShieldCheck className="w-4 h-4" />
                     </div>
                     <span className="text-zinc-500 font-black tracking-widest text-[9px] uppercase">{benefit}</span>
                  </div>
               ))}
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 flex items-center gap-4 text-zinc-700 text-[8px] font-black uppercase tracking-[0.3em] leading-relaxed italic">
           © 2026 TRUSTNOVA BANKS INTERNATIONAL <br />
           ALL RIGHTS RESERVED • SECURE PROTOCOL v1.0
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex flex-col justify-start lg:h-screen overflow-y-auto no-scrollbar relative bg-black">
        <div className="max-w-3xl w-full mx-auto px-8 lg:px-24 py-16">
          <div className="mb-12 block lg:hidden text-center">
            <Link to="/" className="inline-flex items-center gap-3">
              <Landmark className="w-10 h-10 text-gold" strokeWidth={3} />
              <span className="text-3xl font-display font-black text-white tracking-tighter italic uppercase">TrustNova</span>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
             <div className="mb-12">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gold mb-3 block">Account Registration Phase</span>
                <h1 className="text-4xl lg:text-5xl font-display font-black text-white mb-4 italic tracking-tighter leading-none">JOIN THE NETWORK</h1>
                <p className="text-zinc-600 font-bold tracking-tight text-xs max-w-md">Complete the sovereign protocol to initialize your global banking terminal.</p>
             </div>

             <form className="space-y-10" onSubmit={handleRegister}>
                {/* Section 1: Personal Profile */}
                <div className="space-y-6">
                   <div className="flex items-center gap-4 mb-8">
                      <div className="h-px bg-gold/20 flex-1" />
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500">Identity Profile</span>
                      <div className="h-px bg-gold/20 flex-1" />
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                         <label className={labelClasses}>First Name</label>
                         <div className="relative group">
                            <input 
                              type="text" required placeholder="HENRY" 
                              className={inputClasses}
                              value={formData.firstName}
                              onChange={e => setFormData({...formData, firstName: e.target.value})}
                            />
                            <User size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-800 group-focus-within:text-gold transition-colors" />
                         </div>
                      </div>
                      <div>
                         <label className={labelClasses}>Last Name</label>
                         <div className="relative group">
                            <input 
                              type="text" required placeholder="DAVID" 
                              className={inputClasses}
                              value={formData.lastName}
                              onChange={e => setFormData({...formData, lastName: e.target.value})}
                            />
                            <User size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-800 group-focus-within:text-gold transition-colors" />
                         </div>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                         <label className={labelClasses}>Email Address</label>
                         <div className="relative group">
                            <input 
                              type="email" required placeholder="HENRYDAVID1602@GMAIL.COM" 
                              className={inputClasses}
                              value={formData.email}
                              onChange={e => setFormData({...formData, email: e.target.value})}
                            />
                            <Mail size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-800 group-focus-within:text-gold transition-colors" />
                         </div>
                      </div>
                      <div>
                         <label className={labelClasses}>Phone Number</label>
                         <div className="relative group">
                            <input 
                              type="tel" required placeholder="+1 (000) 000-0000" 
                              className={inputClasses}
                              value={formData.phone}
                              onChange={e => setFormData({...formData, phone: e.target.value})}
                            />
                            <Phone size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-800 group-focus-within:text-gold transition-colors" />
                         </div>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                         <label className={labelClasses}>Occupation</label>
                         <div className="relative group">
                            <input 
                              type="text" required placeholder="DIGITAL ASSET ARCHITECT" 
                              className={inputClasses}
                              value={formData.occupation}
                              onChange={e => setFormData({...formData, occupation: e.target.value})}
                            />
                            <Briefcase size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-800 group-focus-within:text-gold transition-colors" />
                         </div>
                      </div>
                      <div>
                         <label className={labelClasses}>Country of Operation</label>
                         <div className="relative group">
                            <select 
                              className={cn(inputClasses, "appearance-none bg-zinc-950")}
                              value={formData.country}
                              onChange={e => handleCountryChange(e.target.value)}
                            >
                               {COUNTRIES_DATA.map(c => (
                                  <option key={c.code} value={c.name}>{c.name.toUpperCase()}</option>
                               ))}
                            </select>
                            <Globe size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-800 transition-colors pointer-events-none" />
                            <ChevronDown size={14} className="absolute right-12 top-1/2 -translate-y-1/2 text-zinc-800 pointer-events-none" />
                         </div>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                      <div>
                         <label className={labelClasses}>State / Province</label>
                         <div className="relative group">
                            <select 
                              className={cn(inputClasses, "appearance-none bg-zinc-950")}
                              value={formData.state}
                              onChange={e => setFormData({...formData, state: e.target.value})}
                            >
                               {selectedCountry.states.map(s => (
                                  <option key={s} value={s}>{s.toUpperCase()}</option>
                               ))}
                            </select>
                            <ChevronDown size={14} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-800 pointer-events-none" />
                         </div>
                      </div>
                   </div>
                </div>

                {/* Section 2: Account Config */}
                <div className="space-y-6">
                   <div className="flex items-center gap-4 mb-8">
                      <div className="h-px bg-gold/20 flex-1" />
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500">Node Configuration</span>
                      <div className="h-px bg-gold/20 flex-1" />
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                         <label className={labelClasses}>Currency Protocol</label>
                         <div className="relative group">
                            <select 
                              className={cn(inputClasses, "appearance-none bg-zinc-950")}
                              value={formData.currency}
                              onChange={e => setFormData({...formData, currency: e.target.value})}
                            >
                               <option value="USD">USD - US DOLLAR</option>
                               <option value="EUR">EUR - EURO</option>
                               <option value="GBP">GBP - BRITISH POUND</option>
                               <option value="CHF">CHF - SWISS FRANC</option>
                            </select>
                            <DollarSign size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-800 transition-colors pointer-events-none" />
                         </div>
                      </div>
                      <div>
                         <label className={labelClasses}>Account Tier</label>
                         <div className="relative group">
                            <select 
                              className={cn(inputClasses, "appearance-none bg-zinc-950")}
                              value={formData.accountType}
                              onChange={e => setFormData({...formData, accountType: e.target.value})}
                            >
                               <option value="Savings/Checking">PREMIUM SAVINGS/CHECKING</option>
                               <option value="Private Banking">SOVEREIGN PRIVATE BANKING</option>
                               <option value="Corporate">CORPORATE INFRASTRUCTURE</option>
                            </select>
                            <Wallet size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-800 transition-colors pointer-events-none" />
                         </div>
                      </div>
                   </div>
                </div>

                {/* Section 3: Credentials */}
                <div className="space-y-6">
                   <div className="flex items-center gap-4 mb-8">
                      <div className="h-px bg-gold/20 flex-1" />
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500">Secure Access Credentials</span>
                      <div className="h-px bg-gold/20 flex-1" />
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                      <div>
                         <label className={labelClasses}>Username</label>
                         <div className="relative group">
                            <input 
                              type="text" required placeholder="HENRYDAVID" 
                              className={inputClasses}
                              value={formData.username}
                              onChange={e => setFormData({...formData, username: e.target.value})}
                            />
                            <User size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-800 group-focus-within:text-gold transition-colors" />
                         </div>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                         <label className={labelClasses}>Secure Password</label>
                         <div className="relative group">
                            <input 
                              type="password" required placeholder="••••••••" 
                              className={inputClasses}
                              value={formData.password}
                              onChange={e => setFormData({...formData, password: e.target.value})}
                            />
                            <Lock size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-800 group-focus-within:text-gold transition-colors" />
                         </div>
                      </div>
                      <div>
                         <label className={labelClasses}>Confirm Password</label>
                         <div className="relative group">
                            <input 
                              type="password" required placeholder="••••••••" 
                              className={cn(inputClasses, errors.confirmPassword && "border-red-500")}
                              value={formData.confirmPassword}
                              onChange={e => setFormData({...formData, confirmPassword: e.target.value})}
                            />
                            <Lock size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-800 group-focus-within:text-gold transition-colors" />
                         </div>
                         {errors.confirmPassword && <p className="text-[8px] text-red-500 mt-2 font-black uppercase tracking-widest">{errors.confirmPassword}</p>}
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                      <div>
                         <label className={labelClasses}>Account Access PIN (4 Digits)</label>
                         <div className="relative group">
                            <input 
                              type="password" required placeholder="0000" 
                              maxLength={4}
                              className={cn(inputClasses, "tracking-[1em] text-center", errors.pin && "border-red-500")}
                              value={formData.pin}
                              onChange={e => setFormData({...formData, pin: e.target.value.replace(/\D/g, '')})}
                            />
                            <Hash size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-800 group-focus-within:text-gold transition-colors" />
                         </div>
                         {errors.pin && <p className="text-[8px] text-red-500 mt-2 font-black uppercase tracking-widest text-center">{errors.pin}</p>}
                      </div>
                   </div>
                </div>

                <div className="pt-10">
                   <p className="text-[9px] text-zinc-600 mb-10 px-1 font-bold leading-relaxed text-center uppercase tracking-widest italic">
                      BY CLICKING PROTOCOL INITIALIZATION, YOU ACKNOWLEDGE THE <span className="text-gold font-black underline underline-offset-4 cursor-pointer">SOVEREIGN TERMS</span> AND THE <span className="text-gold font-black underline underline-offset-4 cursor-pointer">SECURE NODE PRIVACY LOGIC</span>.
                   </p>
                   <button 
                     type="submit" 
                     className="w-full bg-gold text-black py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] italic shadow-[0_20px_50px_rgba(212,175,55,0.2)] hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                   >
                      INITIALIZE ACCOUNT <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                   </button>
                </div>
             </form>

             <p className="text-center mt-16 text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em] italic">
                ALREADY PART OF THE NETWORK? <Link to="/auth/login" className="text-gold hover:underline underline-offset-4 ml-1">CONNECT ACCOUNT</Link>
             </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
