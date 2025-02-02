import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; // ✅ Импортируем useNavigate
import './PostAdPage.css';
import { ReactComponent as CameraIcon } from '../assets/camera.svg';
import { ReactComponent as ArrowIcon } from "../assets/arrow-left.svg"; // ✅ Импорт SVG стрелки

const categories = [
  "Коти", "Собаки", "Птахи", "Гризуни", "Рептилії", 
  "Рибки", "Фермерські тварини", "Інші"
];

const regions = [
  "Київська", "Львівська", "Харківська", "Одеська", "Дніпропетровська", 
  "Вінницька", "Полтавська", "Черкаська", "Чернігівська", "Закарпатська", 
  "Волинська", "Хмельницька", "Житомирська", "Тернопільська", "Миколаївська", 
  "Запорізька", "Сумська", "Рівненська", "Чернівецька", "Кіровоградська", 
  "Івано-Франківська", "Луганська", "Донецька", "Херсонська"
];

const PostAdPage: React.FC = () => {
  const navigate = useNavigate(); // ✅ Хук для навигации
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  // Функция загрузки изображений
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      filesArray.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImages((prevImages) => [...prevImages, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  // Функция очистки загруженных изображений
  const clearImages = () => {
    setSelectedImages([]);
  };

    // ✅ Обработчик формы
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault(); // Предотвращаем перезагрузку страницы
      navigate("/success"); // ✅ Переход на страницу успеха
    };

  return (
    <div className="post-ad-container">
       {/* ✅ Кнопка-стрелочка для возврата */}
       <div className="back-button-container">
        <button className="back-button" onClick={() => navigate("/")}>
          <ArrowIcon className="back-icon" />
        </button>
      </div>

      <h2 className="post-ad-title">Додайте ваше оголошення!</h2>

      <form onSubmit={handleSubmit}> {/* ✅ Форма */}
      <div className="post-ad-form">
        {/* Левая часть формы */}
        <div className="form-left">
          <label className='add-namepost'>Додайте назву оголошення*</label>
          <input className='text-input-post' type="text" placeholder="Назва" required />

          <label>Додайте категорію оголошення*</label>
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Оберіть категорію</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          
          <div className='price-position'>
            <label>Вкажіть ціну оголошення*</label>
            <div className="price-input">
              <input 
                className='text-input-price' 
                type="number" 
                placeholder="Ціна" 
                min="0" 
                required 
              />
              <span className='grn'>грн</span>
            </div>
          </div>

          <div className='position-info'>
            <label className='add-info'>Додаткові відомості</label>
            <button className="additional-info-btn">Додати</button>
          </div>
        </div>

        {/* Правая часть формы (Фото) */}
        <div className="form-right">
          <label className='foto-animaladd'>Додайте фото тварини*</label>
          <div className="photo-upload" onClick={() => document.getElementById('fileInput')?.click()}>
            {selectedImages.length > 0 ? (
              <div className="image-preview">
                {selectedImages.map((image, index) => (
                  <img key={index} src={image} alt={`Фото ${index + 1}`} className="uploaded-image" />
                ))}
              </div>
            ) : (
              <>
                <CameraIcon className="camera-icon" />
                <p className='add-foto'>Додати фото</p>
              </>
            )}
          </div>
          <input type="file" id="fileInput" accept="image/*" multiple onChange={handleImageUpload} hidden />

          {/* Кнопка очистки фото */}
          {selectedImages.length > 0 && (
            <button className="clear-images-button" onClick={clearImages}>
              Очистити всі фото
            </button>
          )}
        </div>
      </div>

      <div className='group-add'>
        <div className="post-description">
          <label className='add-description-title'>Додайте опис*</label>
          <textarea className='add-description' placeholder="Введіть текст" required></textarea>
        </div>

        {/* Контактная информация */}
        <div className="contact-info">
          <div className="contact-fields">
            <label>Оберіть область*</label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              <option value="">Оберіть область</option>
              {regions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select>

            <label>Пошта*</label>
            <input 
              className='input-options' 
              type="email" 
              placeholder="name@gmail.com" 
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
              required 
            />

            <label>Ваш номер телефону*</label>
            <input 
              className='input-options' 
              type="tel" 
              placeholder="+380" 
              pattern="[0-9+]*" 
              maxLength={13} 
              required 
            />

            <label>Додатковий номер</label>
            <input className='input-options' type="tel" placeholder="+380" pattern="[0-9+]*" maxLength={13} />

            <label>Telegram</label>
            <input className='input-options' type="text" placeholder="@nickname" />
          </div>
        </div>
      </div>

      {/* Кнопки */}
      <div className="button-container">
        <button type='submit' className="submit-button">РОЗМІСТИТИ</button>
      </div>
      </form>
    </div>
  );
};

export default PostAdPage;