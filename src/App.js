import React from "react";
import "./App.css";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router className="app">
      <Routes>
        <Route path="/" element={<PaymentPage />} />
        <Route path="/paymentSuccess" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;
