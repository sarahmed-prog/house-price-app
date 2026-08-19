import { Link, useLocation } from "react-router-dom";

function ResultPage() {
  const location = useLocation();

  const predictedPrice = location.state?.predictedPrice;

  if (predictedPrice === undefined) {
    return (
      <div>
        <h1>No prediction found</h1>

        <Link to="/">Back to prediction</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Prediction Result</h1>

      <h2>
        ₹{" "}
        {Number(predictedPrice).toLocaleString("en-IN", {
          maximumFractionDigits: 2,
        })}
      </h2>

      <Link to="/">Make another prediction</Link>
    </div>
  );
}

export default ResultPage;