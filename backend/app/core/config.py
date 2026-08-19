from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "House Price Prediction API"
    model_path: str = "models/house_price.pkl"

    class Config:
        env_file = ".env"


settings = Settings()