import { motion } from 'motion/react';
import { Users, Briefcase, Luggage, Sparkles, Leaf } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FleetProps {
  fullPage?: boolean;
  setCurrentPage: (page: 'booking') => void;
}

export function Fleet({ fullPage = false, setCurrentPage }: FleetProps) {
  const vehicles = [
    {
      name: 'BMW 7 Series',
      category: 'Business Class',
      image: 'https://images.unsplash.com/photo-1731142582229-e0ee70302c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBsdXh1cnklMjBzZWRhbnxlbnwxfHx8fDE3NjQ2MzE0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      passengers: 3,
      luggage: 3,
      description: 'Premium sedan with executive comfort and cutting-edge technology.',
      features: ['Leather seats', 'Climate control', 'WiFi', 'Premium sound'],
      price: '$120',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      name: 'Mercedes S-Class',
      category: 'First Class',
      image: 'https://images.unsplash.com/photo-1680446670454-8cd71eeef684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNZXJjZWRlcyUyMFMtQ2xhc3MlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ2OTk5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      passengers: 3,
      luggage: 3,
      description: 'Ultimate luxury sedan with unparalleled refinement and sophistication.',
      features: ['Massage seats', 'Champagne bar', 'Privacy glass', 'Executive rear'],
      price: '$180',
      gradient: 'from-purple-600 to-purple-700',
      featured: true,
    },
    {
      name: 'BMW X7',
      category: 'Luxury SUV',
      image: 'https://images.unsplash.com/photo-1747414632749-6c8b14ba30fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBTVVYlMjBjYXJ8ZW58MXx8fHwxNzY0Njk5OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      passengers: 6,
      luggage: 6,
      description: 'Spacious luxury SUV perfect for group travel and extra luggage.',
      features: ['Panoramic roof', '7 seats', 'All-weather', 'Premium space'],
      price: '$150',
      gradient: 'from-yellow-600 to-yellow-700',
    },
    {
      name: 'Mercedes V-Class',
      category: 'Business Van',
      image: 'https://images.unsplash.com/photo-1661220715153-95724e5f3500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2YW4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ2NDA3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      passengers: 7,
      luggage: 8,
      description: 'Premium van for larger groups with maximum comfort and space.',
      features: ['Conference seating', 'USB charging', 'Extra space', 'Group comfort'],
      price: '$160',
      gradient: 'from-green-600 to-green-700',
    },
    {
      name: 'BMW i7 Electric',
      category: 'Eco-Luxury',
      image: 'https://images.unsplash.com/photo-1764089859662-7b4773dff85b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBjYXIlMjBzZXJ2aWNlfGVufDF8fHx8MTc2NDY5OTk3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      passengers: 4,
      luggage: 3,
      description: 'Zero-emission luxury electric vehicle with cutting-edge technology.',
      features: ['100% Electric', 'Silent ride', 'Eco-friendly', 'Future tech'],
      price: '$140',
      gradient: 'from-teal-600 to-teal-700',
      eco: true,
    },
    {
      name: 'Executive Sedan',
      category: 'Corporate Fleet',
      image: 'https://images.unsplash.com/photo-1607642857266-88f5f03e66c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF1ZmZldXIlMjBkcml2ZXJ8ZW58MXx8fHwxNzY0Njk5OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      passengers: 3,
      luggage: 2,
      description: 'Professional chauffeur service for corporate and business travel.',
      features: ['Professional driver', 'Business amenities', 'Punctuality', 'Discretion'],
      price: '$110',
      gradient: 'from-gray-600 to-gray-700',
    },
  ];

  return (
    <section className={`${fullPage ? 'min-h-screen pt-32' : 'py-20'} px-4 bg-gradient-to-b from-transparent to-black/50`}>
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
            <span className="text-yellow-500">Our Fleet</span>
          </motion.div>
          <h2 className="mb-4">
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Premium Vehicle Selection
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our meticulously maintained fleet of luxury vehicles, 
            each offering the perfect blend of comfort, style, and performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Featured Badge */}
              {vehicle.featured && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 z-10 px-3 py-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-full flex items-center gap-1"
                >
                  <Sparkles className="size-3" />
                  <span className="text-xs">Featured</span>
                </motion.div>
              )}

              {/* Eco Badge */}
              {vehicle.eco && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 z-10 px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full flex items-center gap-1"
                >
                  <Leaf className="size-3" />
                  <span className="text-xs">Eco</span>
                </motion.div>
              )}

              <motion.div
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-yellow-500/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${vehicle.gradient} rounded-full text-white text-sm`}>
                    {vehicle.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2">{vehicle.name}</h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {vehicle.description}
                  </p>

                  {/* Specs */}
                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Users className="size-4" />
                      <span className="text-sm">{vehicle.passengers}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Luggage className="size-4" />
                      <span className="text-sm">{vehicle.luggage}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Briefcase className="size-4" />
                      <span className="text-sm">Premium</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-xs text-gray-400">
                        <div className="w-1 h-1 bg-yellow-500 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Price & Book */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-400 text-sm">From</span>
                      <div className="text-yellow-500">
                        {vehicle.price}
                        <span className="text-gray-400 text-sm">/hour</span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentPage('booking')}
                      className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg text-sm"
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(234, 179, 8, 0.1) 0%, transparent 70%)',
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
