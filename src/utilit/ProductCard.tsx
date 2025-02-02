import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

interface ProductProps {
  id: number; // ✅ Добавлен ID
  image: string;
  title: string;
  description: string;
  price: string;
  location: string;
  date: string;
}

const ProductCard: React.FC<ProductProps> = ({ id, image, title, description, price, location, date }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`); // ✅ Теперь можно открыть детали объявления
  };

  return (
    <div className="product-card" onClick={handleClick} style={{ cursor: "pointer" }}>
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