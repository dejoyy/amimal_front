import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Импорт useNavigate
import './Header.css';
import { ReactComponent as PawIcon } from '../assets/paw.svg';
import { ReactComponent as CloseIcon } from "../assets/close-icon.svg";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isSavedAdsPage = location.pathname === '/saved-ads';

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isUserIconActive, setUserIconActive] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
    setRegisterModalOpen(false);
    setUserIconActive(true);
  };

  const closeModals = () => {
    setLoginModalOpen(false);
    setRegisterModalOpen(false);
    setUserIconActive(false);
  };

  const openRegisterModal = () => {
    setRegisterModalOpen(true);
    setLoginModalOpen(false);
    setUserIconActive(true);
  };

  // Функция обработки клика по логотипу
  const handleLogoClick = () => {
    navigate('/'); // Перенаправляем на главную страницу
  };

  // Функция обработки клика по сердечку
  const handleHeartClick = () => {
    if (isSavedAdsPage) {
      navigate('/'); // Если уже на странице сохраненных объявлений → Вернуть на главную
    } else {
      navigate('/saved-ads'); // Если на главной → Перейти в сохраненные
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          {/* Добавляем клик по логотипу */}
          <div className="brand" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <span className="zoo">ZOO</span>
            <span className="feel">FEEL</span>
          </div>
          <div className="paw-center">
            <PawIcon className="paw-icon" />
          </div>
          <button className="post-ad-button" onClick={() => navigate('/post-ad')}>
            РОЗМІСТИТИ ОГОЛОШЕННЯ
            </button>
        </div>
        <div className="header-right">
          {/* Сердечко теперь переключает страницы */}
          <svg className={`icon ${isSavedAdsPage ? 'icon-active' : ''}`} onClick={handleHeartClick}>
            <use xlinkHref="/symbol-defs.svg#icon-heart" />
          </svg>
          <svg className={`icon-user ${isUserIconActive ? 'icon-active' : ''}`} onClick={openLoginModal}>
            <use xlinkHref="/symbol-defs.svg#icon-user" />
          </svg>
        </div>
      </header>

      {/* Модальные окна */}
      {isLoginModalOpen && (
        <div className="modal-overlay" onClick={closeModals}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModals}>
            <CloseIcon className="close-icon" />
            </button>
            <h2 className='title-login'>Ласкаво просимо</h2>
            <form className="login-form">
              <label>
              <p className='email-texting'>Введіть свій e-mail*</p>
                <input type="email" placeholder="example@gmail.com" required />
              </label>
              <label>
              <p className='password-texting'>Введіть свій пароль*</p>
                <input type="password" placeholder="Пароль" required />
              </label>
              <button type="submit" className="login-button">УВІЙТИ</button>
            </form>
            <p className="register-link" onClick={openRegisterModal}>У мене немає профілю</p>
          </div>
        </div>
      )}

      {isRegisterModalOpen && (
        <div className="modal-overlay" onClick={closeModals}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModals}>
            <CloseIcon className="close-icon" />
            </button>
            <h2 className='title-login'>Ласкаво просимо</h2>
            <form className="register-form">
              <label>
                <p className='email-texting'>Введіть свій e-mail*</p>
                <input type="email" placeholder="name@gmail.com" required />
              </label>
              <label>
                <p className='password-texting'>Введіть свій пароль*</p>
                <input type="password" placeholder="Пароль" required />
              </label>
              <label>
                <p className='password-texting'>Повторіть пароль*</p>
                <input type="password" placeholder="Пароль" required />
              </label>
              <button type="submit" className="register-button">ЗАРЕЄСТРУВАТИСЯ</button>
            </form>
            <p className="login-link" onClick={openLoginModal}>Я вже зареєстрований</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
