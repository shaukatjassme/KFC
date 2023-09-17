import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from './data/ProductData'; // Import the get function with the correct path

import { Category } from './pages/Category';
import Layout from './components/Layout';
import { Card } from './pages/Card';



const ProductDetail = (item, increment,) => {
  
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await get(`products/${id}`); // Fetch data for the specified product ID
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (

    <>
    <Layout>
   
    <Category />
    <div className="product-details ">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        
        <p>Description: {product.description}</p>
        <p>Category: {product.category}</p>
        <p>Rating: {product.rating.rate}</p>
        {/* Add more product details as needed */}
      
        <button className='AddToCart-btn-red'>Price: ${product.price}</button>
        <button className='AddToCart-btn' onClick={increment}>Add to Cart</button>
      </div>
    </div>
    </Layout>
    </>
  
  );
};

export default ProductDetail;
