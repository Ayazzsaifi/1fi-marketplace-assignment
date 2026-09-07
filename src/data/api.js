// Mock API layer.
import { PRODUCTS } from './mockProducts';

const NETWORK_DELAY_MS = 700;

// Flip this to true anytime to see the error state in the app.
const SIMULATE_ERROR = false;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchProducts() {
  await delay(NETWORK_DELAY_MS);
  if (SIMULATE_ERROR) {
    throw new Error('Unable to load Marketplace products. Please try again.');
  }
  return PRODUCTS;
}

export async function fetchProductById(id) {
  await delay(NETWORK_DELAY_MS);
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) {
    throw new Error('Product not found.');
  }
  return product;
}
