import React, { useState } from "react";
import "../../App.css";

function DropDown({ children, optionsConfig }) {
  // State variable to keep track of whether the dropdown is open or closed
  const [open, setOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    // Dropdown container
    <div className={"dropdown"}>
      {/* Dropdown button */}
      <a onClick={toggleMenu}> {children} </a>

      {/* Dropdown options */}
      {open ? (
        <>
          {/* Render the options using the cloned optionsConfig element */}
          {React.cloneElement(optionsConfig, { setOpen: setOpen })}
        </>
      ) : null}
    </div>
  );
}

export { DropDown };
