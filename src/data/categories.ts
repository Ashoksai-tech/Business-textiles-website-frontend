export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: 'kanchipuram',
    name: 'Kanchipuram Pattu',
    description: 'Luxurious silk sarees with intricate zari work, perfect for weddings and special occasions.',
    image: '/images/pattu-2.jpeg'
  },
  {
    id: 'soft',
    name: 'Soft Silk',
    description: 'Ornate silk sarees with rich gold zari work, featuring traditional motifs and designs.',
    image:  '/images/soft-4.jpeg'
  },
  {
    id: 'Banarasi',
    name: 'Banarasi Silk',
    description: 'Ornate silk sarees with rich gold zari work, featuring traditional motifs and designs.',
    image:  '/images/ba-1.jpeg'
  },
  {
    id: 'cotton',
    name: 'Linen Cotton',
    description: 'Breathable cotton sarees perfect for daily wear, featuring traditional weaves and designs.',
    image: '/images/li-6.jpeg'
  },
  {
    id: 'designer',
    name: 'Jimmy Choo Designer Collection',
    description: 'Contemporary designer sarees with modern patterns and embellishments for a unique look.',
    image: '/images/ji-1.jpeg'
  },
  {
    id: 'bridal',
    name: 'Bridal Specials',
    description: 'Exquisite bridal sarees crafted with premium materials and intricate embroidery.',
    image: '/images/bri-2.jpeg'
  },
  {
    id: 'festival',
    name: 'Festival Collection',
    description: 'Vibrant and colorful sarees perfect for celebrating traditional Indian festivals.',
    image: 'https://images.pexels.com/photos/2285585/pexels-photo-2285585.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];