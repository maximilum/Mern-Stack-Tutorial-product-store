import React from "react";
import ProductCard from "./ProductCard.jsx";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../store/productsSlice";
import { API_BASE } from "../api/config";
import { Grid } from "@chakra-ui/react";
const Products = () => {
  const products = useSelector((state) => state.products.products);
  const dispatcher = useDispatch();
  // console.log(products);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE}/products`);
        const payload = await response.json();
        if (!response.ok) {
          throw new Error(payload.message || "Failed to fetch products");
        }
        dispatcher(setProducts(payload.data ?? []));
      } catch (error) {
        console.error("Fetch products:", error.message);
        dispatcher(setProducts([]));
      }
    };
    fetchProducts();
  }, [dispatcher]);
  return (
    <Grid
      templateColumns={{
        base: "repeat(1,1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      m="20px"
      justifyContent="space-evenly"
      justifyItems="center"
      alignItems="center"
      minH="100dvh"
      pt="60px"
    >
      {products && products.length > 0 ? (
        products.map((p) => <ProductCard key={p._id} product={p}></ProductCard>)
      ) : (
        <p>no products available</p>
      )}
    </Grid>
  );
};

export default Products;
