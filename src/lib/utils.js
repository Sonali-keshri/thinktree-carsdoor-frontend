export const CATEGORIES = [
  'Exterior Accessories',
  'Interior Accessories',
  'Lighting',
  'Performance Parts',
  'Car Care & Maintenance',
  'Electronics & Audio',
  'Tires & Wheels',
  'Suspension',
];

export const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest First' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'name_asc', label: 'Name: A to Z' },
  { value: 'name_desc', label: 'Name: Z to A' },
];

export function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export function getStockStatus(stock) {
  if (stock === 0) return { label: 'Out of Stock', color: 'red' };
  if (stock <= 10) return { label: 'Low Stock', color: 'amber' };
  return { label: 'In Stock', color: 'green' };
}

export function getProductImage(product) {
  return product?.imageUrl || '/placeholder-product.svg';
}
