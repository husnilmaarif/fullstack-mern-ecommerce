import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <div className="App">
      <h1>selamat datang</h1>
      {/* NAVBAR */}
      {/* SIDE DRAWER */}
      {/* BACKDROP */}
      <Router>
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
