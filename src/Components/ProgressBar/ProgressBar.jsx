import React, { useState, useEffect } from "react";

const ProgressBar = ({ isVisible }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      // Reset progress to 0 before starting animation
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval); // Stop at 100%
            return 100;
          }
          return prev + 10; // Increment progress by 10%
        });
      }, 200); // Update every 200ms
    } else {
      setProgress(0); // Reset progress when hidden
    }
  }, [isVisible]);

  return (
    isVisible && (
      <div className="w-full max-w-sm mx-auto mt-10">
        <div className="mb-2 text-center text-xl font-semibold">
          Loading Progress
        </div>
        <div className="bg-gray-200 rounded-full h-6">
          <div
            className="bg-blue-600 h-6 rounded-full text-white text-sm flex items-center justify-center"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
      </div>
    )
  );
};

export default ProgressBar;
