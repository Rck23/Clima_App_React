import "./assets/css/App.css";
import NavBar from "./components/NavBar";
import ClimaPanel from "./components/ClimaPanel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App d-flex flex-column">
      <NavBar />
      <ClimaPanel />
      <Footer />
    </div>
  );
}

export default App;
