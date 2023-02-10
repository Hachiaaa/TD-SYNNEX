import React from "react";
import { ReactComponent as Icon } from "../../assets/ICON2_API.svg";
import "./index.scss";

const tabs = [
  "User Profile",
  "SDK Management",
  "DashBoards",
  "Terms & Conditions",
];

const Tabs = () => {
  return (
    <div>
      {tabs.map((label, index) => {
        return (
          <div className="tab" key={index}>
            <Icon className="icon" />
            <span className="label">{label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
