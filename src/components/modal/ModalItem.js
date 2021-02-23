import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import { Row, Col, Image } from "react-bootstrap";
import { formatCost } from "../../utils/formatCost";

const ModalItem = ({
  title,
  price,
  quantity,
  image_url,
  onChangeCart,
  onUpdateCart,
  product,
  currency,
}) => {
  const [itemPrice, setItemPrice] = useState(price);
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const [itemCost, setItemCost] = useState(itemPrice * itemQuantity);

  useEffect(() => {
    setItemQuantity(quantity);
  }, [quantity]);

  useEffect(() => {
    setItemPrice(price);
  }, [price]);

  useEffect(() => {
    setItemCost(itemQuantity * itemPrice);
    onChangeCart(product, itemQuantity);
    onUpdateCart();
  }, [itemQuantity]);

  useEffect(() => {
    setItemCost(itemQuantity * itemPrice);
    onUpdateCart();
  }, [itemPrice]);

  const counterPlus = () => {
    setItemQuantity(itemQuantity + 1);
  };

  const counterMinus = () => {
    setItemQuantity(itemQuantity - 1);
  };

  return (
    <section
      style={{
        display: itemQuantity > 0 ? "block" : "none",
        overflowX: "hidden",
      }}
    >
      <Row style={styles.modalItem}>
        <Col xs={9}>
          <div style={styles.modalItemTitle}>{title}</div>
          <small style={styles.modalItemExcerpt}>
            Unit Price: {currency} {formatCost(itemPrice)}
          </small>
          <small style={styles.modalItemExcerpt}>
            One time purchase of Two Month supply.
          </small>
          <div style={styles.modalItemDetails}>
            <Counter
              quantity={itemQuantity}
              onCounterPlus={counterPlus}
              onCounterMinus={counterMinus}
            />
            <span style={styles.modalItemCost}>
              {currency} {formatCost(itemCost)}
            </span>
          </div>
        </Col>
        <Col xs={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              style={{ maxHeight: 75, height: 100 }}
              src={image_url}
              fluid
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

const styles = {
  modalItem: {
    backgroundColor: "#fff",
    marginBottom: 10,
    alignItems: "center",
    padding: "15px 20px",
  },

  modalItemTitle: {
    fontWeight: "700",
    lineHeight: "16px",
    marginBottom: 5,
  },

  modalItemExcerpt: {
    display: "block",
    padding: "1px 0",
  },

  modalItemDetails: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  modalItemCost: { position: "relative", top: 6, fontSize: 16, marginLeft: 20 },

  modalPadding: {},
};

export default ModalItem;
