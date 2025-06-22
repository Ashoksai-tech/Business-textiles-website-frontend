import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FilterContextType {
  filters: {
    category: string;
    priceRange: string;
    color: string;
    search: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    category: string;
    priceRange: string;
    color: string;
    search: string;
  }>>;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    color: 'all',
    search: ''
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};