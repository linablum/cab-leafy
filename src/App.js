import { React } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./views/Header";
import Footer from "./views/Footer";
import Details from "./views/Details";
import GetData from "./components/GetData";
import Login from "./views/Login";
import Logout from "./views/Logout";
import Chat from "./views/Chat";
import { PlantsContextProvider } from "./context/plantsContext";
import { AuthContextProvider } from "./context/authContext";

const App = () => {
  return (
    <div className="App">
      <PlantsContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<GetData />} />
          <Route path="/details" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <Footer />
      </PlantsContextProvider>
    </div>
  );
};

export default App;
