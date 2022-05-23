import "./App.css";
import GetData from "./FetchData";
import Header from "./views/Header.js";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <GetData />
      </main>
    </div>
  );
}

export default App;
