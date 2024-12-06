import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import Img1 from "../../assets/eng.webp";
import Img2 from "../../assets/rw.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Tracks the dropdown visibility
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "Eng",
    img: Img1,
    name: "English",
  }); // Tracks the selected language

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close dropdown when clicking outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  const selectLanguage = (code, img, name) => {
    setSelectedLanguage({ code, img, name }); // Update selected language
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  // List of languages with their respective details
  const languages = [
    { code: "Eng", img: Img1, name: "Engl" },
    { code: "Kiny", img: Img2, name: "Kiny" },
  ];

  // Filter out the currently selected language
  const unselectedLanguages = languages.filter(
    (language) => language.code !== selectedLanguage.code
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light flex items-center justify-between px-10 py-4 mt-5">
      <a className="navbar-brand font-bold text-purple-600 text-xl" href="#">
        CHORISTEDASHBOARD
      </a>
      <div className="flex-grow gap-10">
        <ul className="flex gap-16 justify-center">
          <li className="nav-item">
            <a
              className="nav-link bg-purple-600 py-3 px-4 text-white rounded-full flex items-center gap-5"
              href="#Home"
            >
              <FontAwesomeIcon icon={faHouse} size="xl" /> Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link bg-purple-600 py-3 px-4 text-white rounded-full flex items-center gap-5"
              href="#Logout"
            >
              <FontAwesomeIcon icon={faUser} size="xl" /> Logout
            </a>
          </li>
          <li className="nav-item relative" ref={dropdownRef}>
            <button
              className="nav-link  bg-purple-600 py-2 px-7 text-white rounded-full flex items-center gap-5"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
            >
              <img
                src={selectedLanguage.img}
                alt={selectedLanguage.name}
                className="inline-block h-8"
              />
              {selectedLanguage.code}
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0  bg-purple-600 py-1 px-4 border  rounded-full ">
                {unselectedLanguages.map((language) => (
                  <a
                    key={language.code}
                    href={`#${language.code}`}
                    className="flex items-center gap-5 py-1 px-2 "
                    onClick={() =>
                      selectLanguage(language.code, language.img, language.name)
                    }
                  >
                    <img
                      src={language.img}
                      alt={language.name}
                      className="inline-block h-8 w-8 "
                    />
                    {language.name}
                  </a>
                ))}
              </div>
            )}
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-blue-500 py-3 px-6 border border-blue-400 rounded-full flex items-center gap-5"
              href="#Questions"
            >
              FAQ/Ask Question
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
