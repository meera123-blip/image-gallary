import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchQueryData } from './customHooks/fetchQueryData';
import ImageCards from './ImageCards';
import ShimmerUI from './ShimmerUI';

const ListOfSearchResult = () => {
  const { query } = useParams();
  const { suggestiondata,error } = useFetchQueryData(query);

  if (!suggestiondata) {
    return <ShimmerUI/>;
  }
  if(error)
  {
    console.log(error);
  }

  if(suggestiondata && suggestiondata.length === 0)
  {
    return <div>No data Found</div>
  }

  return (
    <div className='mt-8'>
      <div className=' text-4xl font-semibold ml-10 pl-14'>
        <h1>{query}</h1>
      </div>
      <div className='w-full p-5 pb-10 mx-auto mb-4 gap-5 columns-1 space-y-3 h-auto, sm:grid-cols-2, md:grid-cols-3 lg:columns-3'>
        {suggestiondata?.results?.map((image) => (
          <ImageCards key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default ListOfSearchResult;
