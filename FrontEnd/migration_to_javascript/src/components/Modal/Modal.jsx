import ReactDOM from "react-dom";
import "../../App.css";

/**
 * Component to render content in a modal.
 * Creates a separate container outside the main component tree.
 *
 * @param {Object} children - Content to be displayed inside the modal.
 * @returns {ReactDOM.createPortal} - Portal element containing the modal content.
 */
function Modal({ children }) {
  return ReactDOM.createPortal(
    <>{children}</>,
    document.getElementById("modal")
  );
}

export { Modal };
