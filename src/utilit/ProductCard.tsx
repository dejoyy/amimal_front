import React from 'react';
import './ProductCard.css';

interface ProductProps {
  image: string;
  title: string;
  description: string;
  price: string;
  location: string;
  date: string;
}

const ProductCard: React.FC<ProductProps> = ({ image, title, description, price, location, date }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-content">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <div className="product-footer">
          <p className="product-price">{price}</p>
          <div className="product-info">
            <p className="product-location">{location}</p>
            <p className="product-date">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;