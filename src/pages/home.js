import React, { useState } from "react";
import Layout from "../layout/Layout";
import Content from "../components/content/Content";
import Modal from "../components/modal/Modal";

const HomePage = () => {
  let [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

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
    let cartItemIndex = cart.findIndex(getProduct);
    if (quantity) {
      cartItem.quantity = quantity;
    } else {
      cart.splice(cartItemIndex, 1);
    }
    setCart(cart);
  };

  return (
    <Layout>
      <Content onAddToCart={addToCart} />
      <Modal
        cart={cart}
        onChangeCart={onChangeCartFromModal}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </Layout>
  );
};

export default HomePage;
