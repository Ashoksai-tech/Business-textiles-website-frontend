import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - Sri Devayani Silks';
  }, []);

  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
            About Sri Devayani Silks
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A journey of preserving tradition through exquisite craftsmanship.
          </p>
        </div>
        
        {/* Our Story */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Store Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015 by Mrs. Devayani, Sri Devayani Silks began as a small boutique in Pendurthi, Visakhapatnam with a mission to showcase the rich heritage of Indian textiles through exceptionally crafted sarees.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a passion project has now grown into one of Pendurthi's most respected saree destinations, offering an extensive collection of varieties of sarees from various regions of India like Surat, Jaipur, Banarasi, Bangalore, Jetpur, Kanchipuram, Dharmavaram, Salem etc.
              </p>
              <p className="text-gray-600">
                Today, under the leadership of Mrs. Devayani, we continue our founder's legacy by partnering directly with weavers and artisans, ensuring fair trade practices while preserving traditional craftsmanship.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Quality</h3>
              <p className="text-gray-600">
                We personally select each saree, ensuring the highest standards of craftsmanship and materials.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Artisan Support</h3>
              <p className="text-gray-600">
                We work directly with weavers across India, ensuring fair compensation and sustainable practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Heritage</h3>
              <p className="text-gray-600">
              We are committed to preserving India's rich textile heritage while embracing modern design styles and contemporary aesthetics
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Us */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                We'd love to hear from you! Visit our store, give us a call, or send us a message.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="flex-shrink-0 mr-3 mt-1 text-amber-600" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Balaji Nagar, New TamilNadu Textiles Market<br />
                      Pendurthi, Visakhapatnam, Andhra Pradesh 531173<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="flex-shrink-0 mr-3 mt-1 text-amber-600" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Store Hours</h3>
                    <p className="text-gray-600">
                      Monday - Sunday: 9:00 AM - 10:00 PM<br />
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="flex-shrink-0 mr-3 mt-1 text-amber-600" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+919381681984" className="hover:text-amber-600">+91 98765 43210</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="flex-shrink-0 mr-3 mt-1 text-amber-600" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:sridevayani@gmail.com" className="hover:text-amber-600">info@sri-devayani-silks.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Instagram className="flex-shrink-0 mr-3 mt-1 text-amber-600" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Instagram</h3>
                    <p className="text-gray-600">
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600">@sri_devayani_silks</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8 bg-gray-50">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Send Us a Message</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;