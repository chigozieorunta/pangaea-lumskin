import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import Modal from "../components/modal/Modal";
import Content from "../components/content/Content";

const HomePage = () => {
  let [cart, setCart] = useState([]);
  const [currency, setCurrency] = useState("NGN");
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
    } else {
      setCart([...cart, product]);
    }
  };

  const onChangeCartFromModal = (product, quantity) => {
    const getProduct = (item) => item.id == product.id;
    let cartItem = cart.find(getProduct);
    if (quantity > 0) {
      cartItem.quantity = quantity;
    } else {
      cartItem.quantity = 0;
    }
    setCart(cart);
    sumCart(cart);
  };

  const onCurrencyChange = (currency) => {
    setCurrency(currency);
  };

  useEffect(() => {
    sumCart(cart);
  }, [cart]);

  useEffect(() => {
    sumCart(cart);
  }, [currency]);

  return (
    <Layout cart={cart}>
      <Content onAddToCart={addToCart} currency={currency} />
      <Modal
        cart={cart}
        currency={currency}
        onChangeCart={onChangeCartFromModal}
        onCurrencyChange={onCurrencyChange}
        showModal={showModal}
        setShowModal={setShowModal}
        totalCost={totalCost}
      />
    </Layout>
  );
};

export default HomePage;
