import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ArrowDownCircle, 
  ArrowUpCircle, 
  Send, 
  CreditCard, 
  HelpCircle, 
  History, 
  Settings, 
  LogOut,
  Landmark,
  Bell,
  Menu,
  X,
  User,
  Shield,
  ShieldCheck,
  Activity,
  Search,
  MessageSquare,
  Globe,
  Sun,
  Moon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn, MOCK_NOTIFICATIONS } from '@/src/lib/utils';
import { useStore } from '@/src/lib/store';

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();
  const theme = useStore(state => state.theme);
  const toggleTheme = useStore(state => state.toggleTheme);
  const fullName = useStore(state => state.fullName);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Accounts', icon: Landmark, path: '/dashboard/accounts' },
    { name: 'Deposit', icon: ArrowDownCircle, path: '/dashboard/deposit' },
    { name: 'Transfer', icon: Send, path: '/dashboard/transfer' },
    { name: 'Withdraw', icon: ArrowUpCircle, path: '/dashboard/withdraw' },
    { name: 'Cards', icon: CreditCard, path: '/dashboard/cards' },
    { name: 'Transactions', icon: History, path: '/dashboard/transactions' },
    { name: 'Notifications', icon: Bell, path: '/dashboard/notifications' },
    { name: 'Verification', icon: ShieldCheck, path: '/dashboard/verification' },
    { name: 'Security', icon: Shield, path: '/dashboard/security' },
    { name: 'Settings', icon: Settings, path: '/dashboard/settings' },
    { name: 'Help Center', icon: HelpCircle, path: '/dashboard/help' },
  ];

  const currentPageName = navItems.find(item => item.path === location.pathname)?.name || 'Command';

  return (
    <div className="min-h-screen bg-app-bg text-app-text flex overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 w-64 bg-[var(--sidebar-bg)] border-r border-app-border z-50 transform transition-transform lg:relative lg:translate-x-0 flex flex-col py-8",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="px-8 mb-12 flex items-center gap-3">
          <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center shadow-lg shadow-gold/20">
            <Landmark className="w-6 h-6 text-black" strokeWidth={3} />
          </div>
          <span className="text-xl font-black tracking-tighter text-app-text uppercase italic">TRUSTNOVA</span>
        </div>

        <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto no-scrollbar">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === '/dashboard'}
              className={({ isActive }) => cn(
                "flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 font-black uppercase text-[10px] tracking-[0.2em]",
                isActive 
                  ? "bg-gold text-black shadow-xl shadow-gold/10 italic translate-x-2" 
                  : "text-zinc-500 hover:text-white hover:bg-zinc-900/50"
              )}
              onClick={() => setIsSidebarOpen(false)}
            >
              <item.icon size={18} className="shrink-0" strokeWidth={2.5} />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto px-6 pt-6 border-t border-zinc-900">
          <div className="flex items-center space-x-3 mb-8 p-3 bg-app-bg rounded-xl border border-app-border">
            <div className="w-10 h-10 rounded-lg bg-app-card flex items-center justify-center text-zinc-500 overflow-hidden border border-app-border">
               <User size={20} strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-xs font-black text-app-text uppercase italic tracking-tighter">{fullName}</p>
              <p className="text-[9px] text-gold font-black uppercase tracking-widest">Premium Tier</p>
            </div>
          </div>
          <NavLink
            to="/auth/login"
            className="flex items-center gap-3 px-3 text-[10px] text-zinc-600 hover:text-red-500 mb-4 transition-colors font-black uppercase tracking-widest italic"
          >
            <LogOut size={16} strokeWidth={2.5} />
            <span>Logout</span>
          </NavLink>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto bg-app-bg no-scrollbar relative transition-colors duration-300">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 blur-[200px] pointer-events-none" />
        
        {/* Topbar */}
        <header className="h-24 bg-app-bg/50 backdrop-blur-xl border-b border-app-border px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex-1 flex items-center gap-6">
            <button className="lg:hidden p-2 hover:bg-app-card text-gold rounded-xl transition-colors" onClick={() => setIsSidebarOpen(true)}>
              <Menu size={28} strokeWidth={3} />
            </button>
            
            {/* Search Bar */}
            <div className="hidden md:flex items-center gap-4 px-6 py-3 bg-app-card border border-app-border rounded-2xl w-full max-w-md group focus-within:border-gold/50 transition-all">
              <Search size={18} className="text-zinc-700 group-focus-within:text-gold transition-colors" />
              <input 
                type="text" 
                placeholder="Search transactions, accounts, or assets..." 
                className="bg-transparent border-none outline-none text-xs font-black uppercase tracking-widest text-app-text placeholder:text-zinc-500 w-full"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* Intel Display (Messages/Notifications) */}
            <div className="flex items-center gap-2 pr-6 border-r border-app-border hidden sm:flex">
              <div className="w-10 h-10 rounded-xl bg-app-card border border-app-border flex items-center justify-center text-zinc-600 hover:text-gold transition-colors cursor-pointer relative group">
                <MessageSquare size={18} strokeWidth={2.5} />
                <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-gold rounded-full"></span>
              </div>
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-app-card border border-app-border flex items-center justify-center text-zinc-600 hover:text-gold transition-colors cursor-pointer relative group" onClick={() => setShowNotifications(!showNotifications)}>
                  <Bell size={18} strokeWidth={2.5} />
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-gold rounded-full animate-pulse"></span>
                </div>
                
                <AnimatePresence>
                  {showNotifications && (
                    <>
                        <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        className="absolute right-0 mt-6 w-96 bg-app-card rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-app-border z-50 overflow-hidden"
                      >
                        <div className="p-6 border-b border-app-border bg-app-bg/50 flex items-center justify-between">
                          <h4 className="font-black uppercase text-[10px] tracking-[0.3em] text-zinc-400">
                            Notifications
                          </h4>
                          <span 
                            onClick={() => alert("Notification history cleared.")}
                            className="text-[9px] text-gold font-black uppercase tracking-widest hover:underline cursor-pointer"
                          >
                            Clear All
                          </span>
                        </div>
                        <div className="max-h-[400px] overflow-y-auto no-scrollbar">
                          {MOCK_NOTIFICATIONS.map(n => (
                            <div key={n.id} className="flex gap-5 p-5 hover:bg-app-bg/50 transition-colors cursor-pointer group border-b border-app-border/50 last:border-0">
                              <div className={cn(
                                "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-500",
                                n.type === 'success' 
                                  ? 'bg-green-500/5 border-green-500/20 text-green-500 group-hover:bg-green-500 group-hover:text-black' 
                                  : 'bg-gold/5 border-gold/20 text-gold group-hover:bg-gold group-hover:text-black'
                              )}>
                                {n.type === 'success' ? <ShieldCheck size={20} strokeWidth={2.5} /> : <Activity size={20} strokeWidth={2.5} />}
                              </div>
                              <div className="flex-1">
                                <p className="text-xs font-black uppercase tracking-tight text-app-text group-hover:text-gold transition-colors leading-tight">{n.title}</p>
                                <p className="text-[11px] text-zinc-500 mt-1 font-medium leading-relaxed">{n.message}</p>
                                <div className="flex items-center gap-2 mt-3 text-[9px] text-zinc-700 font-black uppercase tracking-widest">
                                  <Shield size={10} />
                                  <span>Verified • {n.time}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="p-4 bg-app-bg text-center">
                           <button className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 hover:text-gold transition-colors" onClick={() => setShowNotifications(false)}>View All Notifications</button>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Entity Status */}
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end hidden lg:flex">
                <div className="flex items-center gap-2">
                  <Globe size={12} className="text-green-500" />
                  <span className="text-[10px] font-black uppercase text-app-text italic tracking-tighter">SECURE_NODE_01</span>
                </div>
                <span className="text-[8px] text-zinc-600 uppercase font-black tracking-widest">Active Connectivity</span>
              </div>

              {/* Avatar & Flag */}
              <div className="flex items-center gap-6 pl-4 border-l border-app-border">
                <button 
                  onClick={toggleTheme}
                  className="w-10 h-10 bg-app-card border border-app-border rounded-xl flex items-center justify-center text-zinc-600 hover:text-gold transition-colors cursor-pointer"
                >
                   {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
                </button>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold p-0.5 flex items-center justify-center overflow-hidden shadow-lg shadow-gold/20">
                    <div className="w-full h-full bg-app-card border border-app-border/10 rounded-[10px] flex items-center justify-center text-gold font-black text-xs italic uppercase">
                      {fullName.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] font-black text-app-text uppercase italic tracking-tighter leading-none">{fullName}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <section className="p-6 lg:p-12 flex-1 relative z-10 overflow-x-hidden bg-app-bg pb-12">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
