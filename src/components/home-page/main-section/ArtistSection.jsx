import React from "react";
import Button from "@/components/common/Button";
import ChevronLeftIcon from "@/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/icons/ChevronRightIcon";
import ArtistCard from "@/components/home-page/cards/ArtistCard";

const ArtistSection = ({ artists }) => {
  return (
    <div className="sm:pb-[32px] pb-[24px]">
      <div className="flex justify-between">
        <div className="text-dark-blue font-bold sm:text-[18px] text-[13px] sm:leading-[21.98px] leading-[15.87px]">
          Trending Artist This Week
        </div>
        <div className="flex items-center gap-[10px] pb-[12px]">
          <div className="text-dark-blue sm:text-[12px] sm:leading-[14.65px] sm:font-bold text-[9px] leading-[10.99px] font-bold">
            SEE MORE
          </div>
          <Button
            icon={ChevronLeftIcon}
            additionalClasses="bg-light-grey-1 p-[7px] sm:p-[8px]"
          />
          <Button
            icon={ChevronRightIcon}
            additionalClasses="bg-light-grey-1 p-[7px] sm:p-[8px]"
          />
        </div>
      </div>
      <div className="flex overflow-x-auto w-full sm:gap-[30px] gap-[10px]">
        {artists.map((artist) => (
          <div className="flex-shrink-0" key={artist.id}>
            <ArtistCard item={artist} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistSection;
