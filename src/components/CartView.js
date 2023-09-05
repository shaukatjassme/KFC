import React from 'react';

export const CartView = ({ cartCount, selectedProducts }) => {
  return (
    <div>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-center" id="offcanvasRightLabel">Cart Details</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {/* <p>Cart Count: {cartCount}</p> */}
          <h5>Selected Product</h5>
          {selectedProducts.length > 0 ? (
            selectedProducts.map((product, index) => (
              <div key={index}>
                
                <img src={product.image} className='cart-img' alt={product.title} />
                <p>{product.title}</p>
                <p>{product.desp}</p>
                <p>{product.price}</p>
                {/* Add more product details as needed */}
              </div>
            ))
          ) : (
            <p>No products selected</p>
          )}
        </div>
      </div>
    </div>
  );
};
