import { useEffect, useState } from "react";
import axios from 'axios';



export const useFetchSearchData = (searchQuery) => {
    const [suggestiondata, setSuggestionData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const delayDebounceFn = setTimeout(async () => {
        if (searchQuery) {
          try {
            const response = await axios.get(`https://unsplash.com/nautocomplete/${searchQuery}?xp=plus-freq%3Acontrol`);
           
            setSuggestionData(response.data.did_you_mean);
            console.log(response.data.did_you_mean)
          } catch (err) {
            setError('Error fetching data. Please check your internet connection.');
          }
        } else {
          setSuggestionData(null);
        }
      }, 500);
  
      return () => clearTimeout(delayDebounceFn);
    }, [searchQuery]);
  
    return { suggestiondata,  error };
};
