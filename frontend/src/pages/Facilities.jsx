import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wifi, Shield, Sparkles, Droplet, 
  Home, Users, Coffee, Bell, Heart, 
  Calendar, ChefHat, Clock, Zap, Wind,
  Sun, Moon, Award, Star, CheckCircle,
  Thermometer, Utensils, Lock, Camera,
  Phone, Trash2, Leaf, Coffee as CoffeeIcon,
  Bed, Key, Brush, Wifi as WifiIcon,
  Droplets, Zap as ZapIcon
} from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      category: 'Kitchen & Dining',
      icon: <Utensils size={24} />,
      color: 'from-orange-500 to-amber-500',
      items: [
        {
          icon: <ChefHat size={28} />,
          title: 'Modular Kitchen',
          description: 'Fully equipped modern kitchen for all your cooking needs',
          features: ['Stove & Cylinder', 'Refrigerator', 'RO Water Purifier', 'Geyser', 'Gas refill included'],
          color: 'text-orange-500',
          bgColor: 'bg-orange-50',
          highlight: 'Gas refill included in rent'
        },
        {
          icon: <CoffeeIcon size={28} />,
          title: 'Tiffin Service',
          description: 'Optional home-style meals at just ₹60 per meal',
          features: ['Lunch & Dinner', 'Room/Office delivery', 'No fixed charges', 'Pay per meal', 'Fresh & Healthy'],
          color: 'text-emerald-500',
          bgColor: 'bg-emerald-50',
          highlight: '₹60 per meal only'
        }
      ]
    },
    {
      category: 'Safety & Security',
      icon: <Shield size={24} />,
      color: 'from-red-500 to-pink-500',
      items: [
        {
          icon: <Camera size={28} />,
          title: '24/7 CCTV Surveillance',
          description: 'Complete security with cameras at all entry points',
          features: ['CCTV Cameras', 'Security Guards', 'Entry/Exit Logs', 'Night Patrol', 'Visitor Management'],
          color: 'text-red-500',
          bgColor: 'bg-red-50',
          highlight: '24/7 Monitoring'
        },
        {
          icon: <Phone size={28} />,
          title: 'Emergency Support',
          description: 'Immediate assistance anytime, day or night',
          features: ['24/7 Helpline', 'First Aid Kit', 'Emergency Contacts', 'Quick Response Team', 'Fire Safety'],
          color: 'text-pink-500',
          bgColor: 'bg-pink-50',
          highlight: 'Immediate Response'
        }
      ]
    },
    {
      category: 'Comfort & Convenience',
      icon: <Home size={24} />,
      color: 'from-blue-500 to-cyan-500',
      items: [
        {
          icon: <WifiIcon size={28} />,
          title: 'High-Speed WiFi',
          description: 'Unlimited fiber internet for work and entertainment',
          features: ['100 Mbps Speed', 'No Data Limits', '24/7 Uptime', 'Multiple Devices', 'Dedicated Router'],
          color: 'text-purple-500',
          bgColor: 'bg-purple-50',
          highlight: '100 Mbps Speed'
        },
        {
          icon: <Droplets size={28} />,
          title: 'RO Water Supply',
          description: 'Pure drinking water available 24/7',
          features: ['RO+UV Purification', 'Hot & Cold Water', 'Mineral Enriched', 'Regular Testing', 'Unlimited Supply'],
          color: 'text-blue-500',
          bgColor: 'bg-blue-50',
          highlight: '24/7 Pure Water'
        },
        {
          icon: <Brush size={28} />,
          title: 'Daily Cleaning',
          description: 'Professional housekeeping services',
          features: ['Daily Room Cleaning', 'Weekly Deep Clean', 'Common Area Maintenance', 'Laundry Area', 'Trash Disposal'],
          color: 'text-amber-500',
          bgColor: 'bg-amber-50',
          highlight: 'Daily Service'
        }
      ]
    },
  ];

  const stats = [
    { icon: <Users size={20} />, value: "200+", label: "Happy Girls", color: "from-pink-500 to-rose-500" },
    { icon: <Wifi size={20} />, value: "100 Mbps", label: "Internet Speed", color: "from-purple-500 to-indigo-500" },
    { icon: <Shield size={20} />, value: "24/7", label: "Security", color: "from-red-500 to-orange-500" },
    { icon: <ChefHat size={20} />, value: "₹60", label: "Per Meal", color: "from-green-500 to-emerald-500" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="relative py-6 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden min-h-screen">
      
      {/* ===== ANIMATED BACKGROUND ELEMENTS (MATCHING RULES COMPONENT) ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <div className="absolute top-4 left-4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#E22213]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-20 right-4 sm:top-40 sm:right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#0b234a]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-16 left-8 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
                        linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-full opacity-5 animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#0b234a] to-orange-500 rounded-full opacity-5 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-[#E22213] to-orange-500 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-tr from-[#0b234a] to-[#E22213] rounded-full opacity-15 animate-float" style={{ animationDelay: '3s' }}></div>

        {/* Facilities-specific floating elements */}
        <div className="absolute top-2/3 right-1/3 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8">
        
        {/* ===== HEADER SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Animated Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gray-100 to-slate-100 border border-gray-200 shadow-sm mb-6"
          >
            <div className="relative">
              <Award size={18} className="text-gray-700" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border-2 border-gray-300 border-t-transparent"
              />
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-gray-700 to-slate-700 bg-clip-text text-transparent">
              Premium Facilities & Amenities
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="block text-gray-800">Everything You Need</span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="block mt-2 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-clip-text text-transparent bg-size-200 animate-gradient"
            >
              For a Comfortable Stay
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Thoughtfully designed facilities to make your stay feel like home
          </motion.p>
        </motion.div>

        {/* ===== QUICK STATS ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-gray-100 shadow-lg text-center"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-3`}>
                <div className="text-white">{stat.icon}</div>
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== FACILITIES GRID ===== */}
        <div className="max-w-7xl mx-auto space-y-16">
          {facilities.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
                  <div className="text-white">{category.icon}</div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {category.category}
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
              </div>
              
              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="relative group"
                  >
                    <div className={`relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-100 hover:border-${item.color.split('-')[1]}-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}>
                      
                      {/* Background Gradient on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                      
                      {/* Highlight Badge */}
                      {item.highlight && (
                        <div className="absolute top-4 right-4">
                          <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${item.bgColor} ${item.color} border border-current shadow-sm`}>
                            {item.highlight}
                          </span>
                        </div>
                      )}
                      
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-xl ${item.bgColor} flex items-center justify-center mb-5 border-2 border-white shadow-md transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <div className={item.color}>{item.icon}</div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {item.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2.5">
                        {item.features.map((feature, idx) => (
                          <motion.div 
                            key={idx} 
                            initial={{ opacity: 0.8 }}
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-2.5"
                          >
                            <div className={`flex-shrink-0 w-5 h-5 rounded-full ${item.bgColor} flex items-center justify-center mt-0.5`}>
                              <CheckCircle size={12} className={item.color} />
                            </div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Hover Effect Line */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== TIFFIN SERVICE HIGHLIGHT ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-100 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            
            {/* Background Decoration */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                    <ChefHat size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Home-Style Tiffin Service
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 text-lg">
                  Don't feel like cooking? Enjoy delicious, home-style meals prepared fresh daily
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-emerald-500" />
                    <span className="text-gray-700">Lunch & Dinner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home size={18} className="text-emerald-500" />
                    <span className="text-gray-700">Room Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-emerald-500" />
                    <span className="text-gray-700">Fixed Timings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap size={18} className="text-emerald-500" />
                    <span className="text-gray-700">No Fixed Charges</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg min-w-[180px]">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-1">
                  ₹60
                </div>
                <div className="text-sm text-gray-500 mb-4">per meal</div>
                
                <motion.a
                  href='https://wa.me/916377964494' 
                  target='_blank'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  Subscribe Now
                </motion.a>
                
                <p className="text-xs text-gray-500 mt-3">
                  Cancel anytime • No commitment
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== CONTACT CTA ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href='https://wa.me/916377964494' 
            target='_blank'
            className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 group overflow-hidden"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700"></div>
            
            <Heart size={20} className="text-pink-400 group-hover:scale-110 transition-transform" />
            <span className="text-lg">Book Your Room Now</span>
            <Zap size={20} className="text-yellow-400 group-hover:rotate-12 transition-transform" />
            
            {/* Pulse Ring */}
            <span className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 opacity-30 group-hover:opacity-50 blur group-hover:blur-md transition-all"></span>
          </a>
        </motion.div>
      </div>

      {/* ===== CSS ANIMATIONS ===== */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-15px) translateX(10px);
          }
          75% {
            transform: translateY(-5px) translateX(5px);
          }
        }
        
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.05;
            transform: scale(1);
          }
          50% {
            opacity: 0.1;
            transform: scale(1.1);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        
        .bg-size-200 {
          background-size: 200% auto;
        }
      `}</style>
    </section>
  );
};

export default Facilities;