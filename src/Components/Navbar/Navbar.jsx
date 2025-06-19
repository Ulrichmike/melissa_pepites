import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import logo from "../../assets/images/logo.png";
import collection1 from "../../assets/images/collection1.jpeg";
import menu_hamburger from "../../assets/icons/menu-hamburger.svg";

export function BuyByDropdown() {
  return (
    <div className="subnav-buy">
      <p>SHOP BY</p>
      <div className="container">
        <div className="featured">
          <ul>
            <h4>FEATURED</h4>
            <li>Shop All</li>
            <li>Best Sellers</li>
            <li>New In</li>
            <li>Shop on our Instagram</li>
            <li>Sale</li>
          </ul>
        </div>
        <div className="collections">
          <ul>
            <h4>COLLECTIONS</h4>
            <li>Nature Sauvage</li>
            <li>Printemps</li>
            <li>Automne Doré</li>
            <li>Others</li>
            <li>Others</li>
          </ul>
        </div>
        <div className="gifts">
          <ul>
            <h4>GIFTS</h4>
            <li>Gift Packaging</li>
            <li>Gift under £150</li>
            <li>Gift under £70</li>
            <li>Gift cards</li>
          </ul>
        </div>
        <div>
          <img src={collection1} className="collection1" />
        </div>
      </div>
    </div>
  );
}

export function EarringsDropdown() {
  return (
    <div className="subnav-buy">
      <p>Earrings</p>
      <div className="container">
        <div className="featured">
          <ul>
            <h4>FEATURED</h4>
            <li>Shop All</li>
            <li>Best Sellers</li>
            <li>New In</li>
            <li>Shop on our Instagram</li>
            <li>Sale</li>
          </ul>
        </div>
        <div className="collections">
          <ul>
            <h4>COLLECTIONS</h4>
            <li>Nature Sauvage</li>
            <li>Printemps</li>
            <li>Automne Doré</li>
            <li>Others</li>
            <li>Others</li>
          </ul>
        </div>
        <div className="gifts">
          <ul>
            <h4>GIFTS</h4>
            <li>Gift Packaging</li>
            <li>Gift under £150</li>
            <li>Gift under £70</li>
            <li>Gift cards</li>
          </ul>
        </div>
        <div>
          <img src={collection1} className="collection1" />
        </div>
      </div>
    </div>
  );
}

export function ColliersDropdown() {
  return (
    <div className="subnav-buy">
      <p>Colliers</p>
      <div className="container">
        <div className="featured">
          <ul>
            <h4>FEATURED</h4>
            <li>Shop All</li>
            <li>Best Sellers</li>
            <li>New In</li>
            <li>Shop on our Instagram</li>
            <li>Sale</li>
          </ul>
        </div>
        <div className="collections">
          <ul>
            <h4>COLLECTIONS</h4>
            <li>Nature Sauvage</li>
            <li>Printemps</li>
            <li>Automne Doré</li>
            <li>Others</li>
            <li>Others</li>
          </ul>
        </div>
        <div className="gifts">
          <ul>
            <h4>GIFTS</h4>
            <li>Gift Packaging</li>
            <li>Gift under £150</li>
            <li>Gift under £70</li>
            <li>Gift cards</li>
          </ul>
        </div>
        <div>
          <img src={collection1} className="collection1" />
        </div>
      </div>
    </div>
  );
}
export function AnneauxDropdown() {
  return (
    <div className="subnav-buy">
      <p>Anneaux</p>
      <div className="container">
        <div className="featured">
          <ul>
            <h4>FEATURED</h4>
            <li>Shop All</li>
            <li>Best Sellers</li>
            <li>New In</li>
            <li>Shop on our Instagram</li>
            <li>Sale</li>
          </ul>
        </div>
        <div className="collections">
          <ul>
            <h4>COLLECTIONS</h4>
            <li>Nature Sauvage</li>
            <li>Printemps</li>
            <li>Automne Doré</li>
            <li>Others</li>
            <li>Others</li>
          </ul>
        </div>
        <div className="gifts">
          <ul>
            <h4>GIFTS</h4>
            <li>Gift Packaging</li>
            <li>Gift under £150</li>
            <li>Gift under £70</li>
            <li>Gift cards</li>
          </ul>
        </div>
        <div>
          <img src={collection1} className="collection1" />
        </div>
      </div>
    </div>
  );
}
export function BraceletsDropdown() {
  return (
    <div className="subnav-buy">
      <p>Bracelets</p>
      <div className="container">
        <div className="featured">
          <ul>
            <h4>FEATURED</h4>
            <li>Shop All</li>
            <li>Best Sellers</li>
            <li>New In</li>
            <li>Shop on our Instagram</li>
            <li>Sale</li>
          </ul>
        </div>
        <div className="collections">
          <ul>
            <h4>COLLECTIONS</h4>
            <li>Nature Sauvage</li>
            <li>Printemps</li>
            <li>Automne Doré</li>
            <li>Others</li>
            <li>Others</li>
          </ul>
        </div>
        <div className="gifts">
          <ul>
            <h4>GIFTS</h4>
            <li>Gift Packaging</li>
            <li>Gift under £150</li>
            <li>Gift under £70</li>
            <li>Gift cards</li>
          </ul>
        </div>
        <div>
          <img src={collection1} className="collection1" />
        </div>
      </div>
    </div>
  );
}

