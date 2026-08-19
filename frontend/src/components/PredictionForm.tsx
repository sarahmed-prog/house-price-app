import { useEffect, useState } from "react";
import type { FormEvent } from "react";

import type { PredictionRequest } from "../types/prediction";
import { predictPrice } from "../api/predictionClient";

interface PredictionFormProps {
onResult: (price: number) => void;
}

function PredictionForm({ onResult }: PredictionFormProps) {
const [locations, setLocations] = useState<string[]>([]);

const [formData, setFormData] = useState({
location_grouped: "",
Furnishing: "",
Transaction: "",
Ownership: "",
facing: "",
carpet_area_sqft: "",
floor_num: "",
bathroom: "",
balcony: "",
});

const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

useEffect(() => {
fetch("/locations.json")
.then((response) => {
if (!response.ok) {
throw new Error("Failed to load locations");
}

    return response.json();
  })
  .then((data: string[]) => {
    setLocations(data);
  })
  .catch(() => {
    setError("Could not load locations.");
  });

}, []);

const handleChange = (
event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
const { name, value } = event.target;

setFormData((previous) => ({
  ...previous,
  [name]: value,
}));

};

const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
event.preventDefault();

setError("");

if (!formData.location_grouped) {
  setError("Please select a location.");
  return;
}

if (!formData.Furnishing) {
  setError("Please select the furnishing type.");
  return;
}

if (!formData.Transaction) {
  setError("Please select the transaction type.");
  return;
}

if (!formData.Ownership.trim()) {
  setError("Please enter the ownership type.");
  return;
}

if (!formData.facing.trim()) {
  setError("Please enter the facing direction.");
  return;
}

if (!formData.carpet_area_sqft) {
  setError("Please enter the carpet area.");
  return;
}

if (Number(formData.carpet_area_sqft) <= 0) {
  setError("Carpet area must be greater than 0.");
  return;
}

if (formData.floor_num === "") {
  setError("Please enter the floor number.");
  return;
}

if (Number(formData.floor_num) < 0) {
  setError("Floor number cannot be negative.");
  return;
}

if (formData.bathroom === "") {
  setError("Please enter the number of bathrooms.");
  return;
}

if (Number(formData.bathroom) <= 0) {
  setError("Bathrooms must be at least 1.");
  return;
}

if (formData.balcony === "") {
  setError("Please enter the number of balconies.");
  return;
}

if (Number(formData.balcony) < 0) {
  setError("Balconies cannot be negative.");
  return;
}

const predictionData: PredictionRequest = {
  location_grouped: formData.location_grouped,
  Furnishing: formData.Furnishing,
  Transaction: formData.Transaction,
  Ownership: formData.Ownership,
  facing: formData.facing,
  carpet_area_sqft: Number(formData.carpet_area_sqft),
  floor_num: Number(formData.floor_num),
  bathroom: Number(formData.bathroom),
  balcony: Number(formData.balcony),
};

try {
  setLoading(true);

  const result = await predictPrice(predictionData);

  onResult(result.predicted_price);
} catch {
  setError("Something went wrong. Please try again.");
} finally {
  setLoading(false);
}

};

return (
<form className="prediction-card" onSubmit={handleSubmit}>
<div className="form-header">
<p className="form-label">PROPERTY DETAILS</p>

    <h2>Tell us about your property</h2>

    <p className="form-description">
      Fill in the details below to estimate the property's market value.
    </p>
  </div>

  <div className="form-grid">
    <div className="form-field">
      <label htmlFor="location_grouped">Location</label>

      <select
        id="location_grouped"
        name="location_grouped"
        value={formData.location_grouped}
        onChange={handleChange}
        required
      >
        <option value="">Select location</option>

        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>

    <div className="form-field">
      <label htmlFor="Furnishing">Furnishing</label>

      <select
        id="Furnishing"
        name="Furnishing"
        value={formData.Furnishing}
        onChange={handleChange}
        required
      >
        <option value="">Select furnishing</option>
        <option value="Furnished">Furnished</option>
        <option value="Semi-Furnished">Semi-Furnished</option>
        <option value="Unfurnished">Unfurnished</option>
      </select>
    </div>

    <div className="form-field">
      <label htmlFor="Transaction">Transaction</label>

      <select
        id="Transaction"
        name="Transaction"
        value={formData.Transaction}
        onChange={handleChange}
        required
      >
        <option value="">Select transaction</option>
        <option value="New Property">New Property</option>
        <option value="Resale">Resale</option>
      </select>
    </div>

    <div className="form-field">
      <label htmlFor="Ownership">Ownership</label>

      <input
        id="Ownership"
        type="text"
        name="Ownership"
        value={formData.Ownership}
        onChange={handleChange}
        placeholder="Example: Freehold"
        required
      />
    </div>

    <div className="form-field">
      <label htmlFor="facing">Facing</label>

      <input
        id="facing"
        type="text"
        name="facing"
        value={formData.facing}
        onChange={handleChange}
        placeholder="Example: East"
        required
      />
    </div>

    <div className="form-field">
      <label htmlFor="carpet_area_sqft">Carpet Area (sqft)</label>

      <input
        id="carpet_area_sqft"
        type="number"
        name="carpet_area_sqft"
        value={formData.carpet_area_sqft}
        onChange={handleChange}
        min="1"
        required
      />
    </div>

    <div className="form-field">
      <label htmlFor="floor_num">Floor</label>

      <input
        id="floor_num"
        type="number"
        name="floor_num"
        value={formData.floor_num}
        onChange={handleChange}
        min="0"
        required
      />
    </div>

    <div className="form-field">
      <label htmlFor="bathroom">Bathrooms</label>

      <input
        id="bathroom"
        type="number"
        name="bathroom"
        value={formData.bathroom}
        onChange={handleChange}
        min="1"
        required
      />
    </div>

    <div className="form-field">
      <label htmlFor="balcony">Balconies</label>

      <input
        id="balcony"
        type="number"
        name="balcony"
        value={formData.balcony}
        onChange={handleChange}
        min="0"
        required
      />
    </div>
  </div>

  {error && <p className="form-error">{error}</p>}

  <button className="predict-button" type="submit" disabled={loading}>
    {loading ? "Predicting..." : "Predict Price"}

    {!loading && <span>→</span>}
  </button>
</form>

);
}

export default PredictionForm;