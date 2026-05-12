import React from "react";
import Button from "@/components/common/Button";
import ChevronLeftIcon from "@/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/icons/ChevronRightIcon";
import SongCard from "@/components/home-page/cards/SongCard";

const NewSongSection = ({ songs }) => {
  return (
    <div className="sm:pb-[32px] pb-[24px]">
      <div className="flex justify-between">
        <div className="font-bold sm:text-[18px] text-[13px] text-dark-blue sm:leading-[21.98px] leading-[15.87px]">
          Hot New Songs
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-[25px] gap-y-[10px]">
        {songs.map((song) => (
          <SongCard item={song} key={song.id} />
        ))}
      </div>
    </div>
  );
};

export default NewSongSection;
