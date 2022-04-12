// libraries
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

// components
import Navigasi from "./components/Navigasi";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigasi />  
          <Product />
   
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/product:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </Router>
      {/* HOME SCREEN */}
      {/* PRODUCT SCREEN */}
      {/* CART SCREEN */}
    </div>
  );
}

export default App;
