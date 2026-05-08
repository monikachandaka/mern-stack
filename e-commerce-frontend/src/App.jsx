import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Products from "./Pages/Products";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/style.css";
import LandingPage from "./Pages/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
         <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

