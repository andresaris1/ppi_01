import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

// Component for redirect to mail address
const ButtonMailto = ({ mailto }) => {
  return (
    <Link
      // Link to the mail address
      to="#"
      // On click event
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {/* Mail incon */}
      <FaEnvelope size="2em" />
    </Link>
  );
};

export default ButtonMailto;