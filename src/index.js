import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Header from "./views/Header";
import Footer from "./views/Footer";
import Details from "./views/Details";
import GetData from "./components/GetData";
import Login from "./views/Login";
import Chat from "./views/Chat";
import { PlantsContextProvider } from "./context/PlantsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PlantsContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<GetData />} />
          <Route path="/details" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <App />
        <Footer />
      </PlantsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
