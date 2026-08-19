from pydantic import BaseModel


class PredictionRequest(BaseModel):
    location_grouped: str
    Furnishing: str
    Transaction: str
    Ownership: str
    facing: str
    carpet_area_sqft: float
    floor_num: float
    bathroom: float
    balcony: float


class PredictionResponse(BaseModel):
    predicted_price: float
    