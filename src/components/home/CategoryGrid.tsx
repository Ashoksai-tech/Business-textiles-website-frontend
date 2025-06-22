import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">Explore Our Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of exquisite sarees crafted with passion and tradition.
            From ceremonial silk to everyday cotton, find your perfect drape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/collections?category=${category.id}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
                {/* Category Image */}
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 group-hover:bottom-2">
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.description}
                  </p>
                  <span className="inline-block text-amber-400 group-hover:text-amber-300 transition-colors">
                    Explore Collection →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;