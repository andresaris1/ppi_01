import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Redirect component.
 *
 * Redirects the user to a specified route when the component mounts.
 *
 * @param {Object} props - Component props.
 * @param {string} props.to - The route path to redirect to.
 * @returns {null} - Renders nothing.
 */

function Redirect({ to }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirects the user to the specified route
    navigate(to);
  }, [to]);

  return null;
}

export { Redirect };
