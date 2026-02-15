import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Home, Bath, Users, Utensils, Bed, DoorOpen, Star } from 'lucide-react';
import kitchen1 from '../assets/hero/kitchen1.jpeg';
import kitchen2 from '../assets/hero/kitchen2.jpeg';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  // Your actual image arrays
  const single = [
    'https://images.jdmagicbox.com/v2/comp/jaipur/s2/0141px141.x141.231204135523.h8s2/catalogue/rc-homes-girls-pg-tonk-road-jaipur-paying-guest-accommodations-for-girl-student-cmpf5jbh88.jpg',
    'https://images.jdmagicbox.com/v2/comp/jaipur/s2/0141px141.x141.231204135523.h8s2/catalogue/rc-homes-girls-pg-tonk-road-jaipur-paying-guest-accommodations-for-girl-student-9evf6ekk6f.jpg',
    'https://images.jdmagicbox.com/v2/comp/jaipur/s2/0141px141.x141.231204135523.h8s2/catalogue/rc-homes-girls-pg-tonk-road-jaipur-paying-guest-accommodations-for-girl-student-rfbmqncohg.jpg',
    'https://images.jdmagicbox.com/v2/comp/jaipur/s2/0141px141.x141.231204135523.h8s2/catalogue/rc-homes-girls-pg-tonk-road-jaipur-paying-guest-accommodations-for-girl-student-gs5k7a8dng.jpg',
    'https://images.jdmagicbox.com/v2/comp/jaipur/s2/0141px141.x141.231204135523.h8s2/catalogue/rc-homes-girls-pg-tonk-road-jaipur-paying-guest-accommodations-for-girl-student-339nk259qo.jpg',
    'https://images.jdmagicbox.com/comp/jaipur/s2/0141px141.x141.231204135523.h8s2/catalogue/0wkfos96qemzrfvjvhgwpljc07k3yxzy-gzqayqhb4c.jpg',
    // 'https://images.jdmagicbox.com/v2/comp/jaipur/e6/0141px141.x141.231204134306.f9e6/catalogue/rc-homes-girls-pg-durgapura-jaipur-hostels-u4vnfrdkls.jpg',
    //'https://images.jdmagicbox.com/v2/comp/jaipur/e6/0141px141.x141.231204134306.f9e6/catalogue/rc-homes-girls-pg-durgapura-jaipur-hostels-8fdtsnsti3.jpg',
    //'https://images.jdmagicbox.com/v2/comp/jaipur/e6/0141px141.x141.231204134306.f9e6/catalogue/rc-homes-girls-pg-durgapura-jaipur-hostels-d5oyysd195.jpg',
    // 'https://images.jdmagicbox.com/v2/comp/jaipur/e6/0141px141.x141.231204134306.f9e6/catalogue/rc-homes-girls-pg-durgapura-jaipur-hostels-9rdvfmr7hg.jpg',
    // 'https://images.jdmagicbox.com/v2/comp/jaipur/e6/0141px141.x141.231204134306.f9e6/catalogue/rc-homes-girls-pg-durgapura-jaipur-hostels-icd79jlmrd.jpg',
  ];

  const duble = [
    'https://images.jdmagicbox.com/v2/comp/jaipur/s2/0141px141.x141.231204135523.h8s2/catalogue/rc-homes-girls-pg-tonk-road-jaipur-paying-guest-accommodations-for-girl-student-cmpf5jbh88.jpg',
    'https://images.jdmagicbox.com/v2/comp/jaipur/s2/0141px141.x141.231204135523.h8s2/catalogue/rc-homes-girls-pg-tonk-road-jaipur-paying-guest-accommodations-for-girl-student-9evf6ekk6f.jpg',
    'https://images.jdmagicbox.com/v2/comp/jaipur/s2/0141px141.x141.231204135523.h8s2/catalogue/rc-homes-girls-pg-tonk-road-jaipur-paying-guest-accommodations-for-girl-student-rfbmqncohg.jpg',
    'https://images.jdmagicbox.com/v2/comp/jaipur/s2/0141px141.x141.231204135523.h8s2/catalogue/rc-homes-girls-pg-tonk-road-jaipur-paying-guest-accommodations-for-girl-student-gs5k7a8dng.jpg',
    'https://images.jdmagicbox.com/v2/comp/jaipur/s2/0141px141.x141.231204135523.h8s2/catalogue/rc-homes-girls-pg-tonk-road-jaipur-paying-guest-accommodations-for-girl-student-339nk259qo.jpg',
    'https://images.jdmagicbox.com/comp/jaipur/s2/0141px141.x141.231204135523.h8s2/catalogue/0wkfos96qemzrfvjvhgwpljc07k3yxzy-gzqayqhb4c.jpg',
    'https://images.jdmagicbox.com/v2/comp/jaipur/e6/0141px141.x141.231204134306.f9e6/catalogue/rc-homes-girls-pg-durgapura-jaipur-hostels-u4vnfrdkls.jpg',
    //'https://images.jdmagicbox.com/v2/comp/jaipur/e6/0141px141.x141.231204134306.f9e6/catalogue/rc-homes-girls-pg-durgapura-jaipur-hostels-8fdtsnsti3.jpg',
    //'https://images.jdmagicbox.com/v2/comp/jaipur/e6/0141px141.x141.231204134306.f9e6/catalogue/rc-homes-girls-pg-durgapura-jaipur-hostels-d5oyysd195.jpg',
    //'https://images.jdmagicbox.com/v2/comp/jaipur/e6/0141px141.x141.231204134306.f9e6/catalogue/rc-homes-girls-pg-durgapura-jaipur-hostels-9rdvfmr7hg.jpg',
    //'https://images.jdmagicbox.com/v2/comp/jaipur/e6/0141px141.x141.231204134306.f9e6/catalogue/rc-homes-girls-pg-durgapura-jaipur-hostels-icd79jlmrd.jpg',
  ];

  const tripal = [
    'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2025/Jan/03/full_photo/GR2-410165-2354857.jpeg',
    'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2025/Jan/03/full_photo/GR2-410165-2354861.jpeg',
    'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2025/Jan/03/full_photo/GR2-410165-2354859.jpeg',
    //'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2025/Jan/03/full_photo/GR2-410165-2354863.jpeg',
    // 'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2025/Jan/03/full_photo/GR2-410165-2354865.jpeg',
    // 'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2025/Jan/03/full_photo/GR2-410165-2354833.jpeg',
    // 'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2025/Jan/03/full_photo/GR2-410165-2354835.jpeg',
    // 'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2025/Jan/03/full_photo/GR2-410165-2354831.jpeg',
  ];

  const kitchen = [
    kitchen1,
    kitchen2
  ];

  const bathroom = [
    'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2025/Jan/03/full_photo/GR2-410165-2354865.jpeg',
    'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2025/Jan/03/full_photo/GR2-410165-2354833.jpeg',
    'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2025/Jan/03/full_photo/GR2-410165-2354835.jpeg',
    'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2025/Jan/03/full_photo/GR2-410165-2354831.jpeg',
    'https://images.jdmagicbox.com/v2/comp/jaipur/e6/0141px141.x141.231204134306.f9e6/catalogue/rc-homes-girls-pg-durgapura-jaipur-hostels-u4vnfrdkls.jpg',
    'https://images.jdmagicbox.com/v2/comp/jaipur/e6/0141px141.x141.231204134306.f9e6/catalogue/rc-homes-girls-pg-durgapura-jaipur-hostels-8fdtsnsti3.jpg',
    'https://images.jdmagicbox.com/v2/comp/jaipur/e6/0141px141.x141.231204134306.f9e6/catalogue/rc-homes-girls-pg-durgapura-jaipur-hostels-d5oyysd195.jpg',
    'https://images.jdmagicbox.com/v2/comp/jaipur/e6/0141px141.x141.231204134306.f9e6/catalogue/rc-homes-girls-pg-durgapura-jaipur-hostels-9rdvfmr7hg.jpg',
    'https://images.jdmagicbox.com/v2/comp/jaipur/e6/0141px141.x141.231204134306.f9e6/catalogue/rc-homes-girls-pg-durgapura-jaipur-hostels-icd79jlmrd.jpg',
  ];


  // Function to generate gallery images from arrays
  const generateGalleryImages = () => {
    const images = [];
    let id = 1;

    // Single Rooms
    single.forEach((url, index) => {
      images.push({
        id: id++,
        category: 'single',
        title: `Single Room ${index + 1}`,
        description: 'Private single occupancy with all amenities',
        url: url,
        tags: ['AC', 'Attached Bathroom', 'Study Table', 'Wardrobe']
      });
    });

    // Twin Sharing Rooms
    duble.forEach((url, index) => {
      images.push({
        id: id++,
        category: 'twin',
        title: `Twin Sharing Room ${index + 1}`,
        description: 'Spacious twin sharing with separate beds',
        url: url,
        tags: ['AC', '2 Beds', '2 Wardrobes', '2 Study Tables']
      });
    });

    // Triple Sharing Rooms
    tripal.forEach((url, index) => {
      images.push({
        id: id++,
        category: 'triple',
        title: `Triple Sharing Room ${index + 1}`,
        description: 'Comfortable triple sharing option',
        url: url,
        tags: ['AC', '3 Beds', '3 Wardrobes', 'Spacious']
      });
    });

    // Kitchen
    kitchen.forEach((url, index) => {
      images.push({
        id: id++,
        category: 'kitchen',
        title: `Kitchen ${index + 1}`,
        description: 'Fully equipped modular kitchen',
        url: url,
        tags: ['Stove', 'Refrigerator', 'RO System', 'Geyser']
      });
    });

    // Bathrooms
    bathroom.forEach((url, index) => {
      images.push({
        id: id++,
        category: 'bathrooms',
        title: `Bathroom ${index + 1}`,
        description: 'Clean and modern bathroom facilities',
        url: url,
        tags: ['Geyser', 'Hot Water', 'Ventilated', 'Modern Fixtures']
      });
    });

    return images;
  };

  const galleryImages = generateGalleryImages();

  const categories = [
    {
      id: 'all',
      label: 'All Photos',
      icon: <DoorOpen size={18} />,
      count: galleryImages.length
    },
    {
      id: 'single',
      label: 'Single Rooms',
      icon: <Bed size={18} />,
      count: single.length
    },
    {
      id: 'twin',
      label: 'Twin Sharing',
      icon: <Bed size={18} />,
      count: duble.length
    },
    {
      id: 'triple',
      label: 'Triple Sharing',
      icon: <Bed size={18} />,
      count: tripal.length
    },
    {
      id: 'kitchen',
      label: 'Kitchen',
      icon: <Utensils size={18} />,
      count: kitchen.length
    },
    {
      id: 'bathrooms',
      label: 'Bathrooms',
      icon: <Bath size={18} />,
      count: bathroom.length
    }
  ];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;

    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }

    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50/20 pt-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-4 left-4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#E22213]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-20 right-4 sm:top-40 sm:right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#0b234a]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-16 left-8 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
                        linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}></div>
        </div>

        <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-full opacity-5 animate-pulse-slow pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#0b234a] to-orange-500 rounded-full opacity-5 animate-pulse-slow pointer-events-none" style={{ animationDelay: '1.5s' }}></div>

        <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-[#E22213] to-orange-500 rounded-full opacity-10 animate-float pointer-events-none" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-tr from-[#0b234a] to-[#E22213] rounded-full opacity-15 animate-float pointer-events-none" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Main Content */}
      <section className="py-4 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100 shadow-sm mb-2"
            >
              <div className="relative">
                <Star size={18} className="text-pink-500 fill-pink-500" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 rounded-full border-2 border-pink-200 border-t-transparent"
                />
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Visual Tour
              </span>
            </motion.div>

            <div className="relative">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="block text-gray-800">Explore Our</span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="block mt-2 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-size-200 animate-gradient"
                >
                  Beautiful Spaces
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8"
              >
                Browse through photos of our rooms, kitchen, bathrooms, and common areas
              </motion.p>
            </div>
          </motion.div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-8 relative z-20">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${selectedCategory === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-pink-200 hover:shadow-md'
                  }`}
              >
                <span className={selectedCategory === category.id ? 'text-white' : 'text-gray-600'}>
                  {category.icon}
                </span>
                <span className="font-medium">{category.label}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${selectedCategory === category.id
                  ? 'bg-white/20'
                  : 'bg-gray-100 text-gray-700'
                  }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Category Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8 relative z-20"
          >
            <p className="text-gray-600">
              Showing {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'}
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.label}`}
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto relative z-20">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => openLightbox(image)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-medium text-white">
                    {categories.find(c => c.id === image.category)?.label}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90 mb-3">{image.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {image.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs">
                          {tag}
                        </span>
                      ))}
                      {image.tags.length > 3 && (
                        <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs">
                          +{image.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <span className="text-lg">👁️</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 relative z-20"
            >
              <div className="text-5xl mb-4">📷</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No Photos Found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors md:left-8"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors md:right-8"
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-6xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image with proper sizing */}
              <div className="w-full flex items-center justify-center p-2 md:p-4">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[calc(100vh-250px)] w-auto h-auto object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Info overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 text-white rounded-b-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    {categories.find(c => c.id === selectedImage.category)?.label}
                  </div>
                  <div className="text-sm opacity-75">
                    {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-lg opacity-90 mb-3">{selectedImage.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedImage.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-15px) translateX(10px); }
          75% { transform: translateY(-5px) translateX(5px); }
        }
        .animate-float { animation: float 12s ease-in-out infinite; }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.1; transform: scale(1.1); }
        }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        .bg-size-200 { background-size: 200% auto; }
      `}</style>
    </div>
  );
};

export default Gallery;