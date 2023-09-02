import React from 'react';

// Define the array of organic items
const organicItems = [
  {
    id: 1,
    title: 'Organic',
    subtitle: 'Meat & Milk',
    desc: 'Premium quality meat & milk',
    backgroundImage: `${process.env.PUBLIC_URL}/img/pic1.jpg`, // Replace with the actual path to your image
  },
  {
    id: 2,
    title: 'Organic',
    subtitle: 'Vegetable',
    desc: 'Premium quality meat & milk',
    backgroundImage: `${process.env.PUBLIC_URL}/img/pic2.jpg`, // Replace with the actual path to your image
  },
  {
    id: 3,
    title: 'Organic',
    subtitle: 'Meat & Milk',
    desc: 'Premium quality meat & milk',
    backgroundImage: `${process.env.PUBLIC_URL}/img/pic3.jpg`, // Replace with the actual path to your image
  },
  // Add more items as needed
];

const GetOrganic = () => {
  return (
    <div>
      <div className="container mt-5">
        <h3 className='organic-heading'>Organic Fresh Food</h3>
        <div className="div-row">
          {organicItems.map((organicitem) => (
            <div
              key={organicitem.id}
              className="div-4"
              style={{
                backgroundImage: `url(${organicitem.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginBottom: '10px',
                width: '30%',
                margin: 'auto' // Add margin to create space between cards
              }}
            >
              <div className="card organic-card" style={{ padding: '10px' }}>
                <div className="card-body organic-body">
                  <h5 className="card-title">{organicitem.title}</h5>
                  <p className="card-text">{organicitem.subtitle}</p>
                  <p className="card-text">{organicitem.desc}</p>
                  <a href="#" className="btn btn-primary shop-now">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetOrganic;
