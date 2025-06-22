import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { offers } from '../data/offers';

const OffersPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Special Offers - SareeElegance';
  }, []);

  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
            Special Offers & Collections
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our limited-time offers, festive collections, and seasonal specials.
          </p>
        </div>
        
        {/* Current Offers */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Current Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.filter(offer => offer.type === 'discount').map((offer) => (
              <div key={offer.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative">
                  <img 
                    src={offer.image} 
                    alt={offer.title} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-2 rounded-bl-lg font-medium">
                    {offer.discount}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">{offer.title}</h3>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-500 text-sm">Valid till: {offer.validTill}</p>
                    <Link 
                      to={offer.link}
                      className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition-colors"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Seasonal Collections */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Seasonal Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.filter(offer => offer.type === 'collection').map((collection) => (
              <div key={collection.id} className="group bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-medium text-white mb-2">{collection.title}</h3>
                    <Link 
                      to={collection.link}
                      className="inline-block text-amber-300 group-hover:text-amber-200 transition-colors"
                    >
                      Explore Collection →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Wedding Season Special */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md mb-16">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Wedding Collection" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="bg-amber-50 px-4 py-1 rounded-full text-amber-800 text-sm font-medium inline-block mb-4">
                Wedding Season Special
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">
                Bridal Collection 2025
              </h2>
              <p className="text-gray-600 mb-6">
                Discover our exquisite collection of bridal sarees, featuring intricate zari work, vibrant colors, and premium silk fabrics. Perfect for the bride and her family.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="h-5 w-5 text-amber-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Kanchipuram Silk Sarees
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="h-5 w-5 text-amber-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Banarasi Silk Sarees
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="h-5 w-5 text-amber-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Embroidered Designer Sarees
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="h-5 w-5 text-amber-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Bridal Accessories & Blouses
                </li>
              </ul>
              <Link 
                to="/collections?category=bridal"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md transition-colors"
              >
                Explore Bridal Collection
              </Link>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="bg-amber-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
            Stay Updated with Our Latest Offers
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Subscribe to our newsletter to receive updates on new arrivals, exclusive offers, and seasonal discounts.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-r-md transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;