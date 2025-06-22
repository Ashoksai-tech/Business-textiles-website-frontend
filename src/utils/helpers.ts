export const formatPrice = (price: number): string => {
  return `₹${price.toLocaleString('en-IN')}`;
};

export const priceRangeMap: Record<string, { min: number; max: number }> = {
  'all': { min: 0, max: Infinity },
  'budget': { min: 0, max: 5000 },
  'mid': { min: 5000, max: 10000 },
  'premium': { min: 10000, max: 20000 },
  'luxury': { min: 20000, max: Infinity }
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};