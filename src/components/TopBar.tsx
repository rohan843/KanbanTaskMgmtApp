import React from "react";

const TopBar: React.FC = () => {
  return (
    <div className="w-full h-[97px] top-bar flex flex-row">
      <div className="w-[300px] h-full bottom-border right-border"></div>
      <div className="grow h-full flex flex-row bottom-border">
        <div className="grow flex items-center justify-start pl-[32px]">
          <p>Active Board</p>
        </div>
        <div className="w-20"></div>
        <div className="w-[60px] h-full flex justify-center items-center">
          <div className="flex flex-col w-max h-max cursor-pointer px-1">
            <div className="w-1 h-1 rounded-full menu-dots-bg mb-1"></div>
            <div className="w-1 h-1 rounded-full menu-dots-bg mb-1"></div>
            <div className="w-1 h-1 rounded-full menu-dots-bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
