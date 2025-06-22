import React from 'react';

const StoreLocation: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Store Information */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6">Visit Our Store</h2>
            <p className="text-gray-600 mb-6">
              Experience the richness and splendor of our sarees in person. Our expert staff will guide you through our extensive collection and help you find the perfect saree for any occasion.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <h3 className="font-medium text-gray-800 mb-2">Address</h3>
                <p className="text-gray-600">
                  Balaji Nagar, New TamilNadu Textiles Market<br />
                  Pendurthi, Visakhapatnam, Andhra Pradesh 531173<br />
                  India
                </p>
              </div>
              
              <div className="mb-4">
                <h3 className="font-medium text-gray-800 mb-2">Hours</h3>
                <p className="text-gray-600">
                  Monday - Sunday: 9:00 AM - 10:00 PM<br />
                
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Contact</h3>
                <p className="text-gray-600">
                  Phone: <a href="tel:+919381681984" className="text-amber-600 hover:underline">+91 9381681984</a><br />
                  Email: <a href="mailto:sridevayanisilks@sareeelegance.com" className="text-amber-600 hover:underline">sridevayanisilks@gmail.com</a>
                </p>
              </div>
              
              <a
                href="https://goo.gl/maps/UQKtNw8X7Y5mHJ6v8"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition-colors duration-300"
              >
                Get Directions
              </a>
            </div>
          </div>
          
          {/* Map or Store Image */}
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.0124561277287!2d83.15999999999999!3d17.790000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39437e7e3762c3%3A0x815e771c937a2836!2sBalaji%20Nagar%2C%20Pendurthi%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20531173!5e0!3m2!1sen!2sin!4v1683457890123!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Store Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocation;