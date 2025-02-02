import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetailsPage.css";
import { ReactComponent as ArrowIcon } from "../assets/arrow-left.svg";
import ContactModal from "../pages/ContactModal"; // Модалка контактов
import ReportModal from "../pages/ReportModal"; // ✅ Добавляем модальное окно жалобы
import { ReactComponent as ReportIcon } from "../assets/report.svg";

const products = [
  {
    id: 1,
    image: "/img/cat1.jpg",
    title: "Silly Goofy Ahh Cat",
    description: "Це мій кіт і я продаю бо вона дурна...",
    price: "200 грн",
    location: "Місто",
    date: "09.01.2025",
  },
  {
    id: 2,
    image: "/img/cat2.jpg",
    title: "Ya’qub qamar Ad-Din Dibizah",
    description: "Я отдав ему все свои сбережения...",
    price: "200 грн",
    location: "Місто",
    date: "09.01.2025",
  },
  {
    id: 3,
    image: "/img/cat3.jpg",
    title: "Khalid Kashmiri",
    description: "ЕГО БОЯЛИСЬ ДАЖЕ ЧЕЧЕНЦЫ!",
    price: "200 грн",
    location: "Місто",
    date: "09.01.2025",
  },
  {
    id: 4,
    image: "/img/cat4.jpg",
    title: "Usman Abdul Jalil Sisha",
    description: "САМЫЙ УМНЫЙ КОТ НА ПЛАНЕТЕ!!! КУПИТЕ ПОЖАЛУЙСТА",
    price: "200 грн",
    location: "Місто",
    date: "09.01.2025",
  },
];

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false); // ✅ Добавляем состояние

  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <h2>Оголошення не знайдено</h2>;
  }

  return (
    <div className="product-details-container">
      {/* Кнопка возврата */}
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate("/")}>
          <ArrowIcon className="back-icon" />
        </button>
      </div>

      {/* Основной контент */}
      <div className="product-details">
        <div className="product-left">
          <img src={product.image} alt={product.title} className="product-image-large" />
        </div>

        <div className="product-right">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">{product.price}</p>

          {/* Информация о пользователе */}
          <div className="user-info">
            <div className="user-avatar"></div>
            <div>
              <p className="username">Nickname</p>
              <p className="status">Був на сайті</p>
            </div>
          </div>

          {/* Кнопки */}
          <button className="contact-button" onClick={() => setIsContactModalOpen(true)}>ЗВ'ЯЗАТИСЯ</button>
          <button className="save-button">В ОБРАНЕ</button>
        </div>
      </div>

      {/* Описание объявления */}
      <div className="product-description-section">
        <h3 className="description-title">Опис</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-info">
          <span className="product-id">№000001, розміщено {product.date}</span>
          <button className="report-button" onClick={() => setIsReportModalOpen(true)}>
            <ReportIcon className="report-icon" /> Скарга
          </button>
        </div>
      </div>

      {/* Модальные окна */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <ReportModal isOpen={isReportModalOpen} onClose={() => setIsReportModalOpen(false)} /> {/* ✅ Подключаем */}
    </div>
  );
};

export default ProductDetailsPage;