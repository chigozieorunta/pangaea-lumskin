import React, { useState, useEffect } from "react";
import CloseIcon from "./CloseIcon";
import CurrencyFilter from "./CurrencyFilter";
import ModalItem from "./ModalItem";
import ModalFooter from "./ModalFooter";

const Modal = ({
  showModal,
  setShowModal,
  cart,
  totalCost,
  onChangeCart,
  onCurrencyChange,
}) => {
  let [shoppingCart, setShoppingCart] = useState(cart);

  const closeModal = () => {
    setShowModal(!showModal);
  };

  const animateModal = (status) => {
    return status
      ? { opacity: 1, transition: "all 0.4s", left: "100%" }
      : { opacity: 0, transition: "all 0.4s", left: 0 };
  };

  const updateCart = () => {
    setShoppingCart(cart);
    console.log(cart);
  };

  useEffect(() => {
    setShoppingCart(cart);
  }, [cart]);

  return (
    <section style={animateModal(showModal)}>
      <section
        style={{
          left: showModal ? 0 : "-100%",
          top: 0,
          bottom: 0,
          right: 0,
          opacity: "0.8",
          width: "100%",
          backgroundColor: "rgb(205, 209, 206)",
          backdropFilter: "blur(3px)",
          position: "fixed",
        }}
      ></section>
      <section
        style={{
          backgroundColor: "#f2f2ef",
          width: 480,
          maxWidth: "100%",
          height: "100%",
          opacity: "1",
          backdropFilter: "none",
          padding: "1.5em",
          position: "fixed",
          right: showModal ? 0 : "-480px",
          top: 0,
          bottom: 0,
          zIndex: 5000,
          transition: "all 0.3s",
        }}
      >
        <div style={styles.modalTitle}>
          <CloseIcon onClick={closeModal} />
          <span>Your Cart</span>
        </div>
        <div>
          <CurrencyFilter onCurrencyChange={onCurrencyChange} />
        </div>
        <section style={styles.modalContent}>
          {shoppingCart.map((product, idx) => {
            return (
              <ModalItem
                key={idx}
                product={product}
                onChangeCart={onChangeCart}
                onUpdateCart={updateCart}
                {...product}
              />
            );
          })}
        </section>
        <ModalFooter totalCost={totalCost} />
      </section>
    </section>
  );
};

const styles = {
  modalContent: {
    overflowY: "auto",
    height: "calc(100% - 260px)",
    marginTop: 10,
  },

  modalContainer: {
    top: 0,
    bottom: 0,
    right: 0,
    opacity: "0.8",
    width: "100%",
    backgroundColor: "rgb(205, 209, 206)",
    backdropFilter: "blur(3px)",
    position: "fixed",
  },

  modalContentAreaStyle: {
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
  },

  modalTitle: {
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
  },
};

export default Modal;
