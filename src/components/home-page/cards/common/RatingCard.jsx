import React from "react";
import StarIcon from "@/icons/StarIcon";

const RatingCard = ({ rating }) => {
  return (
    <div
      className={`inline-flex items-center justify-center rounded gap-[5px] bg-grey text-white sm:leading-[14.65px] leading-[12.21px] sm:text-[12px] text-[8px] font-bold py-[2px] sm:px-[8px] px-[6px]`}
    >
      <StarIcon />
      <div className="flex items-center justify-center">{rating}</div>
    </div>
  );
};

export default RatingCard;
