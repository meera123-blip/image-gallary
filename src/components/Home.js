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
    <div className="w-full p-5 pb-10 mx-auto mb-4 gap-5 columns-1 space-y-3 h-auto, sm:grid-cols-2, md:grid-cols-3 lg:columns-3">
      {imagedata.map((image) => (
        <ImageCards key={image.id} image={image} />
      ))}
    </div>
  );
};

export default Home;
