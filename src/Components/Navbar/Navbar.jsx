import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import Img1 from "../../assets/eng.webp";
import Img2 from "../../assets/rw.png";
import Img3 from "../../assets/question 1.png";
import ProfileSidebar from "../Hero/ProfileSidebar";
const Navbar = ({ handlequestionPopup }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "Eng",
    img: Img1,
    name: "English",
  });

  const dropdownRef = useRef(null);

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

  const languages = [
    { code: "Eng", img: Img1, name: "Engl" },
    { code: "Kiny", img: Img2, name: "Kiny" },
  ];

  const unselectedLanguages = languages.filter(
    (language) => language.code !== selectedLanguage.code
  );

  return (
    <div className="flex h-screen ml-10 mb-10 ">
      {/* Sidebar Section */}
      <aside className="flex flex-col">
        {/* Title */}
        <div className="p-8 bg-light mt-5">
          <a
            className="font-bold text-purple-600 text-2xl block text-center"
            href="#"
          >
            CHORISTEDASHBOARD
          </a>
        </div>
        {/* ProfileSidebar */}
        <div className="">
         <ProfileSidebar />
        </div>
      </aside>

      {/* Main Content Section */}
      <div className="flex flex-col  flex-grow mr-16">
        {/* Navigation Bar */}
        <nav className="flex items-center justify-end  px-10 py-4">
          <ul className="flex gap-14 items-center mt-5">
            <li className="nav-item">
              <a
                className="nav-link bg-[#4361ee] py-3 px-4 text-white rounded-full flex items-center gap-4"
                href="#Home"
              >
                <FontAwesomeIcon icon={faHouse} size="lg" /> Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link bg-purple-600 py-3 px-4 text-white rounded-full flex items-center gap-2"
                href="#Logout"
              >
                <FontAwesomeIcon icon={faUser} size="lg" /> Logout
              </a>
            </li>
            <li className="nav-item relative" ref={dropdownRef}>
              <button
                className={`nav-link bg-purple-600 py-3 px-7 text-white flex items-center justify-center gap-2 rounded-full`}
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
                <div className="absolute left-0 bg-purple-600 py-1 px-3 border rounded-b-md">
                  {unselectedLanguages.map((language) => (
                    <a
                      key={language.code}
                      href={`#${language.code}`}
                      className="flex items-center gap-2 py-1 px-3"
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
                onClick={handlequestionPopup}
                className="text-blue-700 py-2 px-4 border border-blue-600 rounded-full flex items-center gap-2"
              >
                <img src={Img3} alt="FAQ" className="h-5 w-5" />
                FAQ/Ask Question
              </button>
            </li>
          </ul>
        </nav>

        {/* Content Section */}
        <div className="flex-grow ">
          {/* Additional content can go here */}
          <div className="flex-grow ml-16">
             <h2 className="text-2xl font-bold mt-4 ">Presence Details</h2>
             <div className="ml-3">
              <button className="px-4 py-2 mt-5 border border-purple-700 rounded-full text-purple-500">
                Check Previous Date
              </button>
              <button className="px-4 py-2 rounded-full border border-purple-700 text-purple-500 ml-5"> 
                Attendance 63%
              </button>
              <button className="px-4 py-2 rounded-full border border-purple-700 text-white bg-purple-600 ml-5">
                Choir Events
              </button>
             </div>
             <table className="h-60 w-full divide-y divide-gray-200 mt-5 border ">
              <thead className="bg-gray-100  gap-10 ">
                <tr>
                
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Reason</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Punishment</th>
                  <th className="px-10 py-3 ml-10 text-lef text-xs font-medium text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white  ">
              
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
                    <td className="px-4 py-4  text-sm text-gray-500">{record.date}</td>
                    <td className="px-8 py-4  text-sm text-gray-500">-</td>
                    <td className="px-6 py-4  text-sm text-gray-500">
                      <span className={
                        record.reason === "On Time" ? "text-green-800" :
                        record.reason === "Late Arrival" ? "text-yellow-400" : "text-red-600"
                      }>
                        {record.reason}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{record.punishment}</td>
                    <td className="px-8 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="bg-[#4361ee] text-white px-4 py-2 mr-10 rounded-full">Claim</button>
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
