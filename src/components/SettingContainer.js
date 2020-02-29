import React from "react";
import Setting from "./Setting";

function SettingContainer({ season, time, color }) {
  return (
    <div className="settingContainer">
      {season ? <Setting icon={season} /> : ""}
      {time ? <Setting icon={time} /> : ""}
      {color ? <Setting icon={color} /> : ""}
    </div>
  );
}
export default SettingContainer;
