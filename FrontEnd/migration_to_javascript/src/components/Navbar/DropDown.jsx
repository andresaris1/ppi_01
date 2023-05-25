import React, { useState } from "react";
import "../../App.css";

function DropDown({ children, optionsConfig }) {
  /* Dropdown component that displays a toggleable menu.

    Args:
        children (object): The content displayed as the dropdown toggle.
        optionsConfig (object): The configuration for the dropdown options.

    Returns:
        object: The rendered dropdown component.
    */

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={"dropdown"}>
      <a onClick={toggleMenu}> {children} </a>
      {open ? (
        <>{React.cloneElement(optionsConfig, { setOpen: setOpen })}</>
      ) : null}
    </div>
  );
}

export { DropDown };
