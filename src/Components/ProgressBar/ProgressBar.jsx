import React, { useState } from 'react';

const ProgressBar = () => {
  const [visible, setVisible] = useState(true); // State to manage visibility

  const styles = `
    @keyframes loading {
      10% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0%);
      }
    }
  `;

  const handleClick = () => {
    setVisible(false); // Hide the component when clicked
  };

  return (
    <div
      className="flex items-center justify-center"
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: 'white',
      }}
    >
      {/* Inject animation keyframes */}
      <style>{styles}</style>

      {visible && ( // Conditionally render content
        <div className="text-center" onClick={handleClick} style={{ cursor: 'pointer' }}>
          <h1 className="text-7xl font-semibold text-blue-600 mb-8">
            Hi Welcome!
          </h1>
          <div
            className="rounded-full overflow-hidden ml-40"
            style={{
              width: '8rem',
              height: '1rem',
              backgroundColor: '#bfdbfe',
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#3b82f6',
                animation: 'loading 2s ease-in-out infinite',
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;


// import React from 'react';

// const ProgressBar = () => {  const styles = `
//     @keyframes loading {
//       10% {
//         transform: translateX(-100%);
//       }
//       100% {
//         transform: translateX(0%);
//       }
//     }
//   `;

//   return (
//     <div
//       className="flex items-center justify-center"
//       style={{
//         minHeight: '100vh', 
//         width: '100%',     
//         backgroundColor: 'white',
//       }}
//     >
//       {/* Inject animation keyframes */}
//       <style>{styles}</style>

//       <div className="text-center">
//         <h1 className="text-7xl font-semibold text-blue-600 mb-8">
//           Hi Welcome!
//         </h1>
//         <div
//           className="rounded-full overflow-hidden ml-40"
//           style={{
//             width: '8rem',     
//             height: '1rem',  
//             backgroundColor: '#bfdbfe', 
//           }}
//         >
//           <div
//             className="rounded-full"
//             style={{
//               width: '100%',          
//               height: '100%',        
//               backgroundColor: '#3b82f6', 
//               animation: 'loading 2s ease-in-out infinite', 
//             }}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProgressBar;


