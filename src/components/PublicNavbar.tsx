import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Landmark, Lock } from 'lucide-react';

export default function PublicNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'SERVICES', path: '/features' },
    { name: 'ACCOUNTS', path: '/cards' },
    { name: 'LOANS', path: '/#loans' },
    { name: 'INVESTMENTS', path: '/#investments' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-black/95 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'py-5 bg-black/40 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-gold p-2 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.45)] flex items-center justify-center transition-transform group-hover:scale-105">
             <Landmark className="w-5 h-5 text-black" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-black tracking-widest text-[#FFF] leading-none uppercase">
              TRUSTNOVA <span className="text-gold">BANK</span>
            </span>
            <span className="text-[7px] text-zinc-400 font-bold tracking-[0.25em] uppercase mt-1">
              Strong Today. Stronger Tomorrow.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.15em]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-colors duration-300 relative py-1.5 ${
                location.pathname === link.path ? 'text-gold' : 'text-zinc-300 hover:text-white'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="activePublicNavLine"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" 
                />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center">
          <Link 
            to="/auth/login" 
            className="px-6 py-3 bg-gold hover:bg-white text-black font-black uppercase tracking-[0.15em] text-[10px] italic rounded-lg transition-all duration-300 shadow-lg shadow-gold/20 flex items-center gap-2 hover:scale-105"
          >
            <Lock size={12} className="stroke-[2.5]" />
            <span>ONLINE BANKING</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 p-8 space-y-8 shadow-2xl"
          >
            <div className="flex flex-col gap-6 text-[10px] font-black uppercase tracking-widest text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${location.pathname === link.path ? 'text-gold' : 'text-zinc-300'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <Link to="/auth/login" onClick={() => setIsMenuOpen(false)} className="w-full py-4 text-center bg-gold text-black rounded-lg font-black uppercase tracking-widest text-[10px] italic flex items-center justify-center gap-2">
                <Lock size={12} className="stroke-[2.5]" />
                <span>ONLINE BANKING</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
