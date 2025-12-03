import { motion } from 'motion/react';
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: 'home' | 'services' | 'fleet' | 'booking') => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const footerLinks = {
    services: [
      'One-Way Transfers',
      'Hourly Hire',
      'Airport Transfers',
      'City-to-City',
      'On-Demand Service',
    ],
    company: [
      'About Us',
      'Our Fleet',
      'Chauffeurs',
      'Careers',
      'Press',
    ],
    support: [
      'Contact Us',
      'FAQs',
      'Terms & Conditions',
      'Privacy Policy',
      'Cancellation Policy',
    ],
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-6 cursor-pointer"
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

            <p className="text-gray-400 mb-6">
              Experience premium chauffeur services with our fleet of luxury vehicles. 
              We deliver excellence in every journey, 24/7 worldwide.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="size-4 text-yellow-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="size-4 text-yellow-500" />
                <span>info@elitechauffeur.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="size-4 text-yellow-500" />
                <span>New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => setCurrentPage('services')}
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-left"
                  >
                    {link}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => setCurrentPage('home')}
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-left"
                  >
                    {link}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-left"
                  >
                    {link}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-white/10">
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/5 rounded-lg hover:bg-yellow-500/20 transition-colors group"
                aria-label={social.label}
              >
                <social.icon className="size-5 text-gray-400 group-hover:text-yellow-500 transition-colors" />
              </motion.a>
            ))}
          </div>

          <div className="text-gray-400 text-sm">
            © 2025 Elite Chauffeur. All rights reserved.
          </div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </footer>
  );
}
