import React from 'react';
import './SearchSection.css';
import { ReactComponent as SearchIcon } from '../assets/search.svg';
import { ReactComponent as CategoryIcon } from '../assets/category.svg';
import { ReactComponent as LocationIcon } from '../assets/location.svg';

const SearchSection: React.FC = () => {
  return (
    <div className="search-section">
      <div className="search-container">
        <form>
          {/* Поле поиска */}
          <div className="input-group">
            <SearchIcon className="input-icon-search position-search" />
            <input
              type="text"
              placeholder="Пошук"
              className="search-input"
            />
          </div>

          {/* Категории */}
          <div className="input-group"> 
            <CategoryIcon className="input-icon-category position-category" />
            <select className="select-input">
              <option value="">Категорії</option>
              <option value="cats">Коти</option>
              <option value="dogs">Собаки</option>
              <option value="birds">Птахи</option>
            </select>
          </div>

          {/* Регионы */}
          <div className="input-group">
            <LocationIcon className="input-icon-location position-location" />
            <select className="select-input">
              <option value="">Регіони</option>
              <option value="kyiv">Київ</option>
              <option value="lviv">Львів</option>
              <option value="kharkiv">Харків</option>
            </select>
          </div>
          
          {/* Кнопка */}
          <button type="submit" className="search-button">
            ЗНАЙТИ
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchSection;