import React, { useState, useEffect } from 'react';
import { useFetchSearchData } from './customHooks/FetchSuggestionData';
import { Link } from 'react-router-dom';

const SearchContainer = ({isDarkMode}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { suggestiondata, isLoading, error } = useFetchSearchData(searchQuery);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    if (searchQuery.length === 1) {
      setShowSuggestion(true);
    }
  }, [searchQuery]);



  return (
    <div className={`search-container ${isDarkMode ? 'dark' : ''}`}>
    
    <div className='w-full flex items-center flex-col'>
        <div className='w-full flex justify-center items-center flex-col'>
        <input
  type="text"
  placeholder="Search for photos..."
  className="w-full sm:w-1/2 px-4 py-2 border rounded-full"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  onFocus={() => setShowSuggestion(true)}
  onBlur={() => {
    setTimeout(() => {
      setShowSuggestion(false);
    }, 1000); // Adjust the delay time as needed
  }}
/>

      </div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {showSuggestion && searchQuery.length > 0 && suggestiondata && (
        <div className="fixed bg-white p-2 px-5 w-72 sm:w-96 shadow-lg rounded-lg border border-gray-200 mt-12 z-50" >
          <ul>
            {suggestiondata.map((item, index) => (
              <Link to={`/image/${item.query}`} key={index}>
                <li className="py-2 hover:bg-gray-100 border-b border-gray-200"  >
                  <span role="img" aria-label="search">🔍</span> {item.query}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default SearchContainer;
