import React from 'react';
import { Award, Clock, Truck, Heart } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="text-amber-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const StoreFeatures: React.FC = () => {
  const features = [
    {
      icon: <Award size={32} />,
      title: "Premium Quality",
      description: "Every saree in our collection is handpicked for quality and craftsmanship."
    },
    {
      icon: <Clock size={32} />,
      title: "Legacy of 10 Years",
      description: "Trusted by generations for authentic and traditional and modern textile products."
    },
    {
      icon: <Truck size={32} />,
      title: "Home Delivery Available",
      description: "Shop in-store and get your purchases delivered to your doorstep."
    },
    {
      icon: <Heart size={32} />,
      title: "Customer Satisfaction",
      description: "Our dedicated team ensures you have the best shopping experience."
    }
  ];

  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">Why Shop With Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Sri Devayani Silks, we combine traditional craftsmanship with modern convenience to offer you the best shopping experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreFeatures;