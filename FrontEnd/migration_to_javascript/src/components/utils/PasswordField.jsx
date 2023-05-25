import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

/**
 * PasswordField component.
 *
 * Renders an input field for password entry with a toggle button to show/hide the password.
 *
 * @param {Object} props - Component props.
 * @param {string} props.value - The current value of the password field.
 * @param {string} props.name - The name attribute for the password field.
 * @param {Function} props.onChange - Event handler for the password field's onChange event.
 * @param {string} props.placeholder - The placeholder text for the password field.
 * @returns {JSX.Element} - The rendered PasswordField component.
 */

function PasswordField({ value, name, onChange, placeholder }) {
  const [show, setShow] = useState(false);

  // Toggle password visibility
  const handleShow = () => setShow(!show);

  return (
    <div className="mt-2 relative">
      <input
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={show ? "text" : "password"}
        required
        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-green sm:text-sm sm:leading-6"
      />
      <button
        type="button"
        className="absolute top-1/2 right-3 transform -translate-y-1/2"
      >
        {show ? (
          <HiEyeOff
            onClick={handleShow}
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        ) : (
          <HiEye
            onClick={handleShow}
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        )}
      </button>
    </div>
  );
}

export { PasswordField };
