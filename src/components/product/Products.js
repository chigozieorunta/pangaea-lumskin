import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Col, Image } from "react-bootstrap";
import ProductItem from "./ProductItem";

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      title
      image_url
      price(currency: NGN)
    }
  }
`;

const Products = ({ onAddToCart }) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return `<p>${error}</p>`;

  let updatedProducts = data.products.map((product, idx) => {
    return (product = Object.assign({ quantity: 1 }, product));
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
