import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiHeart, FiUsers, FiCoffee } = FiIcons;

const About = () => {
  const features = [
    {
      icon: FiCoffee,
      title: 'Premium Beans',
      description: 'Sourced from the finest coffee farms around the world'
    },
    {
      icon: FiAward,
      title: 'Expert Roasting',
      description: 'Master roasters with decades of experience'
    },
    {
      icon: FiHeart,
      title: 'Made with Love',
      description: 'Every cup is crafted with passion and care'
    },
    {
      icon: FiUsers,
      title: 'Community Focus',
      description: 'Building connections one cup at a time'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-coffee-50 to-cream-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="text-coffee-600 font-medium text-lg">About Us</span>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-coffee-800 mt-2 mb-6">
                Brewing Excellence Since 2014
              </h2>
              <p className="text-coffee-600 text-lg leading-relaxed mb-6">
                At Brew & Beans, we believe that great coffee is more than just a drink—it's a 
                moment of connection, a pause in your day, and a craft that deserves respect.
              </p>
              <p className="text-coffee-600 leading-relaxed">
                Our journey began with a simple mission: to serve the finest coffee in a warm, 
                welcoming environment where every customer feels like family. Today, we continue 
                that tradition with the same passion and dedication.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-coffee-600 rounded-xl flex items-center justify-center mb-4">
                    <SafeIcon icon={feature.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-coffee-800 mb-2">{feature.title}</h3>
                  <p className="text-coffee-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <motion.div
                className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-coffee-200 to-coffee-300 rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Coffee Shop Interior"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-coffee-800">10+</div>
                  <div className="text-sm text-coffee-600">Years of Excellence</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-coffee-600 text-white rounded-2xl p-6 shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-sm opacity-90">Cups Served</div>
                </div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-12 right-12 w-40 h-40 bg-coffee-200 rounded-full opacity-30"></div>
              <div className="absolute bottom-12 left-12 w-32 h-32 bg-cream-300 rounded-full opacity-40"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;