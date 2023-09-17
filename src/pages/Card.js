import React from 'react'

export const Card = ({ item, increment, toggleFavorite, isFavorite  }) => {
    return (
        <div className='container-fluid mt-1'>

            <div className="card" style={{ width: "18rem", border: "1px solid #3ea38b" }}>
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.desp}
                        <span className="badge text-bg-info price-class">{item.price}</span>
                    </p>
                    <div className="wishlist favorite-icon" >
                        <i className="bi bi-heart"></i>
                    </div>
                    <button href="#" className="btn btn-primary AddToCart-btn" onClick={increment}>Add to Cart</button>


                </div>

            </div>

        </div>
    )
}
