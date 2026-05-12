import React, { useState } from "react";
import Tab from "@/components/common/Tab";
import FeatureLabel from "@/components/home-page/common/FeatureLabel";

const TopSection = () => {
  const [selectedTab, setSelectedTab] = useState("buy");
  const tabOptions = [
    { label: "Buy", value: "buy" },
    { label: "Stream", value: "stream" },
  ];

  const [featured, setFeatured] = useState([
    {
      id: "1",
      name: "Name Album",
      image: "/images/feature_sample_img_1.png",
      artist: "Kygo",
    },
    {
      id: "2",
      name: "Name",
      image: "/images/feature_sample_img_2.png",
      artist: "Artist 2",
    },
    {
      id: "3",
      name: "Starboy by The Week...",
      image: "/images/feature_sample_img_3.png",
      artist: "Artist 3",
    },
  ]);

  return (
    <>
      <div className="grid grid-cols-12 gap-[16px] pt-4">
        <p className="font-druk-wide text-dark-grey col-span-12 sm:col-span-8 text-[16px] sm:text-[24px] leading-[20.88px] sm:leading-[56px] font-normal sm:font-medium sm:text-right">
          EXPLORE <span className="hidden sm:inline">MUSIC</span>
        </p>
        <div className="col-span-12 sm:col-span-4 text-right content-center sm:mb-0 mb-[24px]">
          <Tab
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            tabs={tabOptions}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 grid-cols-1 gap-[10px] sm:pb-5 pb-4">
        {/* Main featured album */}
        <div className="relative sm:col-span-2 sm:row-span-2 sm:h-[450px] h-[160px]">
          <img
            className="rounded object-cover w-full h-full"
            src={featured[0]?.image}
            alt={featured[0]?.name}
            loading="lazy"
          />
          <div className="absolute inset-0 rounded text-white flex flex-col justify-end sm:justify-between sm:pl-[29px] pl-[21px] py-5">
            <FeatureLabel />

            <div>
              <div className="sm:text-[30px] text-[20px] sm:leading-[36.63px] leading-[24.42px] font-bold">
                <div>{featured[0]?.name}</div>
                <div className="hidden sm:block">
                  <span className="text-[24px] leading-[28.63px] font-normal">
                    from
                  </span>
                  {` ${featured[0]?.artist}`}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary featured albums */}
        {featured.slice(1, 3).map((item) => (
          <div key={item.id} className="relative sm:h-[220px] h-[160px]">
            <img
              className="rounded object-cover w-full h-full"
              src={item?.image}
              alt={item?.name}
              loading="lazy"
            />
            <div className="absolute inset-0 rounded text-white flex flex-col sm:justify-normal justify-end sm:pl-[19px] pl-[21px] py-5">
              <FeatureLabel />
              <div>
                <div className="sm:hidden text-[20px] leading-[24.42px] font-bold">
                  {item?.name}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopSection;
