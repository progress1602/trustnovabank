import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Lock, Landmark, Delete, ArrowRight } from 'lucide-react';
import { useStore } from '@/src/lib/store';
import { cn } from '@/src/lib/utils';

export default function PINEntry() {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { setPinVerified, isAuthenticated } = useStore();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth/login');
    }
  }, [isAuthenticated, navigate]);

  const handleKeyPress = (num: number) => {
    if (pin.length < 4) {
      const newPin = pin + num;
      setPin(newPin);
      setError(false);
    }
  };

  const handleSubmit = () => {
    if (pin.length === 4) {
      setPinVerified(true);
      navigate('/dashboard');
    } else {
      setError(true);
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent)] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md space-y-12 relative z-10"
      >
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-display font-black text-white italic tracking-tighter uppercase">Enter Your PIN</h1>
        </div>

        <div className="space-y-10">
          {/* PIN Display */}
          <div className="flex justify-center gap-4">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i} 
                className={cn(
                  "w-16 h-16 rounded-2xl border-2 flex items-center justify-center transition-all duration-300",
                  pin.length > i ? "border-gold bg-gold/10 shadow-[0_0_20px_rgba(212,175,55,0.2)]" : "border-white/10 bg-white/[0.02]"
                )}
              >
                {pin.length > i && (
                  <div className="w-4 h-4 bg-gold rounded-full" />
                )}
              </div>
            ))}
          </div>

          {/* Keypad */}
          <div className="grid grid-cols-3 gap-4 max-w-[320px] mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleKeyPress(num)}
                className="h-16 rounded-2xl bg-zinc-900 border border-white/5 text-2xl font-display font-bold text-white italic hover:border-gold/50 active:scale-95 transition-all shadow-xl"
              >
                {num}
              </button>
            ))}
            <button
              onClick={handleDelete}
              className="h-16 rounded-2xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-white hover:bg-red-600/40 transition-all shadow-xl"
            >
              DELETE
            </button>
            <button
              onClick={() => handleKeyPress(0)}
              className="h-16 rounded-2xl bg-zinc-900 border border-white/5 text-2xl font-display font-bold text-white italic hover:border-gold/50 active:scale-95 transition-all shadow-xl"
            >
              0
            </button>
            <button
              onClick={handleSubmit}
              className="h-16 rounded-2xl bg-blue-600 border border-blue-400 flex items-center justify-center text-white font-black uppercase italic tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
