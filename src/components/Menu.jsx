import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiPlus, FiHeart } = FiIcons;

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('espresso');

  const categories = [
    { id: 'espresso', name: 'Espresso', count: 8 },
    { id: 'cold', name: 'Cold Brew', count: 6 },
    { id: 'specialty', name: 'Specialty', count: 12 },
    { id: 'pastries', name: 'Pastries', count: 10 }
  ];

  const menuItems = {
    espresso: [
      {
        id: 1,
        name: 'Classic Espresso',
        description: 'Rich, bold espresso shot with perfect crema',
        price: '$3.50',
        image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        rating: 4.8,
        popular: true
      },
      {
        id: 2,
        name: 'Cappuccino',
        description: 'Espresso with steamed milk and foam art',
        price: '$4.25',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        rating: 4.9,
        popular: false
      },
      {
        id: 3,
        name: 'Caramel Macchiato',
        description: 'Espresso with vanilla syrup and caramel drizzle',
        price: '$5.75',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        rating: 4.7,
        popular: true
      }
    ],
    cold: [
      {
        id: 4,
        name: 'Iced Coffee',
        description: 'Smooth cold brew served over ice',
        price: '$3.75',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        rating: 4.6,
        popular: false
      },
      {
        id: 5,
        name: 'Frappuccino',
        description: 'Blended coffee with whipped cream',
        price: '$5.25',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        rating: 4.8,
        popular: true
      }
    ],
    specialty: [
      {
        id: 6,
        name: 'Matcha Latte',
        description: 'Premium matcha with steamed milk',
        price: '$4.95',
        image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        rating: 4.7,
        popular: false
      },
      {
        id: 7,
        name: 'Chai Latte',
        description: 'Spiced chai tea with frothed milk',
        price: '$4.50',
        image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        rating: 4.5,
        popular: true
      }
    ],
    pastries: [
      {
        id: 8,
        name: 'Croissant',
        description: 'Buttery, flaky French pastry',
        price: '$3.25',
        image: 'https://images.unsplash.com/photo-1555507036-ab794f0ecb45?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        rating: 4.6,
        popular: false
      },
      {
        id: 9,
        name: 'Blueberry Muffin',
        description: 'Fresh baked with wild blueberries',
        price: '$2.95',
        image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        rating: 4.4,
        popular: true
      }
    ]
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-coffee-600 font-medium text-lg">Our Menu</span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-coffee-800 mt-2 mb-4">
            Crafted with Passion
          </h2>
          <p className="text-coffee-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffee drinks and fresh pastries, 
            made with the finest ingredients and lots of love.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-coffee-600 text-white shadow-lg'
                  : 'bg-coffee-100 text-coffee-700 hover:bg-coffee-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {menuItems[activeCategory]?.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {item.popular && (
                  <div className="absolute top-4 left-4 bg-coffee-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}
                <motion.button
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SafeIcon icon={FiHeart} className="w-5 h-5 text-coffee-600" />
                </motion.button>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-coffee-800">{item.name}</h3>
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-coffee-600">{item.rating}</span>
                  </div>
                </div>

                <p className="text-coffee-600 mb-4">{item.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-coffee-800">{item.price}</span>
                  <motion.button
                    className="bg-coffee-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-coffee-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SafeIcon icon={FiPlus} className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;