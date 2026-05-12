import React from "react";
import TopSection from "@/components/home-page/TopSection.jsx";
import MainSection from "@/components/home-page/main-section/index.jsx";

const index = () => {
  return (
    <div className="bg-background px-5 sm:px-12 md:px-20 lg:px-14 xl:px-44 2xl:px-[11.4%]">
      <TopSection />
      <MainSection />
    </div>
  );
};

export default index;
