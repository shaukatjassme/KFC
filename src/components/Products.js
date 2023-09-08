import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Card } from '../pages/Card'; // Import your Card component
import { items } from '../data/ProductData';

export const Products = ({ increment, cartCount, }) => {
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {items.map((item, index) => ( // Add an index to map and use it as the key
          <Card key={index} item={item} increment={() => increment(item)} cartcount={cartCount} />
        ))}
      </div>
    </div>
  );
};
