import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../utils/GetProducts";
import ProductItem from "./ProductItem";

const Products = ({ onAddToCart }) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>${error}</p>;
  }

  const updatedProducts = data.products.map((product, idx) => {
    return Object.assign({ quantity: 1 }, product);
  });

  return updatedProducts
    .sort((a, b) => (a.title > b.title ? 1 : -1))
    .map((product, idx) => (
      <ProductItem
        key={idx}
        product={product}
        onAddToCart={onAddToCart}
        {...product}
      />
    ));
};

export default Products;
