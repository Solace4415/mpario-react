import React from "react";
import "./nav.css";

const Nav = ({ active, setActive }) => {
  return (
    <div className="nav">
      <div>
        <p className="nav-heading">Complete your Purchase</p>
        <div className="navbar-body">
          <div className="nav-body">
            <div>
              <p
                className={
                  active === "personal" ? "nav-body-p active" : "nav-body-p"
                }
                onClick={() => setActive("personal")}
              >
                Personal Info
              </p>
              {active === "personal" && <div className="div-nav" />}
            </div>

            <div>
              <p
                className={
                  active === "billing" ? "nav-body-p active" : "nav-body-p"
                }
                onClick={() => setActive("billing")}
              >
                Billing Info
              </p>
              {active === "billing" && <div className="div-nav" />}
            </div>

            <div>
              <p
                className={
                  active === "confirmPayment"
                    ? "nav-body-p active"
                    : "nav-body-p"
                }
                onClick={() => setActive("confirmPayment")}
              >
                Confirm Payment
              </p>
              {active === "confirmPayment" && <div className="div-nav" />}
            </div>
          </div>
          <div className="nav-div-nav" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
