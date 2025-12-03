import { motion } from 'motion/react';
import { Car, Menu, X, User, Shield } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: 'home' | 'services' | 'fleet' | 'booking' | 'dashboard' | 'admin') => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
}

export function Navigation({ currentPage, setCurrentPage, isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'fleet', label: 'Fleet' },
    { id: 'booking', label: 'Book Now' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-yellow-600/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setCurrentPage('home')}
          >
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-2 rounded-lg">
              <Car className="size-6 text-black" />
            </div>
            <div>
              <div className="font-bold">ELITE CHAUFFEUR</div>
              <div className="text-xs text-yellow-500">Luxury Transport</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setCurrentPage(item.id as any)}
                className={`relative px-4 py-2 transition-colors ${
                  currentPage === item.id ? 'text-yellow-500' : 'text-gray-300 hover:text-white'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {currentPage === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center gap-3">
            {!isLoggedIn ? (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLoggedIn(true)}
                  className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  Sign In
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLoggedIn(true)}
                  className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg"
                >
                  Sign Up
                </motion.button>
              </>
            ) : (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage('dashboard')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    currentPage === 'dashboard' ? 'bg-yellow-500/20 text-yellow-500' : 'hover:bg-white/10'
                  }`}
                >
                  <User className="size-4" />
                  Dashboard
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setIsAdmin(!isAdmin);
                    if (!isAdmin) setCurrentPage('admin');
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    currentPage === 'admin' ? 'bg-yellow-500/20 text-yellow-500' : 'hover:bg-white/10'
                  }`}
                >
                  <Shield className="size-4" />
                  {isAdmin ? 'Admin' : 'Admin View'}
                </motion.button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id as any);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === item.id ? 'bg-yellow-500/20 text-yellow-500' : 'hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            {isLoggedIn && (
              <>
                <button
                  onClick={() => {
                    setCurrentPage('dashboard');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 rounded-lg hover:bg-white/10"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    setIsAdmin(!isAdmin);
                    setCurrentPage('admin');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 rounded-lg hover:bg-white/10"
                >
                  Admin Panel
                </button>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
