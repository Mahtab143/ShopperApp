export interface Product {
  id: number;
  name: string;
  size: string;
  price: number;
  gender: string;
  stock: number;
  imageUrl: string;
  quantity: number;
}

export const PRODUCTS: Product[] = [
  { id: 1, name: 'T-Shirt', size: 'M', price: 29.99, gender: 'Unisex', stock: 50, imageUrl: 'https://via.placeholder.com/150/0000FF/808080?text=Product+1', quantity: 0 },
  { id: 2, name: 'Jeans', size: 'L', price: 49.99, gender: 'Men', stock: 30, imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Product+2', quantity: 0 },
  // Additional example products
  { id: 3, name: 'Sneakers', size: '10', price: 69.99, gender: 'Women', stock: 20, imageUrl: 'https://via.placeholder.com/150/00FF00/000000?text=Product+3', quantity: 0 },
  { id: 4, name: 'Jacket', size: 'S', price: 99.99, gender: 'Men', stock: 15, imageUrl: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Product+4', quantity: 0 },
  { id: 5, name: 'Hat', size: 'L', price: 15.99, gender: 'Unisex', stock: 40, imageUrl: 'https://via.placeholder.com/150/FFFF00/000000?text=Product+5', quantity: 0 },
  { id: 6, name: 'Skirt', size: 'M', price: 39.99, gender: 'Women', stock: 25, imageUrl: 'https://via.placeholder.com/150/00FFFF/000000?text=Product+6', quantity: 0 },
  { id: 7, name: 'Gloves', size: 'S', price: 19.99, gender: 'Men', stock: 22, imageUrl: 'https://via.placeholder.com/150/000000/FFFFFF?text=Product+7', quantity: 0 },
  { id: 8, name: 'Sandals', size: '9', price: 29.99, gender: 'Unisex', stock: 35, imageUrl: 'https://via.placeholder.com/150/F0F0F0/000000?text=Product+8', quantity: 0 },
  { id: 9, name: 'Watch', size: 'Free Size', price: 149.99, gender: 'Men', stock: 18, imageUrl: 'https://via.placeholder.com/150/000080/808080?text=Product+9', quantity: 0 },
  { id: 10, name: 'Bag', size: 'Large', price: 89.99, gender: 'Women', stock: 27, imageUrl: 'https://via.placeholder.com/150/800080/FFFFFF?text=Product+10', quantity: 0 },
  { id: 11, name: 'Belt', size: 'M', price: 39.99, gender: 'Men', stock: 100, imageUrl: 'https://via.placeholder.com/150/800000/FFFFFF?text=Product+11', quantity: 0 },
  { id: 12, name: 'Blouse', size: 'L', price: 64.99, gender: 'Women', stock: 48, imageUrl: 'https://via.placeholder.com/150/008080/FFFFFF?text=Product+12', quantity: 0 },
  { id: 13, name: 'Scarf', size: 'Free Size', price: 14.99, gender: 'Unisex', stock: 85, imageUrl: 'https://via.placeholder.com/150/C0C0C0/000000?text=Product+13', quantity: 0 },
  { id: 14, name: 'Shorts', size: 'M', price: 44.99, gender: 'Men', stock: 36, imageUrl: 'https://via.placeholder.com/150/FFF700/000000?text=Product+14', quantity: 0}
]
