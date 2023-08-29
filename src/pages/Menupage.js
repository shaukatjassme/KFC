import React, { useState } from 'react';
import { Header } from './Header';
import { Category } from './Category';
import { Products } from '../components/Products';
import { Footer } from '../components/Footer';
import { Slider } from '../components/Slider';
import MessageModal from '../components/MessageModal'; // Adjust the path

export const Menupage = () => {
  const [cartCounter, setCartCounter] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const [message, setMessage] = useState('');

  const [isFavorite, setIsFavorite] = useState(false);

  const increment = () => {
    setCartCounter(cartCounter + 1);
    setMessage('This Item is Added to Cart');
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
      {showModal && <MessageModal message={message} onClose={closeModal} />} {/* Only render the modal when showModal is true */}
      <Footer />
    </>
  );
};
