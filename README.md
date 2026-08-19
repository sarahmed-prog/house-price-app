House Price Prediction

Project Overview

This project is a Machine Learning web application that predicts the price of a house based on some information about the property.

The user enters the property details through the website, and the application sends the data to the backend. The trained Machine Learning model then predicts the house price and shows the result to the user.

The project is divided into three main parts:

- Machine Learning model
- FastAPI backend
- React frontend

Project Structure
```text
house_price_predection/
├── backend/
│   ├── app/
│   ├── models/
│   │   └── house_price.pkl
│   ├── tests/
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── notebooks/
│   └── house_prices.ipynb
│
├── .gitignore
├── .gitattributes
└── README.md
```

Machine Learning

The model was trained using the House Price dataset.

Before training the model, the data was cleaned and prepared. The preprocessing included handling missing values, converting some columns to numeric values, grouping locations, and preparing categorical features.

A Machine Learning pipeline was used so that the preprocessing and the model are saved together.

The trained model is saved in:

```text
backend/models/house_price.pkl
```

The model file is stored using Git LFS because of its size.

Backend

The backend was built using FastAPI.

It receives the property information from the frontend, sends it to the trained model, and returns the predicted house price.

Install Backend Requirements

From the project root:

``text
pip install -r backend/requirements.txt
```

Run the Backend

```text
uvicorn app.main:app --reload --app-dir backend
```

The backend runs on:

```text
http://127.0.0.1:8000
```

Frontend

The frontend was built using React, TypeScript, and Vite.

The user can enter information such as:

- Location
- Furnishing
- Transaction
- Ownership
- Facing
- Carpet Area
- Floor
- Bathrooms
- Balconies

The frontend sends this information to the backend and displays the predicted price.

Install Frontend Dependencies

```text
cd frontend
npm install
```

Run the Frontend

```text
npm run dev
```

The frontend will provide a local URL that can be opened in the browser.

Testing

The backend contains tests for the prediction API.

Tests can be run using:

```text
pytest
```

Git LFS

Git LFS is used to store the trained model file.

After cloning the repository, make sure Git LFS is installed:

```text
git lfs install
git lfs pull
```

Technologies Used

- Python
- Pandas
- NumPy
- Scikit-learn
- FastAPI
- React
- TypeScript
- Vite
- Git
- GitHub
- Git LFS

Project Goal

The main goal of this project was to build a complete Machine Learning application, starting from preparing the dataset and training the model, then connecting the model to a FastAPI backend and creating a simple web interface for making predictions.