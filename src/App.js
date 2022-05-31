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
import Register from "./views/Register";
import { PlantsContextProvider } from "./context/plantsContext";
import { AuthContextProvider } from "./context/authContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { app } from "./utils/config";

const App = () => {
  console.log(app);
  return (
    <div className="App">
      <AuthContextProvider>
        <PlantsContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<GetData />} />
            <Route path="/details" element={<Details />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/chat"
              element={
                <ProtectedRoute>
                  <Chat />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </PlantsContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
