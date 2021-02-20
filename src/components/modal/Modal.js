import React, { useState, useEffect } from "react";
import CloseIcon from "./CloseIcon";
import CurrencyFilter from "./CurrencyFilter";
import ModalItem from "./ModalItem";

const Modal = ({ showModal, setShowModal, onChangeCart, cart }) => {
  let [shoppingCart, setShoppingCart] = useState(cart);

  const closeModal = () => {
    setShowModal(!showModal);
  };

  const modalStyle = {
    top: 0,
    left: showModal ? 0 : "-100%",
    bottom: 0,
    right: 0,
    opacity: "0.8",
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(205, 209, 206)",
    backdropFilter: "blur(3px)",
    position: "fixed",
    display: "flex",
    justifyContent: "flex-end",
  };

  const modalContentAreaStyle = {
    backgroundColor: "#f2f2ef",
    width: 480,
    maxWidth: "100%",
    height: "100%",
    opacity: "1",
    backdropFilter: "none",
    padding: "1.5em",
    position: "fixed",
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 5000,
  };

  const modalTitle = {
    position: "relative",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#696969",
    letterSpacing: 1,
    fontSize: 10,
    textAlign: "center",
    marginBottom: 0,
    lineHeight: 1.2,
    marginBottom: "3em",
  };

  const animateModal = (status) => {
    return status
      ? { opacity: 1, transition: "all 0.4s", left: "100%" }
      : { opacity: 0, transition: "all 0.4s", left: 0 };
  };

  useEffect(() => {
    setShoppingCart(cart);
    console.log("The new shopping Cart");
    console.log(shoppingCart);
  }, [cart]);

  return (
    <section style={animateModal(showModal)}>
      <section style={modalStyle}></section>
      <section style={modalContentAreaStyle}>
        <div style={modalTitle}>
          <CloseIcon onClick={closeModal} />
          <span>Your Cart</span>
        </div>
        <div>
          <CurrencyFilter />
        </div>
        <section>
          {shoppingCart.map((product, idx) => {
            return (
              <>
                <ModalItem
                  key={idx}
                  product={product}
                  onChangeCart={onChangeCart}
                  {...product}
                />
              </>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default Modal;
