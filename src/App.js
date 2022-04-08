import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./Components/MyNavbar";
import Home from "./pages/Home";
import PopularDishes from "./pages/PopularDishes";
import Restaurents from "./pages/Restaurents";
import Offers from "./pages/Offers";
import SignIn from "./pages/Login";
import Signup from "./pages/Signup";
import AuthProvider from "./Components/contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";

const App = () => (
  <Router>
    <ToastContainer />
    <AuthProvider>
      <div>
        <MyNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/popular_dishes" element={<PopularDishes />} />
          <Route exact path="/restaurents" element={<Restaurents />} />
          <Route exact path="/offers" element={<Offers />} />
          <Route exact path="/login" element={<SignIn />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </AuthProvider>
  </Router>
);

export default App;
