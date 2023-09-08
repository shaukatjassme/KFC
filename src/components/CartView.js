import React from 'react';

export const CartView = ({ cartCount, selectedProducts, handlePlusButtonClick,handleMinusButtonClick }) => {

  return (
    <div>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-center" id="offcanvasRightLabel">Cart Details</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <h5>Selected Product</h5>
          {selectedProducts.length > 0 ? (
            selectedProducts.map((product, index) => (
              <div key={index}>
                <img src={product.image} className='cart-img' alt={product.title} />
                <p>{product.title}</p>
                <p>{product.desp}</p>
                <div className='d-flex my-auto algo-class'>
                  <button
                    className='btn btn-primary algo-btn'
                    onClick={() => handlePlusButtonClick(product)} // Call the function to increment the quantity
                  >
                    <i className="bi bi-plus algo-icon"></i>
                  </button>

                  <span><b> &nbsp;-&nbsp; </b></span>
                  <button
                    className='btn btn-primary algo-btn'
                    onClick={() => handleMinusButtonClick(product)}
                  >
                    <i className="bi bi-dash algo-icon"></i>
                  </button>
                 {/* Display the updated quantity here */}
                </div>
                <p>Total Price: ${product.totalPrice || product.price}</p> 
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
