import React from "react";
import ProductItem from "./ProductItem";

import { gql, useQuery } from "@apollo/client";
import { GetProducts } from "../../utils/GetProducts";

const Products = ({ onAddToCart, currency }) => {
  const { loading, error, data } = useQuery(GetProducts(gql, currency));

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>${error}</p>;
  }

  const updatedProducts = data.products.map((product) => {
    return Object.assign({ quantity: 1 }, product);
  });

  return updatedProducts
    .sort((a, b) => (a.title > b.title ? 1 : -1))
    .map((product, idx) => (
      <ProductItem
        key={idx}
        product={product}
        onAddToCart={onAddToCart}
        currency={currency}
        {...product}
      />
    ));
};

export default Products;
