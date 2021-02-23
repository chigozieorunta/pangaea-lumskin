import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import { Row, Col, Image } from "react-bootstrap";
import { formatCost } from "../../utils/FormatCost";

const ModalItem = ({
  title,
  price,
  quantity,
  image_url,
  onChangeCart,
  onUpdateCart,
  product,
}) => {
  const [itemPrice] = useState(price);
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const [itemCost, setItemCost] = useState(itemPrice * itemQuantity);

  useEffect(() => {
    setItemQuantity(quantity);
  }, [quantity]);

  useEffect(() => {
    setItemCost(itemQuantity * itemPrice);
    onChangeCart(product, itemQuantity);
    onUpdateCart();
  }, [itemQuantity]);

  const counterPlus = () => {
    setItemQuantity(itemQuantity + 1);
  };

  const counterMinus = () => {
    setItemQuantity(itemQuantity - 1);
  };

  return (
    <section style={{ display: itemQuantity > 0 ? "block" : "none" }}>
      <Row style={styles.modalItem}>
        <Col xs={9}>
          <div style={styles.modalItemTitle}>{title}</div>
          <small style={styles.modalItemExcerpt}>
            Unit Price: N{formatCost(itemPrice)}
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
            <span style={styles.modalItemCost}>N{formatCost(itemCost)}</span>
          </div>
        </Col>
        <Col xs={3}>
          <Image src={image_url} fluid />
        </Col>
      </Row>
    </section>
  );
};

const styles = {
  modalItem: {
    padding: "15px 20px",
    backgroundColor: "#fff",
    marginBottom: 10,
    alignItems: "center",
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
};

export default ModalItem;
