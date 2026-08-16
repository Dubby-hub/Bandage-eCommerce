import Icon from "../../../../components/Icon/Icon";
import { testimonials, testimonialImages } from "../../data/testimonials";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__layout">
          <div className="testimonials__content">
            <h2 className="testimonials__title">What they say about us</h2>

            {testimonials.map((testimonial) => (
              <article key={testimonial.id} className="testimonial">
                <div className="testimonial__customer">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial__avatar"
                  />
                </div>
                <br />
                <br />

                <div
                  className="testimonial__rating"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {Array.from({ length: testimonial.rating }, (_, index) => (
                    <Icon key={index} name="star" size={20} />
                  ))}
                </div>
                <br />
                <br />

                <blockquote className="testimonial__review">
                  "{testimonial.review}"
                </blockquote>
                <br />

                <div>
                  <h3 className="testimonial__name">{testimonial.name}</h3>

                  <p className="testimonial__role">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="testimonials__gallery">
            {testimonialImages.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.alt}
                className="testimonials__gallery-image"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
