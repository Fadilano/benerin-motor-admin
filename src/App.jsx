import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Payments from "./pages/Payments";
import Settings from "./pages/Settings";

const App = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/products" element={<Products />} />
    <Route path="/customers" element={<Customers />} />
    <Route path="/payments" element={<Payments />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
);

export default App;
