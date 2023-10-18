import { useEffect, useState } from "react";
import { API_KEY } from "../../utils/constant";

export const useFetchImageData = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);


  const SEARCH_API = `https://api.unsplash.com/photos/?client_id=${API_KEY}`;


  const fetchImageData = async () => {
    try {
    ;

      const response = await fetch(SEARCH_API);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setError("Error fetching data. Please check your internet connection.");
    }
  };

  useEffect(() => {
    fetchImageData();
  }, []);

  return { result, error };
};

