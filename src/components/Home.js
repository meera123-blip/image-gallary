import React from 'react';
import { useFetchImageData } from './customHooks/fetchImageData';
import ImageCards from './ImageCards';
import ShimmerUI from './ShimmerUI';


const Home = () => {
  const {  imageData, error } = useFetchImageData();

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!imageData) {
    return <ShimmerUI/>
  }

  if(imageData && imageData.length === 0)
  {
    return <div>No data Found!!!</div>
  }
if(imageData)
{
  console.log("home",imageData);
}
 

  return (
   
    <div className="w-full p-5 pb-10 mx-auto mb-4 gap-5 columns-1 space-y-3 h-auto, sm:grid-cols-2, md:grid-cols-3 lg:columns-3">
      {imageData.map((image) => (
        <ImageCards key={image.id} image={image} />
      ))}
    </div>
    
  );
};

export default Home;
