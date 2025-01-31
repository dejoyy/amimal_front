import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const products = [
  {
    image: '/img/cat1.jpg',
    title: 'Silly Goofy Ahh Cat',
    description: 'Це мій кіт і я продаю бо вона дурна',
    price: '200 грн',
    location: 'Місто',
    date: '09.01.2025',
  },
  {
    image: '/img/cat2.jpg',
    title: 'Ya’qub qamar Ad-Din Dibizah',
    description: 'Я отдав ему все свои сбережения',
    price: '200 грн',
    location: 'Місто',
    date: '09.01.2025',
  },
  {
    image: '/img/cat3.jpg',
    title: 'Khalid Kashmiri',
    description: 'ЕГО БОЯЛИСЬ ДАЖЕ ЧЕЧЕНЦЫ!',
    price: '200 грн',
    location: 'Місто',
    date: '09.01.2025',
  },
  {
    image: '/img/cat4.jpg',
    title: 'Usman Abdul Jalil Sisha',
    description: 'САМЫЙ УМНЫЙ КОТ НА ПЛАНЕТЕ!!! КУПИТЕ ПОЖАЛУЙСТА',
    price: '200 грн',
    location: 'Місто',
    date: '09.01.2025',
  },
];

const ProductList: React.FC = () => {
  return (
    <div className="product-list">
      <h1 className='post-title'>Оголошення</h1>
      <p className='count-list'>Знайдено {products.length} оголошень</p>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;