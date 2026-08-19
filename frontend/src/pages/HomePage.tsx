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
    <div>
      <h1>House Price Prediction</h1>

      <PredictionForm onResult={handleResult} />
    </div>
  );
}

export default HomePage;