import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../utils/GetProducts";
import ProductItem from "./ProductItem";

const Products = ({ onAddToCart }) => {
  const results = useQuery(GET_PRODUCTS);

  switch (results) {
    case results.results:
      return <p>Loading...</p>;

    case results.error:
      return `<p>${results.error}</p>`;
  }

  const updatedProducts = results.data.products.map((product, idx) => {
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
