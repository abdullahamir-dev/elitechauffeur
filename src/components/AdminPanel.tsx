import { motion } from 'motion/react';
import { Car, Users, Calendar, DollarSign, Plus, Edit, Trash2, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AdminPanel() {
  const fleetData = [
    {
      id: 'V001',
      name: 'BMW 7 Series',
      class: 'Business',
      plate: 'NY-1234',
      status: 'available',
      image: 'https://images.unsplash.com/photo-1731142582229-e0ee70302c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBsdXh1cnklMjBzZWRhbnxlbnwxfHx8fDE3NjQ2MzE0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'V002',
      name: 'Mercedes S-Class',
      class: 'First',
      plate: 'NY-5678',
      status: 'on-trip',
      image: 'https://images.unsplash.com/photo-1680446670454-8cd71eeef684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNZXJjZWRlcyUyMFMtQ2xhc3MlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ2OTk5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'V003',
      name: 'BMW X7',
      class: 'SUV',
      plate: 'NY-9012',
      status: 'maintenance',
      image: 'https://images.unsplash.com/photo-1747414632749-6c8b14ba30fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBTVVYlMjBjYXJ8ZW58MXx8fHwxNzY0Njk5OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const drivers = [
    { id: 'D001', name: 'James Wilson', rating: 4.9, trips: 234, status: 'active' },
    { id: 'D002', name: 'Michael Brown', rating: 4.8, trips: 189, status: 'on-trip' },
    { id: 'D003', name: 'Robert Davis', rating: 5.0, trips: 312, status: 'active' },
  ];

  const recentBookings = [
    { id: 'BK201', customer: 'John Smith', vehicle: 'BMW 7 Series', amount: 145, status: 'confirmed' },
    { id: 'BK202', customer: 'Sarah Johnson', vehicle: 'Mercedes S-Class', amount: 280, status: 'in-progress' },
    { id: 'BK203', customer: 'David Lee', vehicle: 'BMW X7', amount: 190, status: 'completed' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
      case 'active':
      case 'confirmed':
        return 'text-green-500 bg-green-500/20';
      case 'on-trip':
      case 'in-progress':
        return 'text-yellow-500 bg-yellow-500/20';
      case 'maintenance':
        return 'text-red-500 bg-red-500/20';
      case 'completed':
        return 'text-blue-500 bg-blue-500/20';
      default:
        return 'text-gray-500 bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="mb-2">
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Admin Panel
            </span>
          </h2>
          <p className="text-gray-400">Manage your fleet, drivers, and bookings</p>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Revenue', value: '$42.5K', change: '+12.5%', icon: DollarSign, gradient: 'from-green-500 to-green-600' },
            { label: 'Active Bookings', value: '24', change: '+8', icon: Calendar, gradient: 'from-yellow-500 to-yellow-600' },
            { label: 'Fleet Size', value: '18', change: '+2', icon: Car, gradient: 'from-blue-500 to-blue-600' },
            { label: 'Active Drivers', value: '15', change: '+3', icon: Users, gradient: 'from-purple-500 to-purple-600' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            >
              <div className={`inline-flex p-3 bg-gradient-to-br ${stat.gradient} rounded-xl mb-4`}>
                <stat.icon className="size-6 text-white" />
              </div>
              <div className="text-gray-400 mb-1">{stat.label}</div>
              <div className="flex items-end gap-2">
                <div className="text-2xl">{stat.value}</div>
                <div className="text-green-500 text-sm mb-1">{stat.change}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fleet Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h3>Fleet Management</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg flex items-center gap-2"
            >
              <Plus className="size-4" />
              Add Vehicle
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fleetData.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-500/30 transition-all"
              >
                <div className="relative h-40">
                  <ImageWithFallback
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs ${getStatusColor(vehicle.status)}`}>
                    {vehicle.status}
                  </div>
                </div>

                <div className="p-4">
                  <div className="mb-2">{vehicle.name}</div>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{vehicle.class} Class</span>
                    <span>{vehicle.plate}</span>
                  </div>

                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      <Eye className="size-4" />
                      View
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      <Edit className="size-4" />
                      Edit
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-2 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500/30 transition-colors"
                    >
                      <Trash2 className="size-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Drivers & Bookings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Drivers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3>Active Drivers</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
              >
                <Plus className="size-4 inline mr-2" />
                Add Driver
              </motion.button>
            </div>

            <div className="space-y-3">
              {drivers.map((driver, index) => (
                <motion.div
                  key={driver.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-yellow-500/30 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="mb-1">{driver.name}</div>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <span>⭐ {driver.rating}</span>
                        <span>•</span>
                        <span>{driver.trips} trips</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs ${getStatusColor(driver.status)}`}>
                      {driver.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Bookings */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3>Recent Bookings</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
              >
                View All
              </motion.button>
            </div>

            <div className="space-y-3">
              {recentBookings.map((booking, index) => (
                <motion.div
                  key={booking.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-yellow-500/30 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="mb-1">{booking.customer}</div>
                      <div className="text-sm text-gray-400">{booking.vehicle}</div>
                    </div>
                    <div className="text-yellow-500 text-xl">${booking.amount}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">#{booking.id}</span>
                    <div className={`px-3 py-1 rounded-full text-xs ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
