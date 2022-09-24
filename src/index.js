import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Admin from "./routes/Admin";
import UserPage from "./routes/UserPage";
import HomeBar from './routes/Home';
import Admin2 from './routes/Admin2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route path="/" element={<HomeBar />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin2" element={<Admin2 />} />

          <Route path="/login" element={<Login />} />
         <Route path="/admin" element={<Admin />} />
         <Route path="/userpage" element={<UserPage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Coming Soon!!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
