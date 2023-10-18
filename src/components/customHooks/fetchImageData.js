// import { useEffect, useState } from "react";
// import { API_KEY } from "../../utils/constant";

// export const useFetchImageData = () => {
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);


//   const SEARCH_API = `https://api.unsplash.com/photos/?client_id=${API_KEY}`;


//   const fetchImageData = async () => {
//     try {
//     ;

//       const response = await fetch(SEARCH_API);

//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }

//       const data = await response.json();
//       setResult(data);
//     } catch (error) {
//       setError("Error fetching data. Please check your internet connection.");
//     }
//   };

//   useEffect(() => {
//     fetchImageData();
//   }, []);

//   return { result, error };
// };


import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../../utils/constant";

export const useFetchImageData = () => {
  const [imagedata, setImageData] = useState(null);
  const [error, setError] = useState(null);

  const fetchImageData = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/?client_id=${API_KEY}`
      );
      setImageData(response.data);
    } catch (err) {
      setError('Error fetching data.');
    }
  };

  useEffect(() => {
    fetchImageData();
  }, []); // Empty dependency array to run effect only once

  return { imagedata, error };
};
