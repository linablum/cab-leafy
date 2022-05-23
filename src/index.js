import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Header from "./views/Header";
import Footer from "./views/Footer";
import List from "./views/List";
import Login from "./views/Login";
import Chat from "./views/Chat";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
