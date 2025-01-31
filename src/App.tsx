import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './utilit/Header';
import ProductList from './utilit/ProductList';
import Footer from './utilit/Footer';
import SearchSection from './utilit/SearchSection';
import SavedAdsPage from './pages/SavedAdsPage';
import PostAdPage from './pages/PostAdPage'; // Импорт страницы размещения объявления

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Главная страница */}
        <Route path="/" element={
          <>
            <SearchSection />
            <ProductList />
          </>
        } />

        {/* Страница сохраненных объявлений */}
        <Route path="/saved-ads" element={<SavedAdsPage />} />

        {/* Новая страница размещения объявления */}
        <Route path="/post-ad" element={<PostAdPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;