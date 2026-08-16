import Button from "../../../../components/Button/Button";
import "./PromoBanner.css";

function PromoBanner() {
  return (
    <section className="promo-banner">
      <div className="container">
        <div className="promo-banner__content">
          <p className="promo-banner__eyebrow">Designing Better Experience</p>

          <h2 className="promo-banner__title">
            Problems trying to resolve
            <br />
            the conflict between
          </h2>

          <p className="promo-banner__description">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </p>

          <p className="promo-banner__price">$16.48</p>

          <Button>Add Your Call to Action</Button>
        </div>
      </div>
    </section>
  );
}

export default PromoBanner;
