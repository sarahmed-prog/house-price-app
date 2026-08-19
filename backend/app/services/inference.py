from pathlib import Path

import joblib
import pandas as pd


MODEL_PATH = Path(__file__).resolve().parents[2] / "models" / "house_price.pkl"

model = joblib.load(MODEL_PATH)


def predict_price(data: pd.DataFrame) -> float:
    prediction = model.predict(data)
    return float(prediction[0])