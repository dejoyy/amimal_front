import React from "react";
import "./ContactModal.css";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Если окно закрыто, не рендерим его

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>✖</button>
        <h3>Номер телефону для зв’язку</h3>
        <p className="contact-item">+380-68-599-43-02 </p>

        <h3>Додатковий номер</h3>
        <p className="contact-item">+380-68-599-43-02 </p>

        <h3>Пошта</h3>
        <p className="contact-item">nickname@gmail.com </p>

        <h3>Telegram</h3>
        <p className="contact-item">@nickname </p>

        <div className="warning-text">НІКОЛИ НЕ ПОГОДЖУЙТЕСЯ НА ПЕРЕДОПЛАТУ!</div>
      </div>
    </div>
  );
};

export default ContactModal;