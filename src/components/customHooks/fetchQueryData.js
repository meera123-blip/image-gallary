import { useEffect, useState } from "react";
import axios from 'axios';
import { API_KEY } from "../../utils/constant";

export const useFetchQueryData = (searchQuery) => {
  const [suggestiondata, setSuggestionData] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchQueryData = async () => {
      if (searchQuery) {
        try {
          const response = await axios.get(`https://api.unsplash.com/search/photos?page=2&query=${searchQuery}&client_id=${API_KEY}`);
          setSuggestionData(response.data);
        } catch (err) {
          setError('Error fetching data.');
        }
      } else {
        setSuggestionData(null);
      }
    };

    fetchQueryData(); // Call the fetchQueryData function

  }, [searchQuery]);

  return { suggestiondata, error };
};
