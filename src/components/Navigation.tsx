
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-white/20 shadow-2xl shadow-black/50' 
        : 'bg-black/80 backdrop-blur-lg'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <img 
              src="/lovable-uploads/d083078f-9e90-4dd9-98a3-a43e84f87daf.png" 
              alt="PixieAI Logo" 
              className="w-8 h-8 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-xl sm:text-3xl font-black text-white group-hover:scale-105 transition-transform duration-300">
              PixieAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm xl:text-base font-medium transition-all duration-300 hover:text-orange-400 hover:scale-105 relative group px-3 py-2 rounded-lg hover:bg-white/10 ${
                  location.pathname === item.path 
                    ? 'text-orange-400 bg-white/10' 
                    : 'text-white'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-orange-400 transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <Button 
              asChild 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-4 xl:px-6 py-2 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 sm:p-3 rounded-lg hover:bg-white/10 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 mt-4 sm:mt-6' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="pb-4 sm:pb-6 border-t border-white/20 pt-4 sm:pt-6">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-base sm:text-lg font-medium transition-all duration-300 hover:text-orange-400 px-4 py-3 rounded-lg hover:bg-white/10 transform hover:translate-x-2 ${
                    location.pathname === item.path 
                      ? 'text-orange-400 bg-white/10 translate-x-2' 
                      : 'text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                asChild 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 w-fit mx-4 px-6 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
