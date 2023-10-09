// pages/api/add-to-cart.js

import { kv } from "@vercel/kv";

export default async function addToCart(productId) {
  // Retrieve the current cart from the KV store
  let cart = await kv.get("cart");

  // If the cart doesn't exist, create a new one
  if (!cart) {
    cart = { items: [] };
  }

  // Check if the product is already in the cart
  const itemIndex = cart.items.findIndex((item) => item.id === productId);

  // If the product is already in the cart, increment its quantity
  if (itemIndex !== -1) {
    cart.items[itemIndex].quantity++;
  } else {
    // Otherwise, add the product to the cart with a quantity of 1
    cart.items.push({ id: productId, quantity: 1 });
  }

  // Save the updated cart to the KV store
  await kv.put("cart", cart);

  // Return the updated cart
  return cart;
}
