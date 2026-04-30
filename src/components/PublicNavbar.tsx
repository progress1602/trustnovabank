import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Landmark } from 'lucide-react';

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
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Cards', path: '/cards' },
    { name: 'Security', path: '/security' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-black/90 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-gold p-1.5 rounded-lg shadow-[0_0_15px_rgba(255,191,0,0.3)] flex items-center justify-center">
             <Landmark className="w-6 h-6 text-black" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-display font-black tracking-tighter text-white">
            TrustNova <span className="text-gold italic">Bank</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-colors duration-300 ${
                location.pathname === link.path ? 'text-gold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            to="/auth/login" 
            className="px-8 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300"
          >
            Log In
          </Link>
          <Link 
            to="/auth/register" 
            className="px-8 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest bg-gold text-black hover:bg-zinc-900 hover:text-gold transition-all duration-300"
          >
            Open Account
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
            className="lg:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 p-8 space-y-8 shadow-2xl"
          >
            <div className="flex flex-col gap-6 text-[11px] font-black uppercase tracking-widest text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${location.pathname === link.path ? 'text-gold' : 'text-zinc-400'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <Link to="/auth/login" className="w-full py-4 text-center border border-gold text-gold rounded-xl font-black uppercase tracking-widest text-[11px]">Log In</Link>
              <Link to="/auth/register" className="w-full py-4 text-center bg-gold text-black rounded-xl font-black uppercase tracking-widest text-[11px]">Open Account</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
