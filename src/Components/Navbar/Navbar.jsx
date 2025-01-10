import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import Img1 from "../../assets/eng.webp";
import Img2 from "../../assets/rw.png";
import Img3 from "../../assets/question 1.png";
import ProfileSidebar from "../Hero/ProfileSidebar";
import ProgressBar from "../ProgressBar/ProgressBar";

const Navbar = ({  handleIsPopupOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "Eng",
    img: Img1,
    name: "English",
  });

  const [isProgressVisible, setIsProgressVisible] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState (false);
  const [selectedDate, setSelectedDate] = useState (null)
   

  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLanguage = (code, img, name) => {
    setSelectedLanguage({ code, img, name });
    setIsDropdownOpen(false);
  };

  const handleHomeClick = () => {
    setIsProgressVisible(true);
    setTimeout(() => setIsProgressVisible(false), 3000); // Hide after 3 seconds
  };

  const languages = [
    { code: "Eng", img: Img1, name: "Engl" },
    { code: "Kiny", img: Img2, name: "Kiny" },
  ];

  const unselectedLanguages = languages.filter(
    (language) => language.code !== selectedLanguage.code
  );

   const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
   };
  return (
    <div className="flex h-screen ml-10">
      {/* Sidebar Section */}
      <aside className="flex flex-col">
        {/* Title */}
        <div className="bg-light mt-14">
          <a
            className="font-bold  text-2xl block text-center"
            href="#"
            style={{color: "#3D5AF1"}}
          >
            CHORISTE DASHBOARD 
          </a>
        </div>
        {/* ProfileSidebar */}
        <div>
          <ProfileSidebar />
        </div>
      </aside>

      {/* Main Content Section */}
      <div className="flex flex-col flex-grow mr-16">
        {/* Navigation Bar */}
        <nav className="flex items-center justify-end px-10 py-4">
          <ul className="flex gap-14 items-center mt-5">
            <li className="nav-item">
              <button
                className="nav-link  rounded-full flex items-center gap-4"
                onClick={handleHomeClick}
                
                style={{
                padding: '10px 20px',
                backgroundColor: '#3D5AF1',
                color: 'white',
                cursor: 'pointer',
                }}
              
              >
                <FontAwesomeIcon icon={faHouse} size="lg" /> Home
              </button>
            </li>
            <li className="nav-item">
              <a
                className="nav-link  rounded-full flex items-center gap-2"
                href="#Logout"
                style={{
                padding: '10px 20px',
                backgroundColor: '#3D5AF1',
                color: 'white',
                cursor: 'pointer',
                }}
           
              >
                <FontAwesomeIcon icon={faUser} size="lg" /> Logout
              </a>
            </li>
            <li className="nav-item relative" ref={dropdownRef}>
              <button
                style={{
                  padding: '10px 30px',
                  backgroundColor: '#3D5AF1',
                  color: 'white',
                  cursor: 'pointer',
                 }}
           
                className={`nav-link  flex items-center justify-center gap-3 rounded-full`}
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
              >
                <img
                  src={selectedLanguage.img}
                  alt={selectedLanguage.name}
                  className="inline-block h-6"
                />
                {selectedLanguage.code}
              </button>
              {isDropdownOpen && (
                <div className="absolute  py-1 px-3 border rounded-b-md"
                style={{backgroundColor: "#3D5AF1", color: "white", }}
                >
                  {unselectedLanguages.map((language) => (
                    <a
                      key={language.code}
                      href={`#${language.code}`}
                      className="flex items-center justify-center gap-2 py-1 px-3"
                      onClick={() =>
                        selectLanguage(language.code, language.img, language.name)
                      }
                    >
                      <img
                        src={language.img}
                        alt={language.name}
                        className="inline-block h-6 w-6"
                      />
                      {language.name}
                    </a>
                  ))}
                </div>
              )}
            </li>
            <li className="nav-item">
              <button
                onClick={() => {
                  console.log("FAQ Button Clicked");
                  handleIsPopupOpen();
                }}
                className="text-blue-700 py-2 px-5 border border-blue-600 rounded-full flex justify-center items-center gap-1 "
              >
                <img src={Img3} alt="FAQ" className="  h-7 w-7" />
                FAQ/Ask Question
              </button>
            </li>
          </ul>
        </nav>
             {/*popup */}
        
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="border border-[#3D5AF1] mt-9 ml-9 mr-9 " style={{width:"80vh", height: "40vh"}}>
              <p className="ml-5 mt-5 font-serif">Leave the reason for claiming!!</p>
                
                  <input
                    type="text" name="hhh"
                  />
              
              </div>
              <div className="flex mt-5 gap-4 justify-center">
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded"
                  onClick={handlePopupToggle}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#3D5AF1] rounded-full text-white py-2 px-4 "
                  onClick={() => {
                    handlePopupToggle();
                    console.log("Claim confirmed");
                  }}
                >
                  Click to Claim
                </button>
              </div>
            </div>
          </div>
        )}



        <div className="mt-5">
          {isProgressVisible && <ProgressBar />}
        </div>

        {/* Content Section */}
        <div className="flex-grow">
          {/* Additional content can go here */}
          <div className="flex-grow ml-16">
            <h2 className="text-2xl font-bold">Presence Details</h2>
            <div className="ml-3">
              <button className="px-4 py-2 mt-5 border border-[#3D5AF1] rounded-full text-[#3D5AF1]">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                placeholderText="Select a date"
                className="borde border[#3D5AF1] rounded-ful px- py-"
              />

                Check Previous Date
              </button>
              <button className="px-4 py-2 rounded-full border border-[#3D5AF1] text-[#3D5AF1] ml-5">
                Attendance 63%
              </button>
              <button className="px-4 py-2 rounded-full text-white bg-[#3D5AF1] ml-5">
                Choir Events
              </button>
            </div>
            <table className="h-50 w-full mt-5  border rounded-md mb-20 ">
            {!isPopupOpen && (
            <thead className="bg-[#DEE1E6] gap-10">
              <tr className="relative">
               <th className="px-4 py-2 text-left text-xs font-medium text-[#565E6C] uppercase tracking-wider">
                   Date
               </th>
              <th className="px-6 py-2 text-left text-xs font-medium text-[#565E6C] uppercase tracking-wider">
                  Time
              </th>
              <th className="px-6 py-2 text-left text-xs font-medium text-[#565E6C] uppercase tracking-wider">
                 Reason
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-[#565E6C] uppercase tracking-wider">
                 Punishment
             </th>
             <th className="px-20 py-3 mr-10 text-left text-xs font-medium text-[#565E6C] uppercase tracking-wider">
                Actions
             </th>
            </tr>
           </thead>
          )}


              <tbody className="bg-white">
                {[
                  { date: "14/10/2024", reason: "On Time", punishment: "Good" },
                  { date: "15/10/2024", reason: "Late Arrival", punishment: "Neglect" },
                  { date: "16/10/2024", reason: "Absent", punishment: "Disrespect" },
                  { date: "17/10/2024", reason: "On Time", punishment: "Good" },
                  { date: "18/10/2024", reason: "On Time", punishment: "Good" },
                  { date: "19/10/2024", reason: "On Time", punishment: "Good" },
                  { date: "20/10/2024", reason: "Late Arrival", punishment: "Neglect" },
                ].map((record, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-sm text-gray-500">
                      {record.date}
                    </td>
                    <td className="px-8 py-2 text-sm text-gray-500">-</td>
                    <td className="px-6 py-3 text-sm text-gray-500">
                      <span
                        className={
                          record.reason === "On Time"
                            ? "text-[#31b880]"
                            : record.reason === "Late Arrival"
                            ? "text-[#A9B024]"
                            : "text-[#FF0606]"
                        }
                      >
                        {record.reason}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-[171A1F]">
                      {record.punishment}
                    </td>
                    <td className="px-8 py-3 whitespace-nowrap text-right text-sm font-medium">
                      <button 
                         onClick={handlePopupToggle}         
                        className="bg-[#3D5AF1] text-white px-4 py-2 mr-10 rounded-full">
                        Claim
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
