import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Saree } from '../../types';

interface SareeCardProps {
  saree: Saree;
}

const SareeCard: React.FC<SareeCardProps> = ({ saree }) => {
  const whatsappMessage = `Hello! I'm interested in the ${saree.name} saree (ID: ${saree.id}) priced at ₹${saree.price.toLocaleString()}. Can you provide more details?`;
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={saree.image} 
          alt={saree.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        
        {/* Category Tag */}
        <span className="absolute top-3 left-3 bg-amber-600 text-white text-xs px-3 py-1 rounded-full">
          {saree.category}
        </span>
        
        {/* Price Tag */}
        <div className="absolute bottom-3 right-3 bg-white text-amber-600 font-medium px-3 py-1 rounded-full shadow-md">
          ₹{saree.price.toLocaleString()}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{saree.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{saree.description}</p>
        
        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {saree.features.map((feature, index) => (
            <span 
              key={index} 
              className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
            >
              {feature}
            </span>
          ))}
        </div>
        
        {/* Actions */}
        <div className="flex justify-between items-center">
          <Link 
            to={`/collections/${saree.id}`}
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            View Details
          </Link>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors"
          >
            <MessageCircle size={16} className="mr-1" />
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
};

export default SareeCard;