"use client"; // required for client-side state

import { useState, useEffect } from "react";
import ProductsCard from "../POS/ProductsCard";
import CartCard from "../POS/CartCard";
import { apiRequest } from "@/app/authservice/api";

export default function POSPage() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ---------------- FETCH ALL PRODUCTS ----------------
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await apiRequest("/products", { method: "GET" });
      setProducts(res?.data || res); // adapt to your API response structure
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setError(err.message || "Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ---------------- CART HANDLERS ----------------
  const addToCart = async (item) => {
    try {
      // Fetch full product details by ID before adding to cart
      const productId = item._id || item.id;
      const productRes = await apiRequest(`/products/getProductById/${productId}`, {
        method: "GET",
      });
      const product = productRes?.data || productRes;

      if (!product) throw new Error("Product not found");

      setCart((prev) => {
        const exists = prev.find((i) => i.id === product._id);
        if (exists) {
          return prev.map((i) =>
            i.id === product._id ? { ...i, qty: i.qty + 1 } : i
          );
        }
        return [...prev, { ...product, qty: 1, id: product._id }];
      });
    } catch (err) {
      console.error("Failed to add product to cart:", err);
      alert(err.message || "Failed to add product");
    }
  };

  const removeItem = (index) => {
    if (index === "all") return setCart([]);
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item
      )
    );
  };

  // ---------------- RENDER ----------------
  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="md:-ml-60 flex flex-col md:flex-row gap-4 p-4 md:-mt-10">
      <div className="md:w-2/3">
        <ProductsCard products={products} addToCart={addToCart} />
      </div>
      <div className="md:w-1/3">
        <CartCard
          cart={cart}
          removeItem={removeItem}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
        />
      </div>
    </div>
  );
}
