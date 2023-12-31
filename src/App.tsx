import "./App.css";
import { Login } from "./Components/Login/Login";
import { Mainpage } from "./Components/Mainpage/Mainpage";
import { CardDetails } from "./Components/CardDetails/CardDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./Components/Shop/Shop";
import { UserProfile } from "./Components/UserProfile/UserProfile";
import { Cart } from "./Components/Cart/Cart";
import { Wishlist } from "./Components/Wishlist/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:id" element={<CardDetails />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
