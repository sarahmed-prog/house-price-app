export interface PredictionRequest {
  location_grouped: string;
  Furnishing: string;
  Transaction: string;
  Ownership: string;
  facing: string;
  carpet_area_sqft: number;
  floor_num: number;
  bathroom: number;
  balcony: number;
}

export interface PredictionResponse {
  predicted_price: number;
}