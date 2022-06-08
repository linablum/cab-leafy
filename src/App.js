import { React } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./views/Header";
import Footer from "./views/Footer";
import GetData from "./components/GetData";
import Login from "./views/Login";
import Logout from "./views/Logout";
import Chat from "./views/Chat";
import Register from "./views/Register";
import Home from "./views/Home";
import UserProfile from "./views/UserProfile";
import { PlantsContextProvider } from "./context/plantsContext";
import { AuthContextProvider } from "./context/authContext";
import { UserProfileContextProvider } from "./context/favouritesContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div className="App">
      <AuthContextProvider>
        <UserProfileContextProvider>
          <PlantsContextProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details" element={<GetData />} />
              {/* {NOTE instead of having a modal to show details, you could've used the URL parameters, from React Router, with a relative URL} */}
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/userprofile"
                element={
                  <ProtectedRoute>
                    <UserProfile />
                  </ProtectedRoute>
                }
              />
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
        </UserProfileContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
