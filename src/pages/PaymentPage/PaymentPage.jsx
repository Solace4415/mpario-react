import React, { useState } from "react";
import Billing from "../../components/Billing/Billing";
import ConfirmPayment from "../../components/ConfirmPayment/ConfirmPayment";
import Personal from "../../components/Personal/Personal";
import Nav from "../../components/Nav/Nav";
import "./paymentPage.css";

const PaymentPage = () => {
  const [active, setActive] = useState("personal");

  return (
    <div className="paymentPage">
      <Nav active={active} setActive={setActive} />
      {active === "personal" ? (
        <Personal setActive={setActive}/>
      ) : active === "billing" ? (
        <Billing  setActive={setActive}/>
      ) : active === "confirmPayment" ? (
        <ConfirmPayment />
      ) : null}
    </div>
  );
};

export default PaymentPage;
