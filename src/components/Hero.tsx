import { motion } from 'motion/react';
import { ArrowRight, Clock, Shield, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  setCurrentPage: (page: 'booking') => void;
}

export function Hero({ setCurrentPage }: HeroProps) {
  const features = [
    { icon: Clock, text: '24/7 Service' },
    { icon: Shield, text: 'Licensed Chauffeurs' },
    { icon: Star, text: 'Premium Vehicles' },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <video
          src="../../assets/cars_video.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          // optional: place an image in assets and use it here
          // poster="../../assets/cars_fallback.jpg"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />

        {/* Animated overlay elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-block mb-6 px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-yellow-500">Premium Chauffeur Service</span>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <span className="block text-gray-400">Experience Luxury in</span>
            <span className="block bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Every Journey
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8 text-gray-300 max-w-2xl"
          >
            Travel in style with our fleet of premium vehicles and professional chauffeurs.
            From airport transfers to special events, we deliver excellence in every ride.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(234, 179, 8, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('booking')}
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg flex items-center gap-2 group"
            >
              Book Your Ride
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
            >
              View Fleet
            </motion.button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex items-center gap-3"
              >
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                  <feature.icon className="size-5 text-yellow-500" />
                </div>
                <span className="text-gray-300">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-yellow-500/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-yellow-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}
