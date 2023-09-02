import React, { useState } from 'react';

import { Header } from './Header';
import { Category } from './Category';
import { Products } from '../components/Products';
import { Footer } from '../components/Footer';
import { Slider } from '../components/Slider';
import GetOrganic from '../components/GetOrganic'; 
import { organicitem } from '../data/OrganicCard';
import MessageModal from '../components/MessageModal';



export const Menupage = () => {
  const [cartCounter, setCartCounter] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const [message, setMessage] = useState('');

  const [isFavorite, setIsFavorite] = useState(false);

  const increment = () => {
    setCartCounter(cartCounter + 1);
    const imageURL = 'https://example.com/your-item-image.jpg';
    setMessage(
    <div>
      <img src={`${process.env.PUBLIC_URL}/img/mark.gif`} className='mark-img' alt="Item Image" />
      <h3>This Item Added to Cart</h3>
    </div>);
    setShowModal(true);
  };
 

  const closeModal = () => {
    setShowModal(false);
    setMessage('');
  };



  return (
    <>
      <Header cartCounter={cartCounter}  />
      <Category />
      <Slider />
      <Products increment={increment}  />
      <GetOrganic organicitem={organicitem} />
      {showModal && <MessageModal message={message} onClose={closeModal} />} {/* Only render the modal when showModal is true */}
      <Footer />
    </>
  );
};
