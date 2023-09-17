import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Card } from '../pages/Card';
import { get } from '../data/ProductData';
import ProductDetail from '../ProductDetail';


export const Products = ({ increment, cartCount }) => {
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

  console.log('Products:', products);

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {loading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : products && products.length > 0 ? (
          products.map((item, index) => (
            // Wrap the card with a Link to navigate to the ProductDetail page
            <Link to={`/product-detail/${item.id}`} key={index}>
              <Card item={item} increment={() => increment(item)} cartcount={cartCount} />
            </Link>
          ))
        ) : (
          <div>No products available</div>
        )}
      </div>
    </div>
  );
};
