import React from "react";

const Badge = ({ total }) => {
  return total ? (
    <div style={styles.badgeCircleStyle}>
      <span style={styles.badgeValueStyle}>{total}</span>
    </div>
  ) : (
    ""
  );
};

const styles = {
  badgeValueStyle: { position: "relative", top: -3, fontSize: 12 },

  badgeCircleStyle: {
    display: "flex",
    backgroundColor: "red",
    color: "#fff",
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    position: "relative",
    left: -10,
  },
};

export default Badge;
