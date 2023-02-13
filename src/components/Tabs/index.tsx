import React, { useState } from "react";
import { ReactComponent as Icon } from "../../assets/ICON2_API.svg";
import "./index.scss";

const tabs = [
  "User Profile",
  "SDK Management",
  "DashBoards",
  "Terms & Conditions",
];

const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(1);
  return (
    <div>
      {tabs.map((label, index) => {
        return (
          <div
            className={`tab ${activeTabIndex === index ? "tab-active" : ""}`}
            key={index}
            onClick={() => setActiveTabIndex(index)}
          >
            <Icon className="tab-icon" />
            <span
              className={`tab-label ${
                activeTabIndex === index ? "label-active" : ""
              }`}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
