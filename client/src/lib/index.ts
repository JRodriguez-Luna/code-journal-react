import { products, type Product } from './data';

export function readCode(): Promise<Product[]> {
  return Promise.resolve(products);
}

export function saveCode(items: Product[]) {
  try {
    localStorage.setItem('items', JSON.stringify(items));
  } catch (error) {
    console.error('Error saving to localStorage', error);
  }
}

export function readProduct(entryId: number): Promise<Product | undefined> {
  return Promise.resolve(products.find((p) => p.entryId === entryId));
}
