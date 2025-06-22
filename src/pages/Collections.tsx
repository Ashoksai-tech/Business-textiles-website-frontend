import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import SareeCard from '../components/collections/SareeCard';
import FilterPanel from '../components/collections/FilterPanel';
import { useFilter } from '../contexts/FilterContext';
import { sarees } from '../data/sarees';
import { priceRangeMap } from '../utils/helpers';

const CollectionsPage: React.FC = () => {
  const location = useLocation();
  const { filters, setFilters } = useFilter();
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    document.title = 'Collections - Sri Devayani Silks';
    
    // Parse URL query parameters
    const queryParams = new URLSearchParams(location.search);
    const categoryParam = queryParams.get('category');
    
    if (categoryParam) {
      setFilters(prev => ({ ...prev, category: categoryParam }));
    }
  }, [location.search, setFilters]);
  
  // Filter sarees based on selected filters
  const filteredSarees = sarees.filter(saree => {
    // Category filter
    if (filters.category !== 'all' && saree.categoryId !== filters.category) {
      return false;
    }
    
    // Price range filter
    if (filters.priceRange !== 'all') {
      const range = priceRangeMap[filters.priceRange];
      if (saree.price < range.min || saree.price > range.max) {
        return false;
      }
    }
    
    // Color filter
    if (filters.color !== 'all' && !saree.colors.includes(filters.color)) {
      return false;
    }
    
    // Search filter
    if (filters.search && !saree.name.toLowerCase().includes(filters.search.toLowerCase()) && 
        !saree.description.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters({ ...filters, search: searchInput });
  };

  return (
    <div className="pt-20 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
            Our Saree Collections
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our extensive range of handcrafted sarees sourced from the finest weavers across India.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Search by name, description, color..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-1 py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-r-md transition-colors"
            >
              <Search size={20} />
            </button>
          </form>
        </div>
        
        <div className="flex flex-col md:flex-row">
          {/* Sidebar Filter */}
          <div className="md:w-1/4 md:pr-6 mb-6 md:mb-0">
            <FilterPanel />
          </div>
          
          {/* Products Grid */}
          <div className="md:w-3/4">
            {filteredSarees.length > 0 ? (
              <>
                <p className="text-gray-600 mb-4">
                  Showing {filteredSarees.length} results
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSarees.map((saree) => (
                    <SareeCard key={saree.id} saree={saree} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No sarees found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or search criteria.
                </p>
                <button
                  onClick={() => setFilters({
                    category: 'all',
                    priceRange: 'all',
                    color: 'all',
                    search: ''
                  })}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;