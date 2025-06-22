import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Store Info */}
          <div>
            <h3 className="text-xl font-serif font-semibold text-white mb-4">
              <span className="text-amber-500">Sri Devayani Silks</span>
            </h3>
            <p className="mb-4 text-gray-400">
              Explore our exquisite collection of handcrafted sarees from the finest weavers across India.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/sri_devayani_silks?igsh=ejQxbmZ5Zm5ua3Fm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a 
                href="https://wa.me/9381681984" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone />
              </a>
              <a 
                href="mailto:sridevayanisilks@gmail.com" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/collections" className="text-gray-400 hover:text-amber-500 transition-colors">Collections</Link>
              </li>
              <li>
                <Link to="/offers" className="text-gray-400 hover:text-amber-500 transition-colors">Offers</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-amber-500 transition-colors">About Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Visit Our Store</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="flex-shrink-0 mr-2 mt-1 text-amber-500" size={18} />
                <span>Balaji Nagar, New TamilNadu Textiles Market<br />Pendurthi, Visakhapatnam, Andhra Pradesh 531173<br />India</span>
              </li>
              <li className="flex items-center">
                <Phone className="flex-shrink-0 mr-2 text-amber-500" size={18} />
                <a href="tel:+919381681984" className="hover:text-amber-500 transition-colors">
                  +91 9381681984
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="flex-shrink-0 mr-2 text-amber-500" size={18} />
                <a href="mailto:sridevayanisilks@sareeelegance.com" className="hover:text-amber-500 transition-colors">
                  sridevayanisilks@sareeelegance.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="flex-shrink-0 mr-2 mt-1 text-amber-500" size={18} />
                <div>
                  <p>Mon - Sun: 9:00 AM - 10:00 PM</p>
                   
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Sri Devayani Silks . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;