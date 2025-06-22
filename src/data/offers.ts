export interface Offer {
  id: string;
  type: 'discount' | 'collection';
  title: string;
  description: string;
  image: string;
  discount?: string;
  validTill?: string;
  link: string;
}

export const offers: Offer[] = [
  {
    id: 'off001',
    type: 'discount',
    title: 'Festive Season Sale',
    description: 'Enjoy up to 25% off on our exclusive festival collection. Limited time offer on selected sarees.',
    image: 'https://images.pexels.com/photos/2285585/pexels-photo-2285585.jpeg?auto=compress&cs=tinysrgb&w=600',
    discount: 'Up to 25% OFF',
    validTill: 'November 30, 2025',
    link: '/collections?category=festival'
  },
  {
    id: 'off002',
    type: 'discount',
    title: 'Wedding Special Discount',
    description: 'Planning for a wedding? Get 10% off on our entire bridal collection plus free blouse stitching.',
    image: 'https://images.pexels.com/photos/13894624/pexels-photo-13894624.jpeg?auto=compress&cs=tinysrgb&w=600',
    discount: '10% OFF + Free Blouse Stitching',
    validTill: 'December 31, 2025',
    link: '/collections?category=bridal'
  },
  {
    id: 'col001',
    type: 'collection',
    title: 'Summer Cotton Collection',
    description: 'Breathable cotton sarees for the summer season',
    image: 'https://images.pexels.com/photos/8601923/pexels-photo-8601923.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/collections?category=cotton'
  },
  {
    id: 'col002',
    type: 'collection',
    title: 'Designer Party Wear',
    description: 'Contemporary designs for special occasions',
    image: 'https://images.pexels.com/photos/8679850/pexels-photo-8679850.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/collections?category=designer'
  },
  {
    id: 'col003',
    type: 'collection',
    title: 'Silk Treasures',
    description: 'Handcrafted pure silk sarees from across India',
    image: 'https://images.pexels.com/photos/12697077/pexels-photo-12697077.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/collections?category=kanchipuram'
  }
];