import React, { useState } from "react";
import "../Styles/TakeUserInformation.scss";
import userLogo from "../Media/add-user.svg";
const TakeUserInformation = ({ isBtnClicked, setIsBtnClicked }) => {
  /////////////state
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Admin");

  //////////functions
  const clickedOnCancel = e => {
    e.preventDefault();
    setEmail("");
    setIsBtnClicked(!isBtnClicked);
  };

  const setDataInLocalStorage = e => {
    let newArrOne = [];
    let newArrTwo = [];
    if (localStorage.getItem("data")) {
      newArrOne = JSON.parse(localStorage.getItem("data"));
      if (newArrOne) newArrOne.push({ email: email, role: role });
      localStorage.setItem("data", JSON.stringify(newArrOne));
    } else {
      newArrTwo.push({ email: email, role: role });
      localStorage.setItem("data", JSON.stringify(newArrTwo));
    }
  };

  return (
    <div
      className={
        isBtnClicked
          ? "user-logo__information-container"
          : "user-logo__information-container hide"
      }
    >
      <div className="user-logo-description-wrapper">
        <img src={userLogo} alt="user-logo"></img>
        <p>
          Some random text goes here Some random text goes here Some random text
          goes here Some random text goes here Some random text goes here Some
          random text goes here Some random text goes here
        </p>
      </div>
      <div className="user-informmation-container">
        <div className="user-informmation-wrapper">
          <h5>User Information</h5>
          <form onSubmit={setDataInLocalStorage}>
            <label>Email Id of User</label>
            <br />
            <input
              type="email"
              required
              onChange={e => setEmail(e.target.value)}
              value={email}
            ></input>
            <br />
            <label>Role</label>
            <br />
            <select
              id="roles"
              type="text"
              required
              onChange={e => setRole(e.target.value)}
              value={role}
            >
              <option value="Admin">Admin</option>
              <option value="Owner">Owner</option>
              <option value="Sales">Sales</option>
            </select>
            <br />
            <div className="btn-wrapper">
              <button id="cancel" onClick={clickedOnCancel}>
                Cancel
              </button>
              <button id="add" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TakeUserInformation;
