import React, { useState } from "react";
import Layout from "../layout/Layout";
import Content from "../components/content/Content";
import Modal from "../components/modal/Modal";

const HomePage = () => {
  let [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const loadModal = () => {
    setShowModal(!showModal);
  };

  const addToCart = (product) => {
    loadModal();
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    } else {
      let cartItem = cart.find((item) => item.id == product.id);
      cartItem.quantity = cartItem.quantity + 1;
      setCart(cart);
    }
  };

  const onChangeCartFromModal = (product, quantity) => {
    console.log("You've have changed the Cart");
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
