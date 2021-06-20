import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faList, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import "./Admin.css";
import AllUser from "../AllUser/AllUser";
import Addservices from "../AddServices/Addservices";
import AddAdmin from "../AddAdmin/AddAdmin";
import { UserContext } from "../../../App";

const Admin = () => {
  const [serviceList, setServiceList] = useState([]);
  const [user] = useContext(UserContext);
  useEffect(() => {
    fetch("https://infinite-fjord-10812.herokuapp.com/allUser")
      .then((res) => res.json())
      .then((data) => {
        setServiceList(data);
      });
  }, []);

  // which one is display service,add service or add admin
  const [adminPanel, setAdminPanel] = useState({
    services: true,
    addServices: false,
    admin: false,
  });
  const service = () => {
    setAdminPanel({
      services: true,
      addServices: false,
      admin: false,
    });
  };
  const addService = () => {
    setAdminPanel({
      services: false,
      addServices: true,
      admin: false,
    });
  };
  const addAdmin = () => {
    setAdminPanel({
      services: false,
      addServices: false,
      admin: true,
    });
  };
  return (
    <div style={{ marginLeft: "50px" }}>
      {/* header portion */}

      <nav className="navbar navbar-expand-lg navbar-light mt-4">
        <Link className="navbar-brand" to="/home">
          <img
            className="img-fluid"
            style={{ height: "50px" }}
            src={require("../../../images/logos/logo.png")}
            alt=""
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active ">
              <Link className="nav-link" href="#">
                Admin<span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <span className="navbar-text mr-5">{user.name}</span>
        </div>
      </nav>

      {/* sidebar */}

      <div className="row " style={{ margin: "0 auto" }}>
        <div className="col-md-2">
          <ul>
            <Link onClick={service}>
              <li>
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon> Service List
              </li>
            </Link>
            <Link onClick={addService}>
              <>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add service
              </>
            </Link>
            <Link onClick={addAdmin}>
              <li>
                <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon> Add Admin
              </li>
            </Link>
          </ul>
        </div>

        {/* main section */}

        <div className="col-md-10 p-0">
          <div style={{ width: "100%", background: "#F4F7FC" }}>
            {adminPanel.services && (
              <>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>EmailId</th>
                      <th>Service</th>
                      <th>ProjectDetails</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  {serviceList.map((service, index) => (
                    <AllUser service={service} key={index}></AllUser>
                  ))}
                </table>
              </>
            )}
            {adminPanel.addServices && <Addservices></Addservices>}
            {adminPanel.admin && <AddAdmin></AddAdmin>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
