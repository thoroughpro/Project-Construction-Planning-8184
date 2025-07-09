import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiPlay } = FiIcons;

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-cream-50 to-coffee-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-coffee-600 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-coffee-400 rounded-full blur-lg"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-cream-400 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-coffee-100 text-coffee-700 px-4 py-2 rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-coffee-600 rounded-full"></span>
              <span>Premium Coffee Experience</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-serif font-bold text-coffee-800 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Brew Your
              <span className="text-coffee-600 block">Perfect Day</span>
            </motion.h1>

            <motion.p
              className="text-lg text-coffee-600 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Experience the finest coffee beans from around the world, expertly roasted and brewed to perfection in our cozy atmosphere.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                className="bg-coffee-600 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:bg-coffee-700 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Order Now</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="border-2 border-coffee-600 text-coffee-600 px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:bg-coffee-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiPlay} className="w-5 h-5" />
                <span>Watch Story</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-coffee-800">50+</div>
                <div className="text-sm text-coffee-600">Coffee Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-coffee-800">1000+</div>
                <div className="text-sm text-coffee-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-coffee-800">10+</div>
                <div className="text-sm text-coffee-600">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Coffee Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10">
              <motion.div
                className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-coffee-200 to-coffee-300 rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Premium Coffee"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-coffee-800">Fresh Roasted</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-coffee-600 text-white rounded-2xl p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold">4.9</div>
                  <div className="text-xs opacity-90">Rating</div>
                </div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-8 right-8 w-32 h-32 bg-coffee-200 rounded-full opacity-50"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-cream-300 rounded-full opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;