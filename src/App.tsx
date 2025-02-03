import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./utilit/Header";
import ProductList from "./utilit/ProductList";
import Footer from "./utilit/Footer";
import SearchSection from "./utilit/SearchSection";
import SavedAdsPage from "./pages/SavedAdsPage";
import PostAdPage from "./pages/PostAdPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import SuccessPostPage from "./pages/SuccessPostPage"; // ✅ Импортируем страницу успеха
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<><SearchSection /><ProductList /></>} />
        <Route path="/saved-ads" element={<SavedAdsPage />} />
        <Route path="/post-ad" element={<PostAdPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/success" element={<SuccessPostPage />} /> {/* ✅ Новый маршрут */}
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;