import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  MapPin,
  Home as HomeIcon,
  Calendar,
  Bed,
  Wifi,
  Images,
  Mail
} from 'lucide-react';

import logo from '../assets/hero/rc_logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('/');
  const [roomsAvailable] = useState(4);
  const location = useLocation();

  // WhatsApp number (formatted for URL)
  const whatsappNumber = '916377964494'; // Without + sign
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in booking a room at RC HOMES.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Update active menu based on route
  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location]);

  const menuItems = [
    {
      name: 'Home',
      path: '/',
      icon: <HomeIcon size={18} />
    },
    {
      name: 'Rooms',
      path: '/rooms',
      icon: <Bed size={18} />
    },
    {
      name: 'Facilities',
      path: '/facilities',
      icon: <Wifi size={18} />
    },
    {
      name: 'Gallery',
      path: '/gallery',
      icon: <Images size={18} />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Mail size={18} />
    },
  ];

  // Enhanced Color Palette - More Vibrant & Feminine
  const colors = {
    primary: '#FF6B9D', // Vibrant Pink
    primaryLight: '#FFE4EC', // Soft Pink
    primaryDark: '#D14D7F', // Dark Pink
    secondary: '#9D4EDD', // Purple
    tertiary: '#FF8E53', // Coral/Orange
    background: '#FFF9FB', // Very Light Pink
    text: '#2D3748', // Dark Gray
    textLight: '#718096', // Medium Gray
    white: '#FFFFFF',
    success: '#38B2AC', // Teal
    highlight: '#FFD166', // Gold/Yellow
    gradientStart: '#FF6B9D',
    gradientEnd: '#9D4EDD',
  };

  // Function to handle Book Now click
  const handleBookNowClick = (e) => {
    e.preventDefault();
    window.open(whatsappLink, '_blank');
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 shadow-lg" style={{
      backgroundColor: colors.background,
      boxShadow: `0 4px 20px rgba(${colors.primary}, 0.1)`
    }}>
      {/* Top Bar Strip */}
      <div className="hidden md:block" style={{
        background: `linear-gradient(90deg, ${colors.primaryDark} 0%, ${colors.secondary} 100%)`
      }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6 text-white">
              <a
                href="tel:6377964494"
                className="flex items-center gap-2 transition-all hover:scale-105"
              >
                <Phone size={14} />
                <span>6377964494</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>Durgapura, Jaipur</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <HomeIcon size={14} className="text-white" />
              <span className="text-white">
                Rooms Available:
                <span className="ml-1 font-bold" style={{ color: colors.highlight }}>
                  {roomsAvailable}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          {/* Logo Section */}
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative overflow-hidden" style={{ height: '70px', width: 'auto' }}>
              <img
                src={logo}
                alt="RC HOMES Logo"
                className="w-[300px] h-[80px] object-cover"
              />
            </div>

            {/* Logo Text */}
            {/* <div>
              <h1 className="text-2xl font-bold transition-all duration-300 group-hover:scale-105"
                style={{
                  color: colors.primaryDark,
                  textShadow: `2px 2px 4px rgba(0,0,0,0.1)`
                }}>
                RC HOMES
              </h1>
              <p className="text-sm font-medium" style={{ color: colors.textLight }}>
                Your Home Away From Home
              </p>
            </div> */}
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative px-4 py-2 font-medium transition-all duration-300"
                style={{
                  color: activeMenu === item.path ? colors.primary : colors.text,
                  margin: '0 4px'
                }}
                onClick={() => setActiveMenu(item.path)}
                onMouseEnter={(e) => {
                  if (activeMenu !== item.path) {
                    e.currentTarget.style.color = colors.primary;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeMenu !== item.path) {
                    e.currentTarget.style.color = colors.text;
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.name}</span>
                </div>

                {/* Active Indicator Line */}
                {activeMenu === item.path && (
                  <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: colors.primary,
                      boxShadow: `0 0 10px ${colors.primary}`
                    }}
                  />
                )}

                {/* Hover Effect */}
                <div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 rounded-full transition-all duration-300 group-hover:w-3/4"
                  style={{ backgroundColor: colors.primaryLight }}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            {/* Desktop Book Now Button - Fixed WhatsApp Link */}
            <button
              onClick={handleBookNowClick}
              className="hidden md:flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`,
                boxShadow: `0 6px 20px rgba(${colors.primary}, 0.3)`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = `0 12px 30px rgba(${colors.primary}, 0.4)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = `0 6px 20px rgba(${colors.primary}, 0.3)`;
              }}
            >
              <Calendar size={18} />
              Book Now
            </button>

            {/* Mobile Menu Button */}
            <button
              className="rounded-xl p-2 transition-all duration-300 md:hidden hover:scale-110"
              style={{
                backgroundColor: colors.primaryLight,
                boxShadow: `0 4px 12px rgba(${colors.primary}, 0.2)`
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} style={{ color: colors.primaryDark }} />
              ) : (
                <Menu size={24} style={{ color: colors.primaryDark }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="mt-4 rounded-2xl md:hidden animate-fadeIn"
            style={{
              backgroundColor: colors.white,
              boxShadow: `0 20px 40px rgba(${colors.primary}, 0.15)`,
              border: `2px solid ${colors.primaryLight}`
            }}
          >
            <div className="flex flex-col space-y-1 p-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all ${activeMenu === item.path ? 'scale-105' : ''
                    }`}
                  style={{
                    color: activeMenu === item.path ? colors.primaryDark : colors.text,
                    backgroundColor: activeMenu === item.path ? colors.primaryLight : colors.background,
                    borderLeft: activeMenu === item.path ? `4px solid ${colors.primary}` : '4px solid transparent'
                  }}
                  onClick={() => {
                    setActiveMenu(item.path);
                    setIsMenuOpen(false);
                  }}
                  onMouseEnter={(e) => {
                    if (activeMenu !== item.path) {
                      e.currentTarget.style.backgroundColor = colors.primaryLight;
                      e.currentTarget.style.color = colors.primaryDark;
                      e.currentTarget.style.transform = 'translateX(8px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeMenu !== item.path) {
                      e.currentTarget.style.backgroundColor = colors.background;
                      e.currentTarget.style.color = colors.text;
                      e.currentTarget.style.transform = 'translateX(0)';
                    }
                  }}
                >
                  <div style={{ color: activeMenu === item.path ? colors.primary : colors.textLight }}>
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.name}</span>

                  {/* Active indicator for mobile */}
                  {activeMenu === item.path && (
                    <div className="ml-auto w-2 h-2 rounded-full"
                      style={{ backgroundColor: colors.primary }} />
                  )}
                </Link>
              ))}

              {/* Mobile Book Now Button - Fixed WhatsApp Link */}
              <button
                onClick={handleBookNowClick}
                className="mt-6 flex items-center justify-center gap-2 rounded-full py-3 font-bold text-white transition-all hover:scale-105 cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`,
                  boxShadow: `0 6px 20px rgba(${colors.primary}, 0.3)`
                }}
              >
                <Calendar size={18} />
                Book Now on WhatsApp
              </button>

              {/* Mobile Contact Info */}
              <div className="mt-6 space-y-4 pt-6 border-t" style={{ borderColor: colors.primaryLight }}>
                <a
                  href="tel:6377964494"
                  className="flex items-center gap-3 transition-all hover:scale-105"
                >
                  <div className="rounded-full p-2" style={{ backgroundColor: colors.primaryLight }}>
                    <Phone size={16} style={{ color: colors.primary }} />
                  </div>
                  <span style={{ color: colors.text }}>6377964494</span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="rounded-full p-2" style={{ backgroundColor: colors.primaryLight }}>
                    <MapPin size={16} style={{ color: colors.primary }} />
                  </div>
                  <span style={{ color: colors.text }}>Durgapura, Jaipur</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full p-2" style={{ backgroundColor: colors.primaryLight }}>
                    <HomeIcon size={16} style={{ color: colors.primary }} />
                  </div>
                  <span style={{ color: colors.text }}>
                    Rooms Available:
                    <span className="ml-2 font-bold" style={{ color: colors.success }}>
                      {roomsAvailable}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;