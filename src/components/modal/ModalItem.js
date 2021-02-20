import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import { Image } from "react-bootstrap";

const ModalItem = ({
  title,
  price,
  quantity,
  image_url,
  onChangeCart,
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
  }, [itemQuantity]);

  const counterPlus = () => {
    setItemQuantity(itemQuantity + 1);
  };

  const counterMinus = () => {
    setItemQuantity(itemQuantity - 1);
  };

  const formatCost = (cost) => {
    return cost
      ? cost.toLocaleString("en-US", {
          minimumFractionDigits: 2,
        })
      : "0.00";
  };

  return (
    <div style={{ display: itemQuantity > 0 ? "block" : "none" }}>
      <div style={styles.modalItem}>
        <div>
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
        </div>
        <div>
          <Image style={{ height: 80 }} src={image_url} fluid />
        </div>
      </div>
    </div>
  );
};

const styles = {
  modalItem: {
    padding: "15px 20px",
    backgroundColor: "#fff",
    marginBottom: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  modalItemTitle: {
    fontWeight: "700",
  },

  modalItemExcerpt: {
    display: "block",
    padding: "1px 0",
  },

  modalItemDetails: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  modalItemCost: { position: "relative", top: 6, fontSize: 16 },
};

export default ModalItem;
