import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

function Notice({ content, type, showHandler, showTime = 3 }) {
  /* Notification message to the screen, disappearing after set time.

    Args:
    - content (str): the message to display in the notification.
    - type (str): the type of notification to display.
    - showTime (int): the amount of time in seconds to show the notification.
    - showHandler (func): a function to handle showing/hiding the notification.

    Returns:
    - (JSX.Element): the JSX code to display the notification.
    */

  //  Keep track of whether the notification is active or not.
  const [active, setActive] = useState(true);

  //  Convert the showTime to milliseconds.
  const mileSec = showTime * 1000;

  //  Set a timeout to hide the notification after the set time.
  useEffect(() => {
    // Set the timeout.
    setTimeout(() => {
      // Hide the notification.
      setActive(false);
      showHandler({ show: false, content: "", type: "" });
    }, mileSec);
  }, []);

  //  Set the notification type.
  let noticeType = "";

  // Set the notification type based on the type prop.
  switch (type) {
    case "info":
      noticeType = "info_notice";
      break;
    case "warning":
      noticeType = "warning_notice";
      break;
    case "success":
      noticeType = "success_notice";
      break;
    case "error":
      noticeType = "error_notice";
      break;
  }

  //  Return the JSX code to display the notification.
  return (
    active &&
    ReactDOM.createPortal(
      <div className={`notice_container ${noticeType}`}>
        <p>{content}</p>
      </div>,
      document.getElementById("notice")
    )
  );
}
export { Notice };
