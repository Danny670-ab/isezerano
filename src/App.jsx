import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Popup from './Components/Popup/Popup';

const App = () => {
  const [questionPopup, setQuestionPopup] = useState(false);

  const handleHomeClick = () => {
    setShowComponents(false); // Hide components when Home button is clicked
  };

  const toggleQuestionPopup = () => {
    setQuestionPopup(!questionPopup);
    console.log("Popup Toggled:", questionPopup);
  };

  return (
    <div>
      
          <Navbar handleQuestionPopup={toggleQuestionPopup} />
          <Popup questionPopup={questionPopup} setQuestionPopup={setQuestionPopup} />
      
  
    </div>
  );
};

export default App;
