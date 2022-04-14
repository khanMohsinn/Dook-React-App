import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./Components/MyNavbar";
import Home from "./pages/Home";
import PopularDishes from "./pages/PopularDishes";
import Menu from "./pages/Menu";
import Offers from "./pages/Offers";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthProvider from "./Components/contexts/AuthContext";
import Layout from "./Components/Layout";
import RequireAuth from "./Components/RequireAuth";
import RedirectAuth from "./Components/RedirectAuth";
import Cart from "./pages/Cart";

const App = () => (
  <Router>
    <AuthProvider>
      <div>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route element={<RedirectAuth />}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
            </Route>

            <Route element={<RequireAuth />}>
              <Route exact path="/popular_dishes" element={<PopularDishes />} />
              <Route exact path="/offers" element={<Offers />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/menu" element={<Menu />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  </Router>
);

export default App;
