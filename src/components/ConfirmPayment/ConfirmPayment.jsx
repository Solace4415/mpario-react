import React from "react";
import Button from "../Button/Button";
import "./confirmPayment.css";
import {useNavigate} from "react-router-dom"

const ConfirmPayment = () => {
  const navigate = useNavigate()
  return (
    <div className="confirmPayment">
      <div className="confirmPayment-head">
        <div className="confirmPayment-head-th">
          <div className="confirmPayment-head-price">
            <p>Item Name</p>
            <p> ₦ Price</p>
          </div>
          <div className="confirmPayment-head-data">
            <p>Data science and usability</p>
            <p>50,000.00</p>
          </div>
          <div className="confirmPayment-head-shipping">
            <p>Shipping</p>
            <p>0.00</p>
          </div>
          <div className="confirmPayment-head-div" />
          <div className="confirmPayment-head-total">
            <p>Total</p>
            <p>50,000.00</p>
          </div>
        </div>
        <Button handleClick={() => navigate("/paymentSuccess")}/>
      </div>
    </div>
  );
};

export default ConfirmPayment;
