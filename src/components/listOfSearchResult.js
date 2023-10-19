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
      <div className='columns-1 gap-5 lg:gap-8 sm:colums-2 lg:colums-3 md:columns-2 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 space-y-5 '>
        {suggestiondata?.results?.map((image) => (
          <ImageCards key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default ListOfSearchResult;
