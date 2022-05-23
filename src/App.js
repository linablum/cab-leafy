import { React } from "react";
//import { useNavigate } from "react-router-dom";
import "./App.css";
import GetData from "./FetchData";
import Header from "./views/Header.js";

const App = () => {
  return (
    <div className="App">
      <GetData />
    </div>
  );
};

export default App;
