import React from "react";
import Button from "../Button/Button";
import NaijaStates from "naija-state-local-government";
import "./personal.css";

const Personal = ({ setActive }) => {
  const states = NaijaStates.states();
  return (
    <div className="personal">
      <form className="personal-form">
        <div className="personal-form-div">
          <label>Name</label>
          <br />
          <input
            className="personal-form-input"
            type="text"
            name="fullName"
            id="name"
            placeholder="Opera Linus Hammed"
          />
        </div>

        <div className="personal-form-div">
          <label>
            Email Address <span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <p className="personal-form_p">
            The purchase reciept would be sent to this address
          </p>
          <input
            className="personal-form-input"
            type="email"
            name="email"
            id="email"
            placeholder="OparaLinusAhmed@devmail.com"
          />
        </div>
        <div className="personal-form-div">
          <label>Address 1</label>
          <br />
          <input
            className="personal-form-input"
            type="text"
            name="address1"
            id="address1"
            placeholder="The address of the user goes here"
          />
        </div>

        <div className="personal-form-div">
          <label>Address 2</label>
          <br />
          <input
            className="personal-form-input"
            type="text"
            name="address2"
            id="address2"
            placeholder="And here"
          />
        </div>

        <div className="personal-form-div-half">
          <div>
            <label>Local Government</label>
            <br />
            <input
              className="personal-form-input-local"
              type="text"
              name="local-government"
              id="local"
              placeholder="Opera Linus Hammed"
            />
          </div>
          <div>
            <label>State</label>
            <br />
            <select className="personal-form-input-state">
              <option value="Select State">Select State</option>
              {states.map((state) => (
                <option value={state} key={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Button handleClick={() => setActive("billing")} />
      </form>
    </div>
  );
};

export default Personal;
