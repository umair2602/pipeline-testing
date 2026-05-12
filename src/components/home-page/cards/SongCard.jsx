import React from "react";
import CostCard from "@/components/home-page/cards/common/CostCard";
import Button from "@/components/common/Button";
import VerticalThreeDotsIcon from "@/icons/VerticalThreeDotsIcon";

const SongCard = ({ item }) => {
  return (
    <div className="bg-white rounded border border-light-grey flex items-center justify-between">
      <div className="flex items-center">
        <img
          className="object-cover sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] rounded-s"
          src={item?.image}
          alt={item?.trackName}
          loading="lazy"
        />
        <div className="sm:leading-[20px] leading-[10.74px] sm:font-semibold font-normal sm:ps-[20px] ps-[10px]">
          <p className="text-grey sm:text-[12px] text-[9px]">
            {item?.artistName}
          </p>
          <p className="text-dark-blue sm:text-[13px] text-[10px]">
            {item?.trackName}
          </p>
        </div>
      </div>

      <div className="flex items-center sm:pe-[10px] pe-[4px]">
        <p className="sm:text-[11px] text-[9px] font-semibold text-dark-blue sm:leading-[20px] leading-[10.99px] sm:pe-[5px] pe-[10px]">
          Sold for
        </p>
        <CostCard
          cost={item?.price}
          additionalClasses={
            "bg-light-purple sm:leading-[13.43px] leading-[10.99px] sm:text-[11px] text-[9px] sm:px-[10px] px-[6px] sm:pt-[5px] pt-[3px] sm:pb-[3px] pb-[4px]"
          }
        />
        <Button
          icon={VerticalThreeDotsIcon}
          additionalClasses={"sm:mx-[14px] mx-[10px] sm:my-[7px] my-[3px]"}
        />
      </div>
    </div>
  );
};

export default SongCard;
