import { create } from 'zustand';

interface Transaction {
  id: string;
  type: 'Deposit' | 'Withdraw' | 'Transfer' | 'Payment';
  amount: number;
  status: 'Approved' | 'Pending' | 'Rejected';
  date: string;
  description: string;
  recipient?: string;
  method?: string;
}

interface Card {
  id: string;
  name: string;
  number: string;
  expiry: string;
  type: 'Virtual' | 'Sovereign' | 'Elite';
  status: 'active' | 'frozen' | 'pending';
  balance: number;
}

interface UserState {
  balance: number;
  fullName: string;
  tier: string;
  transactions: Transaction[];
  cards: Card[];
  theme: 'dark' | 'light';
  
  deposit: (amount: number, method: string, status?: Transaction['status']) => void;
  withdraw: (amount: number, method: string, address: string) => void;
  transfer: (amount: number, recipient: string) => void;
  orderCard: (type: Card['type'], name: string) => void;
  toggleTheme: () => void;
}

export const useStore = create<UserState>((set) => ({
  balance: 1420500.85,
  fullName: "Alexander Sokolov",
  tier: "Premium Elite",
  theme: 'dark',
  transactions: [
    { id: 'TX-9921', type: 'Transfer', amount: 45000, status: 'Approved', date: '2 hours ago', description: 'Transfer to Zurich Node', recipient: 'CH-NODE-12' },
    { id: 'TX-9920', type: 'Deposit', amount: 120500, status: 'Approved', date: '5 hours ago', description: 'Deposit via BTC Protocol', method: 'BTC Protocol' },
    { id: 'TX-9919', type: 'Withdraw', amount: 12000, status: 'Pending', date: '1 day ago', description: 'Withdrawal to External Wallet', method: 'Wire Transfer' },
  ],
  cards: [
    { id: 'C1', name: 'Elite Sovereign', number: '8821', expiry: '12/26', type: 'Elite', status: 'active', balance: 50000 },
    { id: 'C2', name: 'Virtual Shadow', number: '1044', expiry: '08/25', type: 'Virtual', status: 'active', balance: 5000 },
  ],

  deposit: (amount, method, status = 'Pending') => set((state) => ({
    balance: status === 'Approved' ? state.balance + amount : state.balance,
    transactions: [
      { id: `TX-${Math.floor(Math.random() * 10000)}`, type: 'Deposit', amount, status, date: 'Just now', description: `Deposit via ${method}`, method },
      ...state.transactions
    ]
  })),

  withdraw: (amount, method, address) => set((state) => ({
    balance: state.balance - amount,
    transactions: [
      { id: `TX-${Math.floor(Math.random() * 10000)}`, type: 'Withdraw', amount, status: 'Pending', date: 'Just now', description: `Asset extraction to ${address}`, method },
      ...state.transactions
    ]
  })),

  transfer: (amount, recipient) => set((state) => ({
    balance: state.balance - amount,
    transactions: [
      { id: `TX-${Math.floor(Math.random() * 10000)}`, type: 'Transfer', amount, status: 'Approved', date: 'Just now', description: `Sovereign transfer to ${recipient}`, recipient },
      ...state.transactions
    ]
  })),

  orderCard: (type, name) => set((state) => ({
    cards: [
      ...state.cards,
      { 
        id: `C${state.cards.length + 1}`, 
        name, 
        number: Math.floor(1000 + Math.random() * 9000).toString(), 
        expiry: '12/28', 
        type, 
        status: 'pending', 
        balance: 0 
      }
    ]
  })),

  toggleTheme: () => set((state) => {
    const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    return { theme: nextTheme };
  }),
}));
