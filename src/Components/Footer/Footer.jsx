// import React from "react";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.png";
import tiktok from "../../assets/icons/tiktok.svg";
import youtube from "../../assets/icons/youtube.png";
// import "./Footer.css";

import "./Footer.css";

import visa from "../../assets/icons/visa.svg";
import paypal from "../../assets/icons/paypal.svg";
// import googlepay from "../../assets/icons/googlepay.png";
import mastercard from "../../assets/icons/mastercard.svg";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" className="footer-logo" />
        </Link>
        <div className="newsletter">
          <input type="email" placeholder="Enter your email" />
          <button>SUBSCRIBE</button>
        </div>
        <div className="social">
          <p>Suivez-nous</p>
          <div className="icons">
            <img src={facebook} alt="Facebook" className="facebook-icon" />
            <img src={instagram} alt="Instagram" className="instagram-icon" />
            <img src={tiktok} alt="TikTok" className="tiktok-icon" />
            <img src={youtube} alt="Youtube" className="youtube-icon" />
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-links">
        <div>
          <h4>INFORMATION</h4>
          <ul>
            <li>About</li>
            <li>History</li>
            <li>FAQ</li>
            <li>Guide de Taille</li>
            <li>Entretien</li>
          </ul>
        </div>
        <div>
          <h4>SUPPORT</h4>
          <ul>
            <li>Contact Us</li>
            <li>Service Client</li>
            <li>Retours & Exchanges</li>
            <li>Livraison et Suivi</li>
            <li>Secure Payment</li>
          </ul>
        </div>
        <div>
          <h4>BOUTIQUE</h4>
          <ul>
            <li>News</li>
            <li>Special Collections</li>
            <li>Offres & Promos</li>
            <li>Panier</li>
            <li>Earrings</li>
            <li>Colliers</li>
            <li>Bracelets</li>
            <li>Anneaux</li>
            <li>Bijoux De Corps</li>
          </ul>
        </div>
        <div>
          <h4>LEGAL</h4>
          <ul>
            <li>CGV</li>
            <li>Politique De Confidentialité</li>
            <li>Legal Mentions</li>
            <li>Politique De Retour</li>
            <li>Politique Des Cookies</li>
          </ul>
        </div>
        <div>
          <h4>MON COMPTE</h4>
          <ul>
            <li>Inscription</li>
            <li>Mon Compte</li>
            <li>Mes Favoris</li>
            <li>Suivre Ma Commande</li>
          </ul>
        </div>
      </div>

      <div className="footer-middle">
        <select>
          <option>England (USD)</option>
          <option>France (EUR)</option>
        </select>
        <div className="payment-method">
          <img src={visa} alt="Visa" />
          <img src={paypal} alt="PayPal" />
          {/* <img src={googlepay} alt="Google Pay" /> */}
          <img src={mastercard} alt="Mastercard" />
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        © 2025 Mellisa Pepite’s. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
