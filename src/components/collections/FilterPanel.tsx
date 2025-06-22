import React from 'react';
import { useFilter } from '../../contexts/FilterContext';
import { categories } from '../../data/categories';

const priceRanges = [
  { id: 'all', label: 'All Price Ranges', min: 0, max: Infinity },
  { id: 'budget', label: 'Under ₹5,000', min: 0, max: 5000 },
  { id: 'mid', label: '₹5,000 - ₹10,000', min: 5000, max: 10000 },
  { id: 'premium', label: '₹10,000 - ₹20,000', min: 10000, max: 20000 },
  { id: 'luxury', label: 'Above ₹20,000', min: 20000, max: Infinity }
];

const colors = [
  { id: 'all', label: 'All Colors' },
  { id: 'red', label: 'Red' },
  { id: 'blue', label: 'Blue' },
  { id: 'green', label: 'Green' },
  { id: 'pink', label: 'Pink' },
  { id: 'yellow', label: 'Yellow' },
  { id: 'purple', label: 'Purple' },
  { id: 'gold', label: 'Gold' },
  { id: 'multicolor', label: 'Multicolor' }
];

const FilterPanel: React.FC = () => {
  const { filters, setFilters } = useFilter();

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Filter Sarees</h2>
      
      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="text-gray-700 font-medium mb-2">Category</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              value="all"
              checked={filters.category === 'all'}
              onChange={() => setFilters({...filters, category: 'all'})}
              className="mr-2 text-amber-600 focus:ring-amber-500"
            />
            <span className="text-gray-700">All Categories</span>
          </label>
          
          {categories.map((category) => (
            <label key={category.id} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category.id}
                checked={filters.category === category.id}
                onChange={() => setFilters({...filters, category: category.id})}
                className="mr-2 text-amber-600 focus:ring-amber-500"
              />
              <span className="text-gray-700">{category.name}</span>
            </label>
          ))}
        </div>
      </div>
      
      {/* Price Range Filter */}
      <div className="mb-6">
        <h3 className="text-gray-700 font-medium mb-2">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.id} className="flex items-center">
              <input
                type="radio"
                name="priceRange"
                value={range.id}
                checked={filters.priceRange === range.id}
                onChange={() => setFilters({...filters, priceRange: range.id})}
                className="mr-2 text-amber-600 focus:ring-amber-500"
              />
              <span className="text-gray-700">{range.label}</span>
            </label>
          ))}
        </div>
      </div>
      
      {/* Color Filter */}
      <div className="mb-6">
        <h3 className="text-gray-700 font-medium mb-2">Color</h3>
        <div className="space-y-2">
          {colors.map((color) => (
            <label key={color.id} className="flex items-center">
              <input
                type="radio"
                name="color"
                value={color.id}
                checked={filters.color === color.id}
                onChange={() => setFilters({...filters, color: color.id})}
                className="mr-2 text-amber-600 focus:ring-amber-500"
              />
              <span className="text-gray-700">{color.label}</span>
            </label>
          ))}
        </div>
      </div>
      
      {/* Reset Filters */}
      <button
        onClick={() => setFilters({
          category: 'all',
          priceRange: 'all',
          color: 'all',
          search: ''
        })}
        className="w-full py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded transition-colors"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterPanel;