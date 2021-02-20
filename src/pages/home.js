import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import Content from "../components/content/Content";
import Modal from "../components/modal/Modal";

const HomePage = () => {
  let [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const sumCart = (cart) => {
    let cost = 0;
    cart.forEach((item) => {
      cost += item.quantity * item.price;
    });
    setTotalCost(cost);
  };

  const addToCart = (product) => {
    setShowModal(!showModal);
    let cartItem = cart.find((item) => item.id == product.id);
    if (cartItem != undefined) {
      cartItem.quantity = cartItem.quantity + 1;
      setCart(cart);
      sumCart(cart);
    } else {
      setCart([...cart, product]);
      sumCart(cart);
    }
  };

  const onChangeCartFromModal = (product, quantity) => {
    const getProduct = (item) => item.id == product.id;
    let cartItem = cart.find(getProduct);
    let cartItemIndex = cart.findIndex(getProduct);
    if (quantity) {
      cartItem.quantity = quantity;
    } else {
      cart.splice(cartItemIndex, 1);
    }
    setCart(cart);
    sumCart(cart);
  };

  return (
    <Layout>
      <Content onAddToCart={addToCart} />
      <Modal
        cart={cart}
        onChangeCart={onChangeCartFromModal}
        showModal={showModal}
        setShowModal={setShowModal}
        totalCost={totalCost}
      />
    </Layout>
  );
};

export default HomePage;
