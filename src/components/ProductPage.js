import React, { useEffect, useState } from 'react';
import { get } from '../data/ProductData';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await get('products');
        if (data && data.length > 0) {
          setProducts(data);
        } else {
          console.error('No products available');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5 text-white">
      <h1>Product Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Products</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title} style={{ maxWidth: '200px' }} />
                             <p>Description: {product.description}</p>
                <button className='AddToCart-btn-red'>Price: ${product.price}</button>
        <button className='AddToCart-btn' >Add to Cart</button>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
