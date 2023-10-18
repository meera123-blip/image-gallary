import React, { useState } from 'react';
import SearchContainer from './searchContainer';
import { useDispatch } from 'react-redux/es/exports';
import { toggleDarkMode } from '../utils/appSlice';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode()); // Dispatch the toggleDarkMode action from your slice
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

 

  return (
    <div className={`container mx-auto p-4 ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex justify-between items-center">
        <div className="text-3xl lg:text-2xl text-base font-bold mb-4 lg:mb-0 lg:mr-4">
          <h1>ImageGallery</h1>
        </div>

        <div className="w-full">
          <SearchContainer isDarkMode={isDarkMode} />
        </div>

        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600"
            onClick={toggleMenu}
          >
            <svg
              className="h-3 w-3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className="hidden lg:block ">
          <ul className="flex justify-evenly">
            <li className="px-4">Explore</li>
            <li className="px-4">Collection</li>
            <li className="px-4">Community</li>
          </ul>
        </div>

        <div className="hidden lg:flex items-center">
        {isDarkMode ? <span className="mr-2">Light</span> : <span className="mr-2">Dark</span>}
 
          <button
            type="toggle"
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 ease-in-out ${
              isDarkMode ? 'bg-gray-800' : 'bg-gray-300'
            }`}
            onClick={handleDarkModeToggle}
          >
            <span
              className={`block w-4 h-4 bg-white rounded-full shadow-md transform duration-200 ease-in-out ${
                isDarkMode ? 'translate-x-5' : 'translate-x-0'
              }`}
            ></span>
          </button>
        </div>
      </div>

      <div className={isMenuOpen ? 'block lg:hidden mt-4' : 'hidden'} id="sidebar">
        <ul className="text-gray-600">
          <li className="py-2">Explore</li>
          <li className="py-2">Collection</li>
          <li className="py-2">Community</li>
        </ul>
        <button className="mt-4 bg-gray-300 text-gray-600 py-2 px-4 rounded">Dark</button>
      </div>
    </div>
  );
};

export default Header;
