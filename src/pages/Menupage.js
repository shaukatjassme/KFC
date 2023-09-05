import React, { useState } from 'react';

import { Header } from './Header';
import { Category } from './Category';
import { Products } from '../components/Products';
import { Footer } from '../components/Footer';
import { Slider } from '../components/Slider';
import GetOrganic from '../components/GetOrganic'; 
import { organicitem } from '../data/OrganicCard';
import MessageModal from '../components/MessageModal';
import { CartView } from '../components/CartView';

export const Menupage = () => {
  const [cartCount, setCartCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]); // Initialize as an empty array
  const [message, setMessage] = useState('');

  const [isFavorite, setIsFavorite] = useState(false);

const increment = (item) => {
  // Check if the item is already in the selectedProducts array
  const isItemAlreadySelected = selectedProducts.some((selectedItem) => selectedItem.id === item.id);

  if (!isItemAlreadySelected) {
    setCartCount((prevCartCount) => prevCartCount + 1); 
    setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, item]); // Add the selected product to the array
    const imageURL = 'https://example.com/your-item-image.jpg';
    setMessage(
      <div>
        <img src={`${process.env.PUBLIC_URL}/img/mark.gif`} className='mark-img' alt="Item Image" />
        <h3>This Item Added to Cart</h3>
      </div>
    );
    setShowModal(true);
  } else {
    // Handle the case when the item is already in the cart (e.g., show a message)
    setMessage('This item is already in your cart.'); // Update the message accordingly
    setShowModal(true);
  }
};


  const closeModal = () => {
    setShowModal(false);
    setMessage('');
  };

  return (
    <>
      <Header cartCount={cartCount} />
      <Category />
      <Slider />
      {selectedProducts.length > 0 && (
        <CartView cartCount={cartCount} selectedProducts={selectedProducts} /> // Pass the array of selected products
      )}
      <Products increment={increment} />
      <GetOrganic organicitem={organicitem} />
      {showModal && <MessageModal message={message} onClose={closeModal} />}
      <Footer />
    </>
  );
};
