import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Popup from "./Components/Popup/Popup";

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);  

  
  const toggleIsPopupOpen = () => {
    setIsPopupOpen((prev) => {
      const newState = !prev;
      console.log("Popup Toggled:", newState); // Debug log
      return newState;
    });
  };

  return (
    <div>
      <Navbar handleIsPopupOpen={toggleIsPopupOpen} />
      <Popup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
    </div>
  );
};

export default App;




