import React, { useState } from "react";
import CostCard from "@/components/home-page/cards/common/CostCard";
import RatingCard from "@/components/home-page/cards/common/RatingCard";
import Button from "@/components/common/Button";
import HeartIcon from "@/icons/HeartIcon";
import PlayIcon from "@/icons/PlayIcon";
import HorizontalThreeDotsIcon from "@/icons/HorizontalThreeDotsIcon";

const AlbumCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="sm:max-w-[170px] max-w-[135px] bg-white drop-shadow-md rounded">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="object-cover sm:w-[170px] w-[135px] sm:h-[170px] h-[135px] rounded-t transition-opacity duration-300"
          src={item?.image}
          alt={item?.title}
          loading="lazy"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,21,38,0.3588)] to-[rgba(7,21,38,0.69)] z-[1] rounded-t"></div>
        )}

        <div className="absolute bottom-[0.625rem] right-[0.625rem] flex items-center rounded">
          <RatingCard rating={item?.rating} />
        </div>

        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center sm:gap-[18px] gap-[10px] z-10">
            <Button icon={HeartIcon} />
            <Button icon={PlayIcon} additionalClasses={"bg-primary p-[12px]"} />
            <Button icon={HorizontalThreeDotsIcon} />
          </div>
        )}
      </div>
      <div className="sm:px-[10px] px-[8px] sm:pt-[7px] pt-[8px] sm:pb-[10px] pb-[7px]">
        <h3 className="text-dark-blue sm:text-[13px] text-[11px] leading-[20px] font-bold">
          {item?.title}
        </h3>
        <p className="text-grey-1 sm:text-[12px] text-[9px] sm:leading-[14px] sm:font-medium font-normal sm:pt-[2px]">
          {item?.subtitle}
        </p>
        <div className="sm:mt-2 mt-[3px] flex">
          <CostCard
            cost={item?.cost}
            additionalClasses={
              "bg-light-purple text-dark-blue sm:leading-[16.25px] leading-[12px] sm:text-[13px] text-[10px] sm:px-[7px] px-[3px] sm:py-[2px] py-[1px]"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
