import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart} from '@fortawesome/free-solid-svg-icons'
import Modal from './Modal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { faCircleDown} from '@fortawesome/free-solid-svg-icons'
import {saveAs} from "file-saver";


const ImageCards = ({ image }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const fetchIndividualData = async (id) => {
    const SEARCH_API = `https://api.unsplash.com/photos/${id}?client_id=LPBL__lBTHKccIeJRdz9-2pYb_yWBopINpnaMksYrKk`;
    try {
      const response = await fetch(SEARCH_API);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setModalData(data);
    } catch (error) {
      console.error("Error fetching data. Please check your internet connection.", error);
    }
  };

  const openModal = (id) => {
    setShowModal(true);
    fetchIndividualData(id);
  };
    const handleDownload = (imageUrl) => {
      saveAs(imageUrl, "image");
    };



  return (
    <div key={image.id} className=" cursor-pointer border border-gray-200 rounded-lg relative">
      <LazyLoadImage
        effect="blur" 
        src={image?.urls?.small}
        alt={image?.alt_description}
        className="w-full h-full  rounded-lg opacity-75 hover:opacity-100"
        onClick={() => openModal(image.id)}
      />
      <button
            className="py-2 px-4 absolute top-10 right-12 z-10"
            onClick={() => handleDownload(modalData?.links?.download)}
          ><FontAwesomeIcon icon={faCircleDown} color='white'/>
          </button>
      <div className="flex justify-between items-center mt-2 pr-2">
        <div className="flex items-center -ms-flexbox p-4">
          <img
            src={image?.user?.profile_image?.medium}
            alt={image?.user.name}
            className="w-8 h-8 rounded-full mr-2"
          />
         
          <div>
          
            <p className="text-sm font-bold">{image?.user?.name}</p>
            <p className="text-xs text-gray-600">@{image?.user.username}</p>
          </div>
        </div>
        <div className='flex justify-around'>
          <FontAwesomeIcon icon={faHeart} color='red' />
          <p className="text-sm ml-3">{image.likes}</p>
        </div>
      </div>
      {showModal && modalData &&(  <Modal open={showModal} onClose={()=>setShowModal(false) } data = {modalData}/>)}
    </div>
  );
};

export default ImageCards;
