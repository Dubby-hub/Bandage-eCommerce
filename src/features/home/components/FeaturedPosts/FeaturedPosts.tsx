import { posts } from "../../data/posts";
import "./FeaturedPosts.css";

function FeaturedPosts() {
  return (
    <section className="featured-posts">
      <div className="container">
        <header className="featured-posts__header">
          <p className="featured-posts__eyebrow">Practice Advice</p>

          <h2 className="featured-posts__title">Featured Posts</h2>

          <p className="featured-posts__description">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </header>

        <div className="featured-posts__grid">
          {posts.map((post) => (
            <article key={post.id} className="post-card">
              <div className="post-card__image-wrapper">
                <img
                  src={post.image}
                  alt={post.title}
                  className="post-card__image"
                />

                <span className="post-card__badge">NEW</span>
              </div>

              <div className="post-card__content">
                <div className="post-card__meta">
                  <span>{post.category}</span>
                </div>

                <h3 className="post-card__title">{post.title}</h3>

                <p className="post-card__description">{post.description}</p>

                <div className="post-card__details">
                  <span>{post.date}</span>

                  <span>{post.comments} comments</span>
                </div>

                <a href="/blog" className="post-card__link">
                  Learn More
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPosts;
