import React from 'react';



export const OrganicFood = ({ organicitem }) => {
  return (
    <>
      <div className="container">
        <h2 className='heading-2'>Our Partners</h2>

      
          <div className="card" style={{ width: '18rem' }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{organicitem.title}</h5>
              <p className="card-text">{organicitem.subtitle}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
    
      </div>

    </>
  )
}
export default OrganicFood;