import {type ClassValue, clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const DUMMY_USER = {
  id: 'u1',
  fullName: 'Alexander Sterling',
  email: 'sterling@trustnova.com',
  accountNumber: '5021938476',
  balance: 145820.50,
  status: 'Active',
  createdAt: '2024-01-15'
};

export const MOCK_NOTIFICATIONS = [
  { id: 1, title: 'Deposit Approved', message: 'Your $5,000 deposit has been confirmed.', type: 'success', time: '2h ago' },
  { id: 2, title: 'Security Alert', message: 'New login from London, UK.', type: 'warning', time: '5h ago' },
];

export const MOCK_TRANSACTIONS = [
  { id: 'tx1', type: 'Deposit', amount: 5000, status: 'Approved', date: '2024-04-25', description: 'Wire Transfer' },
  { id: 'tx2', type: 'Withdrawal', amount: 1200, status: 'Pending', date: '2024-04-27', description: 'ATM Withdrawal' },
  { id: 'tx3', type: 'Transfer', amount: 450, status: 'Rejected', date: '2024-04-20', description: 'To: Sarah West' },
  { id: 'tx4', type: 'Deposit', amount: 10000, status: 'Approved', date: '2024-04-10', description: 'Salary Bonus' },
];
