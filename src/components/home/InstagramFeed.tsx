import React, { useEffect } from 'react';
import { Instagram } from 'lucide-react';

// Mock Instagram posts
const instagramPosts = [
  {
    id: 1,
    postUrl: 'https://www.instagram.com/p/CvqssjdLGxa/',
    embedCode: '<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CvqssjdLGxa/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14"></blockquote>'
  },
  {
    id: 2,
    postUrl: 'https://www.instagram.com/p/CvquM86rZcb/',
    embedCode: '<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CvquM86rZcb/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14"></blockquote>'
  },
  {
    id: 3,
    postUrl: 'https://www.instagram.com/p/DJYxdl-yobs/',
    embedCode: '<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DJYxdl-yobs/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14"></blockquote>'
  },
  {
    id: 4,
    postUrl: 'https://www.instagram.com/p/DJYwj27SKz4/',
    embedCode: '<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DJYwj27SKz4/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14"></blockquote>'
  },
];

const InstagramFeed: React.FC = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">Follow Us on Instagram</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Stay updated with our latest collections, offers, and events
          </p>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-pink-600 hover:text-pink-700 transition-colors"
          >
            <Instagram className="mr-2" />
            <span className="font-medium">@Sri Devayani Silks</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <style>{`
              .instagram-post-container {
                min-width: 280px;
                width: 100%;
              }
              .instagram-media {
                max-width: 100% !important;
                min-width: 280px !important;
                width: 100% !important;
                margin: 0 !important;
              }
            `}</style>
          {instagramPosts.map((post) => (
            <div key={post.id} className="instagram-post-container" dangerouslySetInnerHTML={{ __html: post.embedCode }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;