import React, { useState, useEffect } from "react";
import "./Banner.css"; // Assure-toi de styliser selon ton design

const messages = [
  "💎 Livraison offerte à partir de 50€ !",
  "🎁 -20% sur votre première commande avec le code WELCOME20",
  "📦 Retours gratuits sous 30 jours !",
  "Where luxurious meets everyday",
];

function Banner() {
  //State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Changement automatique toutes les 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  //functions
  const handleNextMessage = () => {
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  //render

  if (!isVisible) return null;

  return (
    <div className="banner">
      <p onClick={handleNextMessage} className="banner-text">
        {messages[currentIndex]}
      </p>
      <button onClick={handleClose} className="banner-close">
        ✖
      </button>
    </div>
  );
}

export default Banner;
