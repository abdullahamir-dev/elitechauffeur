import { motion } from 'motion/react';
import { Calendar, MapPin, Car, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export function UserDashboard() {
  const userBookings = [
    {
      id: 'BK001',
      status: 'upcoming',
      service: 'Airport Transfer',
      vehicle: 'BMW 7 Series',
      date: '2025-12-05',
      time: '10:00 AM',
      pickup: 'JFK Airport Terminal 4',
      dropoff: 'Manhattan Hotel',
      price: 145,
    },
    {
      id: 'BK002',
      status: 'completed',
      service: 'Hourly Hire',
      vehicle: 'Mercedes S-Class',
      date: '2025-11-28',
      time: '2:00 PM',
      pickup: 'Corporate Office',
      dropoff: 'Multiple Locations',
      price: 360,
    },
    {
      id: 'BK003',
      status: 'upcoming',
      service: 'City-to-City',
      vehicle: 'BMW X7',
      date: '2025-12-10',
      time: '8:00 AM',
      pickup: 'New York',
      dropoff: 'Boston',
      price: 450,
    },
    {
      id: 'BK004',
      status: 'cancelled',
      service: 'One-Way Transfer',
      vehicle: 'Mercedes V-Class',
      date: '2025-11-20',
      time: '6:00 PM',
      pickup: 'City Center',
      dropoff: 'Airport',
      price: 120,
    },
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'upcoming':
        return {
          icon: AlertCircle,
          color: 'text-yellow-500',
          bg: 'bg-yellow-500/20',
          border: 'border-yellow-500/30',
          label: 'Upcoming',
        };
      case 'completed':
        return {
          icon: CheckCircle,
          color: 'text-green-500',
          bg: 'bg-green-500/20',
          border: 'border-green-500/30',
          label: 'Completed',
        };
      case 'cancelled':
        return {
          icon: XCircle,
          color: 'text-red-500',
          bg: 'bg-red-500/20',
          border: 'border-red-500/30',
          label: 'Cancelled',
        };
      default:
        return {
          icon: Clock,
          color: 'text-gray-500',
          bg: 'bg-gray-500/20',
          border: 'border-gray-500/30',
          label: 'Unknown',
        };
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="mb-2">
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              My Dashboard
            </span>
          </h2>
          <p className="text-gray-400">Manage your bookings and account details</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Rides', value: '24', icon: Car, gradient: 'from-blue-500 to-blue-600' },
            { label: 'Upcoming', value: '2', icon: Calendar, gradient: 'from-yellow-500 to-yellow-600' },
            { label: 'Completed', value: '20', icon: CheckCircle, gradient: 'from-green-500 to-green-600' },
            { label: 'Total Spent', value: '$4.2K', icon: AlertCircle, gradient: 'from-purple-500 to-purple-600' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            >
              <div className={`inline-flex p-3 bg-gradient-to-br ${stat.gradient} rounded-xl mb-4`}>
                <stat.icon className="size-6 text-white" />
              </div>
              <div className="text-gray-400 mb-1">{stat.label}</div>
              <div className="text-2xl">{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Bookings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="mb-6">My Bookings</h3>
          <div className="space-y-4">
            {userBookings.map((booking, index) => {
              const statusConfig = getStatusConfig(booking.status);
              const StatusIcon = statusConfig.icon;

              return (
                <motion.div
                  key={booking.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-yellow-500/30 transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* Left Section */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-gray-400 text-sm">#{booking.id}</span>
                        <div className={`flex items-center gap-2 px-3 py-1 ${statusConfig.bg} border ${statusConfig.border} rounded-full`}>
                          <StatusIcon className={`size-4 ${statusConfig.color}`} />
                          <span className={`text-sm ${statusConfig.color}`}>{statusConfig.label}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <div className="flex items-center gap-2 text-gray-400 mb-2">
                            <Car className="size-4" />
                            <span className="text-sm">Service & Vehicle</span>
                          </div>
                          <div className="mb-1">{booking.service}</div>
                          <div className="text-sm text-gray-400">{booking.vehicle}</div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 text-gray-400 mb-2">
                            <Calendar className="size-4" />
                            <span className="text-sm">Date & Time</span>
                          </div>
                          <div className="mb-1">{booking.date}</div>
                          <div className="text-sm text-gray-400">{booking.time}</div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 text-gray-400 mb-2">
                            <MapPin className="size-4" />
                            <span className="text-sm">Pickup</span>
                          </div>
                          <div className="text-sm">{booking.pickup}</div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 text-gray-400 mb-2">
                            <MapPin className="size-4" />
                            <span className="text-sm">Drop-off</span>
                          </div>
                          <div className="text-sm">{booking.dropoff}</div>
                        </div>
                      </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col items-end gap-3">
                      <div className="text-yellow-500 text-2xl">${booking.price}</div>
                      
                      {booking.status === 'upcoming' && (
                        <div className="flex gap-2">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
                          >
                            Modify
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500/30 transition-colors text-sm"
                          >
                            Cancel
                          </motion.button>
                        </div>
                      )}

                      {booking.status === 'completed' && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-yellow-500/20 text-yellow-500 rounded-lg hover:bg-yellow-500/30 transition-colors text-sm"
                        >
                          Rebook
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
