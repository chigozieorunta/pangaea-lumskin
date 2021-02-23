import React from "react";
import ProductItem from "./ProductItem";

import { gql, useQuery } from "@apollo/client";
import { getProducts } from "../../utils/getProducts";

const Products = ({ onAddToCart, currency }) => {
  const { loading, error, data } = useQuery(getProducts(gql, currency));

  if (loading) {
    return <section style={styles.loading}>Loading ...</section>;
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

const styles = {
  loading: {
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(102, 102, 102, 0.7)",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 20,
  },
};

export default Products;
