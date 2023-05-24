import { useState } from "react";
import "../../App.css";

// SwitchControl component
function SwithControl({ name, show, onToggle }) {
  const toggleSwitch = () => {
    onToggle((prev) => !prev);
  };

  return (
    <div className="switch_control">
      <span>{name}</span>
      <label className="switch">
        <input checked={show} onChange={toggleSwitch} type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export { SwithControl };
