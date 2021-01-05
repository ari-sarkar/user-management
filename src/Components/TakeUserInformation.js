import React from "react";
import "../Styles/TakeUserInformation.scss";
import userLogo from "../Media/add-user.svg";
const TakeUserInformation = () => {
  return (
    <div id="user-logo__information-container">
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
          <form>
            <label>Email Id of User</label>
            <br />
            <input></input><br />
            <label>Role</label><br />
            <select id="roles">
              <option value="volvo">Admin</option>
              <option value="saab">Owner</option>
              <option value="opel">Sales</option>
            </select><br />
            <div className="btn-wrapper">
            <button id="cancel">Cancel</button>
            <button id="add">Add</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default TakeUserInformation;
