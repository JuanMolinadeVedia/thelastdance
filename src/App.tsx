import "./App.css";
import { CardDetails } from "./Components/CardDetails/CardDetails.tsx";
import { Login } from "./Components/Login/Login";
import { Mainpage } from "./Components/Mainpage/Mainpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/item/:id" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
