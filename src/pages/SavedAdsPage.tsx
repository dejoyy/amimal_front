import React from "react";
import ProductCard from "../utilit/ProductCard"; // ✅ Добавлен импорт
import "./SavedAdsPage.css";

const myAds = [
  {
    id: 1, // ✅ Добавлен ID
    image: "/img/cat2.jpg",
    title: "Моє оголошення",
    description: "Це моє оголошення",
    price: "200 грн",
    location: "Місто",
    date: "09.01.2025",
  },
];

const savedAds = [
  {
    id: 2, // ✅ Добавлен ID
    image: "/img/cat1.jpg",
    title: "Збережене оголошення",
    description: "Це збережене оголошення",
    price: "200 грн",
    location: "Місто",
    date: "09.01.2025",
  },
];

const SavedAdsPage: React.FC = () => {
  return (
    <div className="saved-ads-page">
      <h2 className="mine-post">Мої оголошення</h2>
      <div className="ads-container">
        {myAds.map((ad) => (
          <ProductCard key={ad.id} {...ad} />
        ))}
      </div>

      <h2 className="save-post">Збережені оголошення</h2>
      <div className="ads-container">
        {savedAds.map((ad) => (
          <ProductCard key={ad.id} {...ad} />
        ))}
      </div>
    </div>
  );
};

export default SavedAdsPage;