import { useState } from "react";

import Icon from "../Icon/Icon";
import "./Header.css";
import { useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { selectCartItemCount } from "../../features/cart/cartSelectors";
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Pages", href: "/pages" },
];

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemCount = useAppSelector(selectCartItemCount);
  return (
    <header className="site-header">
      <div className="header-topbar">
        <div className="container header-topbar__content">
          <div className="header-contact">
            <a href="tel:+12255550118">(225) 555-0118</a>

            <a href="mailto:michelle.rivera@example.com">
              michelle.rivera@example.com
            </a>
          </div>

          <p className="header-social-text">
            Follow Us and get a chance to win 80% off
          </p>

          <div className="header-topbar__social">
            <span>Follow Us:</span>

            <a
              href="#"
              aria-label="Facebook"
              className="header-topbar__social-link"
            >
              <Icon name="facebook" size={14} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="header-topbar__social-link"
            >
              <Icon name="instagram" size={14} />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="header-topbar__social-link"
            >
              <Icon name="twitter" size={14} />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="header-topbar__social-link"
            >
              <Icon name="youtube" size={14} />
            </a>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="container navbar__content">
          <a className="navbar__logo" href="/">
            Bandage
          </a>

          <div className="navbar__links">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="navbar__link">
                {link.label}
              </a>
            ))}
          </div>

          <div className="navbar__actions">
            <a href="/login" className="navbar__auth">
              <Icon name="user" size={16} />
              <span>Login / Register</span>
            </a>

            <button
              type="button"
              className="navbar__icon-button"
              aria-label="Search"
            >
              <Icon name="search" size={18} />
            </button>

         <button
  type="button"
  className="header__cart"
  aria-label={`Shopping cart with ${cartItemCount} items`}
  onClick={() => navigate("/cart")}
>
  <Icon name="cart" />

  {cartItemCount > 0 && (
    <span className="header__cart-count">
      {cartItemCount}
    </span>
  )}
</button>

            <button
              type="button"
              className="navbar__icon-button"
              aria-label="Wishlist"
            >
              <Icon name="heart" size={18} />
            </button>
          </div>

          <button
            type="button"
            className="navbar__menu-button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <Icon name={isMenuOpen ? "close" : "menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="container">
              <div className="mobile-menu__links">
                <a href="/">Home</a>
                <a href="/products">Product</a>
                <a href="/pricing">Pricing</a>
                <a href="/contact">Contact</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
