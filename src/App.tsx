/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import LandingPage from '@/src/pages/LandingPage';
import Features from '@/src/pages/Features';
import CardsPage from '@/src/pages/CardsPage';
import Security from '@/src/pages/Security';
import About from '@/src/pages/About';
import Contact from '@/src/pages/Contact';
import Login from '@/src/pages/auth/Login';
import Register from '@/src/pages/auth/Register';
import DashboardLayout from '@/src/components/dashboard/DashboardLayout';
import DashboardHome from '@/src/pages/dashboard/DashboardHome';
import Deposit from '@/src/pages/dashboard/Deposit';
import Withdraw from '@/src/pages/dashboard/Withdraw';
import Transfer from '@/src/pages/dashboard/Transfer';
import Transactions from '@/src/pages/dashboard/Transactions';
import Cards from '@/src/pages/dashboard/Cards';
import Help from '@/src/pages/dashboard/Help';
import Settings from '@/src/pages/dashboard/Settings';
import Accounts from '@/src/pages/dashboard/Accounts';
import Notifications from '@/src/pages/dashboard/Notifications';
import Verification from '@/src/pages/dashboard/Verification';
import SecurityDashboard from '@/src/pages/dashboard/Security';

export default function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/security" element={<Security />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="accounts" element={<Accounts />} />
            <Route path="deposit" element={<Deposit />} />
            <Route path="transfer" element={<Transfer />} />
            <Route path="withdraw" element={<Withdraw />} />
            <Route path="cards" element={<Cards />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="verification" element={<Verification />} />
            <Route path="security" element={<SecurityDashboard />} />
            <Route path="settings" element={<Settings />} />
            <Route path="help" element={<Help />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}