export function BodyDropdown() {
  return (
    <div className="subnav-buy">
      <p>Bijous de corps</p>
      <div className="container">
        <div className="featured">
          <ul>
            <h4>FEATURED</h4>
            <li>Shop All</li>
            <li>Best Sellers</li>
            <li>New In</li>
            <li>Shop on our Instagram</li>
            <li>Sale</li>
          </ul>
        </div>
        <div className="collections">
          <ul>
            <h4>COLLECTIONS</h4>
            <li>Nature Sauvage</li>
            <li>Printemps</li>
            <li>Automne Doré</li>
            <li>Others</li>
            <li>Others</li>
          </ul>
        </div>
        <div className="gifts">
          <ul>
            <h4>GIFTS</h4>
            <li>Gift Packaging</li>
            <li>Gift under £150</li>
            <li>Gift under £70</li>
            <li>Gift cards</li>
          </ul>
        </div>
        <div>
          <img src={collection1} className="collection1" />
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  //State
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState({
    active: false,
    dropdownName: "",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Recherche :", searchQuery);
  };

  return (
    <header className="navbar">
      {/* <div className="sidebar">
        <ul className="nav-links-side">
          <li>
            <Link to="/">Acheter par</Link>
          </li>
          <li>
            <Link to="/news">Nouveautés</Link>
          </li>
          <li>
            <Link to="/earrings">Earrings</Link>
          </li>
          <li>
            <Link to="/colliers">Colliers</Link>
          </li>
          <li>
            <Link to="/anneaux">Anneaux</Link>
          </li>
          <li>
            <Link to="bracelets">Bracelets</Link>
          </li>
          <li>
            <Link to="bijoux-de-corps">Bijoux de Corps</Link>
          </li>
        </ul>
      </div> */}
      <div className="navbar-top">
        <div className="menu-hamburger">
          <img src={menu_hamburger} alt="menu-hamburger" />
        </div>
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo">
            <img
              src={logo}
              alt="LuxeBijoux - Boutique de bijoux de luxe"
              className="logo-image"
            />
          </Link>
        </div>

        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Rechercher un bijou..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button type="submit">
            <FiSearch />
          </button>
        </form>

        <div className="lang">
          <select className="language-select">
            <option>England (USD)</option>
            <option>France (EUR)</option>
          </select>
        </div>

        <div className="navbar-icons">
          <div className="icon-block1">
            <FiUser />
            {/* <span>Mon compte</span> */}
          </div>
          <div className="icon-block2">
            <FiHeart />
            {/* <span>J’aime</span> */}
          </div>
          <div className="icon-block3">
            <FiShoppingCart />
            {/* <span>Mon panier</span> */}
          </div>
        </div>
      </div>

      <nav
        className="navbar-bottom"
        onMouseLeave={() =>
          setActiveDropdown({ active: false, dropdownName: "" })
        }
      >
        {/* rendu mobile de la barre de recherche */}
        <form className="mob-search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Rechercher un bijou..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button type="submit">
            <FiSearch />
          </button>
        </form>

        <ul className="nav-links">
          <li
            onMouseEnter={() =>
              setActiveDropdown({
                active: true,
                dropdownName: "BuyBy",
              })
            }
          >
            <Link to="/" className={activeDropdown.active === true ? "ok" : ""}>
              Acheter par
            </Link>
            {/* Dropdown Menu */}
            {activeDropdown.active &&
              activeDropdown.dropdownName === "BuyBy" && <BuyByDropdown />}
          </li>
          <li>
            <Link to="/news">Nouveautés</Link>
          </li>
          <li
            onMouseEnter={() =>
              setActiveDropdown({
                active: true,
                dropdownName: "Earrings",
              })
            }
          >
            <Link to="/earrings">Earrings</Link>
            {/* Dropdown Menu */}
            {activeDropdown.active &&
              activeDropdown.dropdownName === "Earrings" && (
                <EarringsDropdown />
              )}
          </li>
          <li
            onMouseEnter={() =>
              setActiveDropdown({
                active: true,
                dropdownName: "Colliers",
              })
            }
          >
            <Link to="/colliers">Colliers</Link>
            {/* Dropdown Menu */}
            {activeDropdown.active &&
              activeDropdown.dropdownName === "Colliers" && (
                <ColliersDropdown />
              )}
          </li>
          <li
            onMouseEnter={() =>
              setActiveDropdown({
                active: true,
                dropdownName: "Anneaux",
              })
            }
          >
            <Link to="/anneaux">Anneaux</Link>
            {/* Dropdown Menu */}
            {activeDropdown.active &&
              activeDropdown.dropdownName === "Anneaux" && <AnneauxDropdown />}
          </li>
          <li
            onMouseEnter={() =>
              setActiveDropdown({
                active: true,
                dropdownName: "Bracelets",
              })
            }
          >
            <Link to="bracelets">Bracelets</Link>
            {/* Dropdown Menu */}
            {activeDropdown.active &&
              activeDropdown.dropdownName === "Bracelets" && (
                <BraceletsDropdown />
              )}
          </li>
          <li
            onMouseEnter={() =>
              setActiveDropdown({
                active: true,
                dropdownName: "Body",
              })
            }
          >
            <Link to="bijoux-de-corps">Bijoux de Corps</Link>
            {/* Dropdown Menu */}
            {activeDropdown.active &&
              activeDropdown.dropdownName === "Body" && <BodyDropdown />}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
