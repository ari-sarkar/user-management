import React, { useState, useEffect } from "react";
import TakeUserInformation from "./TakeUserInformation";
import Navigation from "./Navigation";
import "../Styles/DisplayUsersInformation.scss";
import trash from "../Media/delete.svg";
const DisplayUsersInformation = () => {
  /////////////state
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [userData, setUserData] = useState([]);
  const [btnCliked, setBtnClicked] = useState(false);

  ////////useEffect
  useEffect(() => {
    const getData = localStorage.getItem("data");
    if (getData) setUserData(JSON.parse(getData));
  }, []);

  ////////functions
  const deleteDatafromLocale = e => {
    console.log(e.target.value);
    let index = e.target.value;
    userData.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(userData));
    setBtnClicked(!btnCliked);
  };
  return (
    <section id="nav-user__display__input-container">
      <Navigation />
      <div id="display-user-wrapper">
        <TakeUserInformation
          isBtnClicked={isBtnClicked}
          setIsBtnClicked={setIsBtnClicked}
        />
        <div className="add-user-btn">
          <button onClick={e => setIsBtnClicked(!isBtnClicked)}>
            Add User
          </button>
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
            {userData.length ? (
              userData.map((item, index) => (
                <tr className="table-row" key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{item.email}</td>
                  <td> </td>
                  <td>{item.role}</td>
                  <td>
                    <button
                      className="trash-btn-wrapper"
                      value={index}
                      onClick={deleteDatafromLocale}
                    >
                      <img className="trash-btn" src={trash} alt="trash"></img>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <div className="nodata">NO User Data</div>
            )}
          </table>
        </div>
      </div>
    </section>
  );
};

export default DisplayUsersInformation;
