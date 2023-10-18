// SearchBarHeader component

import defaultImg from '../img/default.jpg';
import SearchContainer from './searchContainer';
const SearchBarHeader = () => {


  return (
    <div className="relative h-3/6 mx-auto w-full">
      <img src={defaultImg} className="w-full object-cover sm:h-auto" alt="Background" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center mt-2 sm:mt-20">
        <div className="text-center">
          <h1 className="text-4xl text-white font-extrabold mb-4">Welcome to</h1>
          <h3 className="text-lg text-white font-bold mb-8">Image Gallery</h3>
        </div>
        <div className="w-full">
              <SearchContainer />
    </div>
      </div>
    </div>
  );
};

export default SearchBarHeader;
