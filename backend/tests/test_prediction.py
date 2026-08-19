from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_health():
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json() == {"status": "ok"}

def test_predict():
    data = {
        "location_grouped": "thane",
        "Furnishing": "Unfurnished",
        "Transaction": "Resale",
        "Ownership": "Freehold",
        "facing": "East",
        "carpet_area_sqft": 500,
        "floor_num": 10,
        "bathroom": 1,
        "balcony": 2
    }

    response = client.post("/predict", json=data)

    assert response.status_code == 200
    assert "predicted_price" in response.json()
    assert response.json()["predicted_price"] > 0