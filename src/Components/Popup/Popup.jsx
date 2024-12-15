import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ questionPopup, setQuestionPopup }) => {
  const closePopup = () => {
    setQuestionPopup(false);
  };

  return (
    <>
      {questionPopup && (
        <div className="Popup">
          {/* Background overlay */}
          <div
            className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm"
            onClick={closePopup}
          ></div>

          {/* Popup content */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 p-5 rounded-lg z-50 shadow-lg">
            <button
              className="absolute top-2 right-2 text-2xl"
              onClick={closePopup}
              aria-label="Close popup"
            >
              <IoCloseOutline />
            </button>
            <div className="popup-content">
              {/* Add your popup content here */}
              <p>This is a popup!</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
