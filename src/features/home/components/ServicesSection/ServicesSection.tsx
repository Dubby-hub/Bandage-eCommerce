import Icon from "../../../../components/Icon/Icon";
import { services } from "../../data/services";
import "./ServicesSection.css";

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container">
        <header className="services-section__header">
          <p className="services-section__eyebrow">Featured Products</p>

          <h2 className="services-section__title">THE BEST SERVICES</h2>

          <p className="services-section__description">
            Problems trying to resolve the conflict between
          </p>
        </header>

        <div className="services-section__grid">
          {services.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-card__icon">
                <Icon name={service.icon} size={40} />
              </div>

              <h3 className="service-card__title">{service.title}</h3>

              <p className="service-card__description">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
