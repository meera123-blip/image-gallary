import React from 'react';
import { useFetchImageData } from './customHooks/fetchImageData';
import ImageCards from './ImageCards';
import ShimmerUI from './ShimmerUI';

const Home = () => {
  const { imagedata, error } = useFetchImageData();

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!imagedata) {
    return <ShimmerUI />;
  }

  if (imagedata && imagedata.length === 0) {
    return <div>No data Found!!!</div>;
  }

  if (imagedata) {
    console.log("home", imagedata);
  }

  return (
    <div className='p-5 md:p-10 h-screen'>
    <div className="columns-1 gap-5 lg:gap-8 sm:colums-2 lg:colums-3 md:columns-2 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 space-y-5   grid-rows-2">
      {imagedata.map((image) => (
        <ImageCards key={image.id} image={image} />
      ))}
    </div>
    </div>
  
  
  );
};

export default Home;
