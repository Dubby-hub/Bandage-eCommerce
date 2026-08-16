import Icon from "../Icon/Icon";
import { footerColumns } from "./footerData";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* Footer top */}
        <div className="footer__top">
          <h2 className="footer__logo">
            Bandage
          </h2>

          <div className="footer__socials">
            <a
              href="#"
              aria-label="Facebook"
            >
              <Icon
                name="facebook"
                size={18}
              />
            </a>

            <a
              href="#"
              aria-label="Instagram"
            >
              <Icon
                name="instagram"
                size={18}
              />
            </a>

            <a
              href="#"
              aria-label="Twitter"
            >
              <Icon
                name="twitter"
                size={18}
              />
            </a>

            <a
              href="#"
              aria-label="YouTube"
            >
              <Icon
                name="youtube"
                size={18}
              />
            </a>
          </div>
        </div>

        {/* Footer content */}
        <div className="footer__content">

          {footerColumns.map((column) => (
            <div
              key={column.title}
              className="footer__column"
            >
              <h3 className="footer__column-title">
                {column.title}
              </h3>

              <ul className="footer__links">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="footer__column footer__newsletter">
            <h3 className="footer__column-title">
              Get In Touch
            </h3>

            <form className="footer__form">
              <input
                type="email"
                placeholder="Your Email"
                aria-label="Your email address"
              />

              <button type="submit">
                Subscribe
              </button>
            </form>

            <p className="footer__newsletter-text">
              Lore ipsum dolor sit amet.
            </p>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="footer__bottom">
        <div className="container">
          <p>
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;