import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, Instagram } from 'lucide-react';
import { categories } from '../../data/categories';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-bold text-red-800">
            <span className="text-amber-600">Sri Devayani Silks</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `font-medium hover:text-amber-600 transition-colors ${
                  isActive ? 'text-amber-600' : (isScrolled ? 'text-gray-800' : 'text-white')
                }`
              }
            >
              Home
            </NavLink>
            
            {/* Categories Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center font-medium hover:text-amber-600 transition-colors ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
                onClick={toggleDropdown}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                Categories <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 transition-all duration-200 ${
                  dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                {categories.map((category) => (
                  <Link 
                    key={category.id}
                    to={`/collections?category=${category.id}`}
                    className="block px-4 py-2 text-gray-800 hover:bg-amber-50 hover:text-amber-600"
                    onClick={closeDropdown}
                  >
                    {category.name}
                  </Link>
                ))}
                <Link 
                  to="/collections"
                  className="block px-4 py-2 text-amber-600 font-medium hover:bg-amber-50"
                  onClick={closeDropdown}
                >
                  View All Collections
                </Link>
              </div>
            </div>
            
            <NavLink 
              to="/offers" 
              className={({isActive}) => 
                `font-medium hover:text-amber-600 transition-colors ${
                  isActive ? 'text-amber-600' : (isScrolled ? 'text-gray-800' : 'text-white')
                }`
              }
            >
              Offers
            </NavLink>
            
            <NavLink 
              to="/about" 
              className={({isActive}) => 
                `font-medium hover:text-amber-600 transition-colors ${
                  isActive ? 'text-amber-600' : (isScrolled ? 'text-gray-800' : 'text-white')
                }`
              }
            >
              About Us
            </NavLink>
            
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-xl hover:text-pink-500 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              <Instagram />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="text-2xl font-serif font-bold text-red-800" onClick={closeMenu}>
              <span className="text-amber-600">Saree</span>Elegance
            </Link>
            <button 
              className="text-gray-800 text-2xl focus:outline-none"
              onClick={closeMenu}
              aria-label="Close Menu"
            >
              <X />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `text-lg py-2 ${isActive ? 'text-amber-600 font-medium' : 'text-gray-800'}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            
            <button 
              className="flex items-center justify-between text-lg py-2 text-gray-800"
              onClick={toggleDropdown}
            >
              Categories <ChevronDown className={`ml-1 w-5 h-5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {dropdownOpen && (
              <div className="pl-4 flex flex-col space-y-2">
                {categories.map((category) => (
                  <Link 
                    key={category.id}
                    to={`/collections?category=${category.id}`}
                    className="py-1 text-gray-700 hover:text-amber-600"
                    onClick={closeMenu}
                  >
                    {category.name}
                  </Link>
                ))}
                <Link 
                  to="/collections"
                  className="py-1 text-amber-600 font-medium"
                  onClick={closeMenu}
                >
                  View All Collections
                </Link>
              </div>
            )}
            
            <NavLink 
              to="/offers" 
              className={({isActive}) => 
                `text-lg py-2 ${isActive ? 'text-amber-600 font-medium' : 'text-gray-800'}`
              }
              onClick={closeMenu}
            >
              Offers
            </NavLink>
            
            <NavLink 
              to="/about" 
              className={({isActive}) => 
                `text-lg py-2 ${isActive ? 'text-amber-600 font-medium' : 'text-gray-800'}`
              }
              onClick={closeMenu}
            >
              About Us
            </NavLink>
            
            <a 
              href="https://www.instagram.com/sri_devayani_silks?igsh=ejQxbmZ5Zm5ua3Fm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-lg py-2 text-gray-800"
              onClick={closeMenu}
            >
              <Instagram className="mr-2" /> Instagram
            </a>
          </div>

          <div className="mt-auto">
            <div className="py-4 border-t border-gray-200">
              <p className="text-gray-600 mb-1">Contact Us:</p>
              <a href="tel:+919381681984" className="block text-amber-600 font-medium">+91 9381681984</a>
              <p className="text-gray-700 mt-2">
                Balaji Nagar, New TamilNadu Textiles Market<br />Pendurthi, Visakhapatnam, Andhra Pradesh 531173<br />India
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;