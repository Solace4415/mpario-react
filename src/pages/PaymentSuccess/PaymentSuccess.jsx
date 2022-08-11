import React from "react";
import "./paymentSuccess.css";
import { IoMdCheckmark } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="purchase">
      <div className="purchase-div">
        <div className="purchase-div-icon">
          <div>
            <IoMdCheckmark className="purchase-icon" />
          </div>
        </div>
        <p className="purchase-first">Purchase Completed </p>
        <p className="purchase-mid">
          Please check your email for details concerning <br />
          this transaction
        </p>
        <p className="purchase-last" onClick={() => navigate("/")}>
          Return Home
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
