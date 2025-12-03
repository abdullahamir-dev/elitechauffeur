import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Fleet } from './components/Fleet';
import { BookingForm } from './components/BookingForm';
import { UserDashboard } from './components/UserDashboard';
import { AdminPanel } from './components/AdminPanel';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'fleet' | 'booking' | 'dashboard' | 'admin'>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />
      
      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <motion.div
            key="home"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <Hero setCurrentPage={setCurrentPage} />
            <Services />
            <Fleet setCurrentPage={setCurrentPage} />
          </motion.div>
        )}

        {currentPage === 'services' && (
          <motion.div
            key="services"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <Services fullPage />
          </motion.div>
        )}

        {currentPage === 'fleet' && (
          <motion.div
            key="fleet"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <Fleet fullPage setCurrentPage={setCurrentPage} />
          </motion.div>
        )}

        {currentPage === 'booking' && (
          <motion.div
            key="booking"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <BookingForm />
          </motion.div>
        )}

        {currentPage === 'dashboard' && (
          <motion.div
            key="dashboard"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <UserDashboard />
          </motion.div>
        )}

        {currentPage === 'admin' && (
          <motion.div
            key="admin"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <AdminPanel />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
