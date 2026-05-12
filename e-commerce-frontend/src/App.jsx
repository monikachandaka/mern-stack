/* eslint-disable react-refresh/only-export-components */
import { BrowserRouter, Route, Routes } from "react-router-dom";
;
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";

import LandingPage from './Pages/LandingPage';
import CartPage from './Pages/CartPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Dashboard from './Pages/Dashboard';
import CartProvider from "./service/CartProvider";
import ErrorPage from "./Pages/ErrorPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import { useState } from "react";

const App = () => {

const [isLogin, setLogin]= useState();
const getToken=()=>{
  const token = localStorage.getItem("token");
  setLogin(token);

  useEffect(()=>{
    getToken();
  },[]);
}




  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="" element={<LandingPage />} />
          <Route path="cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={
          <ProtectedRoute authenticated={isLogin}>
               <Home />
          </ProtectedRoute>
         }
          />
        <Route path="products" element={
          <ProtectedRoute authenticated={isLogin}>
            <Products />
          </ProtectedRoute>
        } />
        <Route path="dashboard" element={
          <ProtectedRoute authenticated={isLogin}>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;