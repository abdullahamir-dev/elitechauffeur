import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, Clock, Car, Gift, CreditCard, ArrowRight, ArrowLeft, Check } from 'lucide-react';

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    vehicleClass: '',
    extras: [] as string[],
  });

  const serviceTypes = [
    { id: 'oneway', label: 'One-Way Transfer', description: 'Point A to Point B' },
    { id: 'hourly', label: 'Hourly Hire', description: 'Chauffeur on standby' },
    { id: 'airport', label: 'Airport Transfer', description: 'With flight tracking' },
    { id: 'cityto', label: 'City-to-City', description: 'Long distance travel' },
    { id: 'ondemand', label: 'On-Demand', description: 'Instant booking' },
  ];

  const vehicleClasses = [
    { id: 'business', name: 'Business Class', price: 120, desc: 'Premium sedans' },
    { id: 'first', name: 'First Class', price: 180, desc: 'Luxury sedans' },
    { id: 'suv', name: 'SUV / Van', price: 150, desc: 'Group travel' },
    { id: 'electric', name: 'Electric', price: 140, desc: 'Eco-friendly' },
  ];

  const extras = [
    { id: 'meetgreet', label: 'Meet & Greet', price: 25 },
    { id: 'luggage', label: 'Luggage Assistance', price: 15 },
    { id: 'refreshments', label: 'Premium Refreshments', price: 30 },
    { id: 'wifi', label: 'Mobile WiFi', price: 10 },
    { id: 'child', label: 'Child Seat', price: 20 },
  ];

  const steps = [
    { number: 1, title: 'Service Type', icon: Car },
    { number: 2, title: 'Location & Time', icon: MapPin },
    { number: 3, title: 'Vehicle Class', icon: Car },
    { number: 4, title: 'Extras & Payment', icon: Gift },
  ];

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleExtra = (extraId: string) => {
    setFormData({
      ...formData,
      extras: formData.extras.includes(extraId)
        ? formData.extras.filter(e => e !== extraId)
        : [...formData.extras, extraId]
    });
  };

  const calculateTotal = () => {
    const vehiclePrice = vehicleClasses.find(v => v.id === formData.vehicleClass)?.price || 0;
    const extrasPrice = formData.extras.reduce((sum, extraId) => {
      const extra = extras.find(e => e.id === extraId);
      return sum + (extra?.price || 0);
    }, 0);
    return vehiclePrice + extrasPrice;
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Book Your Luxury Ride
            </span>
          </h2>
          <p className="text-gray-400">Complete your booking in just a few simple steps</p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {steps.map((s, index) => (
              <div key={s.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      step >= s.number
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black'
                        : 'bg-white/10 text-gray-400'
                    }`}
                  >
                    {step > s.number ? (
                      <Check className="size-6" />
                    ) : (
                      <s.icon className="size-6" />
                    )}
                  </motion.div>
                  <span className={`text-sm ${step >= s.number ? 'text-yellow-500' : 'text-gray-400'}`}>
                    {s.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`h-0.5 flex-1 mx-2 ${
                    step > s.number ? 'bg-yellow-500' : 'bg-white/10'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <AnimatePresence mode="wait">
            {/* Step 1: Service Type */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="mb-6">Select Your Service Type</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {serviceTypes.map((service) => (
                    <motion.button
                      key={service.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData({ ...formData, serviceType: service.id })}
                      className={`p-6 rounded-xl border-2 text-left transition-all ${
                        formData.serviceType === service.id
                          ? 'border-yellow-500 bg-yellow-500/10'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <div className="mb-2">{service.label}</div>
                      <p className="text-sm text-gray-400">{service.description}</p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Location & Time */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="mb-6">Location & Schedule</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Pickup Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.pickupLocation}
                        onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                        placeholder="Enter pickup address"
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Drop-off Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.dropoffLocation}
                        onChange={(e) => setFormData({ ...formData, dropoffLocation: e.target.value })}
                        placeholder="Enter drop-off address"
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Time</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                        <input
                          type="time"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Vehicle Class */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="mb-6">Choose Your Vehicle Class</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {vehicleClasses.map((vehicle) => (
                    <motion.button
                      key={vehicle.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData({ ...formData, vehicleClass: vehicle.id })}
                      className={`p-6 rounded-xl border-2 text-left transition-all ${
                        formData.vehicleClass === vehicle.id
                          ? 'border-yellow-500 bg-yellow-500/10'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="mb-1">{vehicle.name}</div>
                          <p className="text-sm text-gray-400">{vehicle.desc}</p>
                        </div>
                        <div className="text-yellow-500">
                          ${vehicle.price}
                          <span className="text-xs text-gray-400">/hr</span>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Extras & Payment */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="mb-6">Add Extras & Complete Payment</h3>
                
                <div className="mb-8">
                  <h4 className="mb-4 text-gray-400">Optional Extras</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {extras.map((extra) => (
                      <motion.button
                        key={extra.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => toggleExtra(extra.id)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          formData.extras.includes(extra.id)
                            ? 'border-yellow-500 bg-yellow-500/10'
                            : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{extra.label}</span>
                          <span className="text-yellow-500">+${extra.price}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">Estimated Total</span>
                    <span className="text-yellow-500">${calculateTotal()}</span>
                  </div>
                  <p className="text-xs text-gray-400">All-inclusive pricing (taxes, tolls, gratuity)</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-gray-400">Payment Information</h4>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Card Number</label>
                    <div className="relative">
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Expiry</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-yellow-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevStep}
              disabled={step === 1}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
                step === 1
                  ? 'opacity-50 cursor-not-allowed bg-white/5'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <ArrowLeft className="size-5" />
              Back
            </motion.button>

            {step < 4 ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextStep}
                className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg flex items-center gap-2"
              >
                Next
                <ArrowRight className="size-5" />
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg flex items-center gap-2"
              >
                <Check className="size-5" />
                Confirm Booking
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
