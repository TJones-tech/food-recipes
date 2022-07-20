import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

import Main from "./pages/Main";
import Recipes from "./pages/Recipes";
import Specials from "./pages/Specials";


function App() {
  
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/specials" element={<Specials />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
