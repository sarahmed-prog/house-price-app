import { useNavigate } from "react-router-dom";

import PredictionForm from "../components/PredictionForm";

function HomePage() {
const navigate = useNavigate();

const handleResult = (price: number) => {
navigate("/result", {
state: {
predictedPrice: price,
},
});
};

return (
<main className="home-page">
<section className="hero-section">
<div className="hero-content">
<p className="eyebrow">SMART PROPERTY ESTIMATION</p>

      <h1>
        Find the estimated value of
        <span> your home.</span>
      </h1>

      <p className="hero-description">
        Enter your property details and get an estimated house price
        powered by machine learning.
      </p>
    </div>
  </section>

  <section className="form-section">
    <PredictionForm onResult={handleResult} />
  </section>
</main>

);
}

export default HomePage;