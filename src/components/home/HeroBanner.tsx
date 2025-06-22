import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  link: string;
  buttonText: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/images/shopjpg.jpeg',
    title: 'New Festival Collection',
    subtitle: 'Discover handcrafted silk sarees for the upcoming celebrations',
    link: '/collections?category=festival',
    buttonText: 'Explore Collection'
  },
  {
    id: 2,
    image: 'images/frontmain.jpg',
    title: 'Elegant Bridal Sarees',
    subtitle: 'Make your special day unforgettable with our exquisite bridal collections',
    link: '/collections?category=bridal',
    buttonText: 'View Bridal Collection'
  },
  {
    id: 3,
    image: 'images/frontmain1.jpg',
    title: 'Wedding Sarees',
    subtitle: 'Traditional craftsmanship meets contemporary design',
    link: '/collections?category=bridal',
    buttonText: 'Discover Wedding Sarees'
  }
];

const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Gradient Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
          
          {/* Content */}
          <div className="relative h-full flex items-center z-20">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-lg text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4 opacity-0 animate-fadeInUp"
                    style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-0 animate-fadeInUp"
                  style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                  {slide.subtitle}
                </p>
                <Link 
                  to={slide.link}
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 opacity-0 animate-fadeInUp shadow-lg"
                  style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-300"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-300"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-amber-500 w-10' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;