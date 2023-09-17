import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

export const Category = () => {
  return (
    <div className='container-fluid pro-class'>
      {/* Use Link components for navigation */}
      <Link to='/all-product' className="btn btn-primary mb-2 mx-2 prop-class">Everyday Value</Link>
      <Link to='/Combos' className="btn btn-secondary mb-2 mx-2 prop-class">Ala-Carte-&-Combos</Link>
      <Link to='/another-route' className="btn btn-success mb-2 mx-2 prop-class">Signature-Boxes</Link>
      <Link to='/sharing' className="btn btn-danger mb-2 mx-2 prop-class">Sharing</Link>
      <Link to='/snacks' className="btn btn-warning mb-2 mx-2 prop-class">Snacks-&-Beverages</Link>
      <Link to='/midnight' className="btn btn-warning mb-2 mx-2 prop-class">Midnight (Start at 12 am)</Link>
    </div>
  );
};
