import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Popup from './Components/Popup/Popup'; // Ensure Popup is imported

const App = () => {
  const [questionPopup, setQuestionPopup] = React.useState(false);

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
