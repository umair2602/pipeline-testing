import React from "react";

const CostCard = ({ additionalClasses, cost }) => {
  return (
    <div className={`rounded font-bold ${additionalClasses}`}>{`€${cost}`}</div>
  );
};

export default CostCard;
