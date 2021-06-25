import { faList, faPlus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import AddAdmin from "../AddAdmin/AddAdmin";
import AddMentor from "../AddMentor/AddMentor";
import Addservices from "../AddServices/Addservices";
import AllUser from "../AllUser/AllUser";
import "./Admin.css";

const Admin = () => {
  const [serviceList, setServiceList] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(false);
  const [user] = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:5000/allUser")
      .then((res) => res.json())
      .then((data) => {
        setServiceList(data);
      });
  }, [serviceList.length, fetchStatus]);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    }).then((res) => setFetchStatus(!fetchStatus));
  };
  // which one is display service,add service or add admin
  const [adminPanel, setAdminPanel] = useState({
    services: true,
    addServices: false,
    admin: false,
    mentor: false,
  });
  const service = () => {
    setAdminPanel({
      services: true,
      addServices: false,
      admin: false,
      mentor: false,
    });
  };
  const addService = () => {
    setAdminPanel({
      services: false,
      addServices: true,
      admin: false,
      mentor: false,
    });
  };
  const addAdmin = () => {
    setAdminPanel({
      services: false,
      addServices: false,
      admin: true,
      mentor: false,
    });
  };
  const addMentors = () => {
    setAdminPanel({
      services: false,
      addServices: false,
      admin: false,
      mentor: true,
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
            <Link onClick={addMentors}>
              <li>
                <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon> Add Mentor
              </li>
            </Link>
          </ul>
        </div>

        {/* main section */}

        <div className="col-md-10 p-0">
          <div style={{ width: "100%", background: "rgb(169 238 220)" }}>
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
                      <th>Delete User</th>
                    </tr>
                  </thead>
                  {serviceList.map((service, index) => (
                    <AllUser
                      setFetchStatus={setFetchStatus}
                      fetchStatus={fetchStatus}
                      service={service}
                      key={index}
                      handleDelete={handleDelete}
                    ></AllUser>
                  ))}
                </table>
              </>
            )}
            {adminPanel.addServices && <Addservices></Addservices>}
            {adminPanel.admin && <AddAdmin></AddAdmin>}
            {adminPanel.mentor && <AddMentor></AddMentor>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
