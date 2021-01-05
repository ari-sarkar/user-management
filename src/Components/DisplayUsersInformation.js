import React from "react";
import TakeUserInformation from "./TakeUserInformation";
import Navigation from "./Navigation";
import "../Styles/DisplayUsersInformation.scss";
const DisplayUsersInformation = () => {
  return (
    <section id="nav-user__display__input-container">
      <Navigation />
      <div id="display-user-wrapper">
      <TakeUserInformation />
        <div className="add-user-btn">
          <button>Add User</button>
        </div>
        <div className="display-user-table">
          <table>
            <tr className="table-row">
              <th>#</th>
              <th>User</th>
              <th>Last Signed In</th>
              <th>Role</th>
              <th></th>
            </tr>
            <tr className="table-row">
              <td>1</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DisplayUsersInformation;
