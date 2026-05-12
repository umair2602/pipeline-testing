import React from "react";

const Tab = ({ tabs, selectedTab, setSelectedTab }) => {
  const selectTab = (value) => {
    setSelectedTab(value);
  };

  return (
    <div className="sm:inline-flex flex rounded border border-primary overflow-hidden">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`${
            selectedTab === tab.value
              ? "bg-primary text-white"
              : "text-dark-blue"
          } sm:py-[7px] sm:min-w-[84px] sm:font-medium sm:text-[13px] sm:leading-[15.51px] py-[6px] font-medium text-[11px] leading-[13.43px] w-full`}
          onClick={() => selectTab(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tab;
