import { useState, useEffect, useRef } from "react";
import { Modal } from "../Modal/Modal";
import { EnciclaPictureModal } from "../Modal/EnciclaPictureModal";

// Function to show a popup with the station information
function StationPopup({ station, bikesPercentage, appRef }) {
  const [showModal, setShowModal] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Function to close the modal
  useEffect(() => {
    if (appRef?.current) {
      showModal
        ? appRef.current.classList.add("modal_opened")
        : appRef.current.classList.remove("modal_opened");
    }
  }, [showModal]);

  return (
    <>
      {showModal && (
        <Modal>
          <EnciclaPictureModal closeModal={setShowModal} station={station} />
        </Modal>
      )}
      <div className="popup-header">{station.name}</div>
      <div className="capacity-and-bikes">
        <div className="capacity">{`Puestos: ${station.capacity}`}</div>
        <div
          className="bikes"
          style={{
            backgroundColor:
              bikesPercentage >= 75
                ? "#4caf50"
                : bikesPercentage >= 25
                ? "#ffc107"
                : "#f44336",
          }}
        >
          {`Bicicletas: ${station.bikes}`}
        </div>
      </div>
      <span className="type">{station.type}</span>
      <div>{station.address}</div>
      <div>{station.description}</div>
      <div className={station.closed ? "closed" : "open"}>
        {station.closed ? <p>cerrado</p> : <p>abierto</p>}
      </div>
      {station?.picture?.length > 5 ? (
        <button onClick={toggleModal}> Fotos </button>
      ) : null}
    </>
  );
}

export { StationPopup };
