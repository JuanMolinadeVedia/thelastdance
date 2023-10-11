import "./App.css";
import { Login } from "./Components/Login/Login";
import { Mainpage } from "./Components/Mainpage/Mainpage";
import { CardDetails } from "./Components/CardDetails/CardDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./Components/Shop/Shop";
import { Cart } from "./Components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:id" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
