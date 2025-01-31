import React from 'react';
import ProductCard from '../utilit/ProductCard';
import './SavedAdsPage.css';

const myAds = [
  {
    image: '/img/cat2.jpg',
    title: 'Моє оголошення',
    description: 'Це моє оголошення',
    price: '200 грн',
    location: 'Місто',
    date: '09.01.2025',
  },
];

const savedAds = [
  {
    image: '/img/cat1.jpg',
    title: 'Збережене оголошення',
    description: 'Це збережене оголошення',
    price: '200 грн',
    location: 'Місто',
    date: '09.01.2025',
  },
];

const SavedAdsPage: React.FC = () => {
  return (
    <div className="saved-ads-page">
      <h2 className='mine-post'>Мої оголошення</h2>
      <div className="ads-container">
        {myAds.map((ad, index) => (
          <ProductCard key={index} {...ad} />
        ))}
      </div>

      <h2 className='save-post'>Збережені оголошення</h2>
      <div className="ads-container">
        {savedAds.map((ad, index) => (
          <ProductCard key={index} {...ad} />
        ))}
      </div>
    </div>
  );
};

export default SavedAdsPage;