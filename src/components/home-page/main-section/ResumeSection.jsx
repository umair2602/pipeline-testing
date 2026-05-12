import React from "react";
import Button from "@/components/common/Button";
import ChevronLeftIcon from "@/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/icons/ChevronRightIcon";
import AlbumCard from "@/components/home-page/cards/AlbumCard";

const ResumeSection = ({ albums }) => {
  return (
    <div className="sm:pb-[32px] pb-[24px]">
      <div className="flex justify-between">
        <div className="font-bold text-dark-blue sm:text-[18px] text-[13px] sm:leading-[21.98px] leading-[15.87px]">
          Continue Listening to
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
        {albums.map((album) => (
          <div className="flex-shrink-0" key={album.id}>
            <AlbumCard item={album} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeSection;
