export const formatCost = (cost) => {
  return cost
    ? cost.toLocaleString("en-US", {
        minimumFractionDigits: 2,
      })
    : "0.00";
};
