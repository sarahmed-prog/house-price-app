House Price Prediction

Project Overview

This project is a Machine Learning application that predicts house prices based on property information entered by the user.

The project contains three main parts:

- Machine Learning model
- FastAPI backend
- React frontend

Project Structure
house_price_predection/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── utils/
│   ├── models/
│   │   └── house_price.pkl
│   ├── tests/
│   │   └── test_prediction.py
│   ├── Dockerfile
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   └── types/
│   └── package.json
│
├── notebooks/
│   ├── house_prices.ipynb
│   └── locations.json
│
├── src/
│   └── preprocess.py
│
├── .gitignore
├── .gitattributes
└── README.md

Machine Learning

The model was trained using house price data and is saved as:

backend/models/house_price.pkl

The model file is stored using Git LFS because of its large size.

Backend

The backend is built using FastAPI.

It receives the house information from the frontend, processes the input, uses the trained model to make a prediction, and returns the predicted price.

Backend requirements

Install the required Python packages:

pip install -r backend/requirements.txt

Run the backend from the project root:

uvicorn backend.app.main:app --reload

Frontend

The frontend is built using React + TypeScript + Vite.

Install the dependencies:

cd frontend
npm install

Run the frontend:

npm run dev

The frontend allows the user to enter the property information and receive the predicted house price.

Testing

The backend contains tests for the prediction API.

Run the tests with:

pytest

Git LFS

The trained model is stored using Git Large File Storage (Git LFS) because the model file is larger than GitHub's normal file-size limit.

Make sure Git LFS is installed before cloning and using the project.

git lfs install
git lfs pull

Technologies Used

- Python
- Pandas
- Scikit-learn
- FastAPI
- React
- TypeScript
- Vite
- Git
- GitHub
- Git LFS

Project Goal

The goal of this project is to provide a complete Machine Learning application where a trained model can be accessed through an API and used through a user-friendly web interface.