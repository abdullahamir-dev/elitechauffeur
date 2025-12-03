import { motion } from 'motion/react';
import { Plane, Clock, Navigation, MapPin, Zap } from 'lucide-react';

interface ServicesProps {
  fullPage?: boolean;
}

export function Services({ fullPage = false }: ServicesProps) {
  const services = [
    {
      icon: Navigation,
      title: 'One-Way Transfers',
      description: 'Premium point-to-point transportation service with professional chauffeurs.',
      features: ['Door-to-door service', 'Real-time tracking', 'Fixed pricing'],
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Clock,
      title: 'Hourly / Full-Day Hire',
      description: 'Chauffeur on standby for events, business meetings, or city exploration.',
      features: ['Flexible timing', 'Multiple stops', 'Dedicated chauffeur'],
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: Plane,
      title: 'Airport Transfers',
      description: 'Seamless airport pickup and drop-off with flight tracking and meet & greet.',
      features: ['Flight tracking', 'Waiting time included', 'Luggage assistance'],
      gradient: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: MapPin,
      title: 'City-to-City Rides',
      description: 'Long-distance luxury travel between cities with comfort and style.',
      features: ['Long-distance comfort', 'Route optimization', 'Refreshments included'],
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: Zap,
      title: 'On-Demand Service',
      description: 'Instant luxury ride booking available in select cities for immediate travel.',
      features: ['Instant booking', 'Quick dispatch', 'Premium vehicles'],
      gradient: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section className={`${fullPage ? 'min-h-screen pt-32' : 'py-20'} px-4`}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full"
          >
            <span className="text-yellow-500">Our Services</span>
          </motion.div>
          <h2 className="mb-4">
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Tailored Transportation Solutions
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our comprehensive range of luxury transportation services designed 
            to meet every travel need with elegance and efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-yellow-500/50 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-xl mb-6`}
                >
                  <service.icon className="size-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.1 }}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    background: `linear-gradient(135deg, transparent 0%, ${service.gradient.includes('yellow') ? 'rgba(234, 179, 8, 0.1)' : 'rgba(255, 255, 255, 0.05)'} 100%)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {!fullPage && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg"
            >
              View All Services
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
