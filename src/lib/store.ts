import { create } from 'zustand';

interface Transaction {
  id: string;
  type: 'Deposit' | 'Withdraw' | 'Transfer' | 'Payment' | 'Wire' | 'Zelle' | 'Bill' | 'Donation';
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
  type: 'Virtual' | 'Sovereign' | 'Elite' | 'Physical';
  status: 'active' | 'frozen' | 'pending';
  balance: number;
}

interface Account {
  id: string;
  name: string;
  number: string;
  type: 'Savings' | 'Checking' | 'Credit';
  balance: number;
  status: 'Active' | 'Pending';
}

interface UserState {
  balance: number;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  accountNumber: string;
  memberSince: string;
  currency: string;
  accountType: string;
  occupation: string;
  country: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  dob: string;
  profilePic: string | null;
  pin: string;
  tier: string;
  cardActivation: {
    [key: number]: {
      status: 'idle' | 'pending' | 'active';
      requestedAt: number | null;
      depositAmount: number;
    }
  };
  transactions: Transaction[];
  cards: Card[];
  accounts: Account[];
  theme: 'dark' | 'light';
  isAuthenticated: boolean;
  isPinVerified: boolean;
  
  setAuthenticated: (status: boolean) => void;
  setPinVerified: (status: boolean) => void;
  deposit: (amount: number, method: string, status?: Transaction['status']) => void;
  withdraw: (amount: number, method: string, address: string) => void;
  transfer: (amount: number, recipient: string, type?: Transaction['type']) => void;
  orderCard: (type: Card['type'], name: string) => void;
  toggleCardStatus: (cardId: string) => void;
  toggleTheme: () => void;
  updateUser: (data: Partial<UserState>) => void;
  updateCardActivation: (cardIdx: number, data: Partial<UserState['cardActivation'][number]>) => void;
  logout: () => void;
}

export const useStore = create<UserState>((set) => ({
  balance: 0.00,
  fullName: "Henry David",
  firstName: "Henry",
  lastName: "David",
  email: "henrydavid1602@gmail.com",
  phone: "",
  username: "henrydavid",
  accountNumber: "9909219487",
  memberSince: "May 2026",
  currency: "USD",
  accountType: "Savings/Checking",
  occupation: "Sovereign Node Operator",
  country: "United States",
  address: "123 Sovereign Way",
  city: "London",
  state: "Greater London",
  zip: "EC1A 1BB",
  dob: "1990-01-01",
  profilePic: null,
  pin: "0000",
  tier: "Member",
  theme: 'dark',
  isAuthenticated: false,
  isPinVerified: false,
  cardActivation: {
    0: { status: 'idle', requestedAt: null, depositAmount: 500 },
    1: { status: 'idle', requestedAt: null, depositAmount: 700 },
    2: { status: 'idle', requestedAt: null, depositAmount: 900 },
    3: { status: 'idle', requestedAt: null, depositAmount: 1200 },
  },
  transactions: [],
  cards: [],
  accounts: [
    { id: 'acc1', name: '360 Checking', number: '1424', type: 'Checking', balance: 0.00, status: 'Active' },
    { id: 'acc2', name: '360 Checking', number: '6065', type: 'Checking', balance: 0.00, status: 'Active' },
    { id: 'acc3', name: '360 Performance Savings', number: '7821', type: 'Savings', balance: 0.00, status: 'Active' },
    { id: 'acc4', name: 'QUICKSILVER Credit', number: '4432', type: 'Credit', balance: 0.00, status: 'Active' },
  ],

  setAuthenticated: (status) => set({ isAuthenticated: status }),
  setPinVerified: (status) => set({ isPinVerified: status }),
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
      { id: `TX-${Math.floor(Math.random() * 10000)}`, type: 'Withdraw', amount, status: 'Pending', date: 'Just now', description: `Withdrawal to ${address}`, method },
      ...state.transactions
    ]
  })),

  transfer: (amount, recipient, type = 'Transfer') => set((state) => ({
    balance: state.balance - amount,
    transactions: [
      { id: `TX-${Math.floor(Math.random() * 10000)}`, type, amount, status: 'Approved', date: 'Just now', description: `${type} to ${recipient}`, recipient },
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

  toggleCardStatus: (cardId) => set((state) => ({
    cards: state.cards.map(c => 
      c.id === cardId 
        ? { ...c, status: c.status === 'active' ? 'frozen' : 'pending' } 
        : c
    )
  })),

  updateUser: (data) => set((state) => ({ ...state, ...data })),
  updateCardActivation: (cardIdx, data) => set((state) => ({
    cardActivation: {
      ...state.cardActivation,
      [cardIdx]: { ...state.cardActivation[cardIdx], ...data }
    }
  })),
  logout: () => {
    window.location.href = '/auth/login';
  },
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
