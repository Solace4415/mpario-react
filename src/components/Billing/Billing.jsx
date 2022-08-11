import React from "react";
import Button from "../Button/Button";
import "./billing.css";

const Billing = ({ setActive }) => {
  return (
    <div className="billing">
      <form className="billing-form">
        <div className="billing-form-div">
          <label>
            Name on Card <span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <input
            className="billing-form-input"
            type="text"
            name="cardName"
            id="cardName"
            placeholder="Opera Linus Ahmed"
          />
        </div>
        <div className="billing-form-div">
          <label>
            Card Type <span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <select className="billing-form-input">
            <option value="Visa">Visa</option>
            <option value="Master">Master</option>
          </select>
        </div>

        <div className="billing-form-div-half">
          <div>
            <label>
              Card details <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              className="billing-form-div-half-first"
              type="text"
              name="cardDetails"
              id="name"
              placeholder="44960  44960  44960  44960"
            />
          </div>
          <div>
            <label>
              Expiry date <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              className="billing-form-div-half-mid"
              type="text"
              name="expireDate"
              id="expire"
              placeholder="04 / 23"
            />
          </div>
          <div>
            <label>
              CVV <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              className="billing-form-div-half-last"
              type="text"
              name="cvv"
              id="cvv"
              placeholder="923"
            />
          </div>
        </div>
        <Button handleClick={() => setActive("confirmPayment")} />
      </form>
    </div>
  );
};

export default Billing;
