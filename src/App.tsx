import Button from "./components/Button/Button";

function App() {
  return (
    <main className="container">
      <section className="section">
        <div className="section-header">
          <h1 className="section-title">Bandage</h1>

          <p className="section-description">E-commerce application</p>
        </div>

        <div className="button-group">
          <Button>Shop Now</Button>

          <Button variant="secondary">Learn More</Button>

          <Button variant="outline">View Products</Button>

          <Button disabled>Disabled</Button>

          <Button type="submit">Submit</Button>
        </div>
      </section>
    </main>
  );
}

export default App;
