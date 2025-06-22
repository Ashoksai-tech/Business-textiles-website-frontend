import React, { useEffect } from 'react';
import HeroBanner from '../components/home/HeroBanner';
import CategoryGrid from '../components/home/CategoryGrid';
import StoreFeatures from '../components/home/StoreFeatures';
import InstagramFeed from '../components/home/InstagramFeed';
import StoreLocation from '../components/home/StoreLocation';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Sri Devayani Silks - Exquisite Saree Collections';
  }, []);

  return (
    <div>
      <HeroBanner />
      <CategoryGrid />
      <StoreFeatures />
      <InstagramFeed />
      <StoreLocation />
    </div>
  );
};

export default HomePage;