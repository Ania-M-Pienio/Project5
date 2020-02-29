import React from "react";
import Setting from "./Setting";

function SettingContainer({ season, time, color }) {
  return (
    <div className="settingContainer">
      {season ? <Setting icon={season} size="1x"  /> : ""}
      {time ? <Setting icon={time} size="1x" /> : ""}
      {color ? <Setting icon={color} size="1x" /> : ""}
    </div>
  );
}
export default SettingContainer;
