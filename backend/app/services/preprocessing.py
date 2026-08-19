import pandas as pd

from app.schemas.prediction import PredictionRequest


def prepare_input(data: PredictionRequest) -> pd.DataFrame:
    return pd.DataFrame([{
        "location_grouped": data.location_grouped,
        "Furnishing": data.Furnishing,
        "Transaction": data.Transaction,
        "Ownership": data.Ownership,
        "facing": data.facing,
        "carpet_area_sqft": data.carpet_area_sqft,
        "floor_num": data.floor_num,
        "bathroom": data.bathroom,
        "balcony": data.balcony,
    }])