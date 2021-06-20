import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faList,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import "./Customer.css";
import ServiceList from "../ServiceList/ServiceList";
import Order from "../Order/Order";
import Review from "../Review/Review";
import { UserContext } from "../../../App";

const Customer = () => {
  const [user] = useContext(UserContext);
  const [customer, setCustomer] = useState({
    makeOrder: true,
    serviceList: false,
    review: false,
  });

  const order = () => {
    setCustomer({
      makeOrder: true,
      serviceList: false,
      review: false,
    });
  };
  const serviceList = () => {
    setCustomer({
      makeOrder: false,
      serviceList: true,
      review: false,
    });
  };
  const review = () => {
    setCustomer({
      makeOrder: false,
      serviceList: false,
      review: true,
    });
  };

  return (
    // header portion
    <div style={{ marginLeft: "50px" }}>
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
                Order<span className="sr-only">(current)</span>
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
            <Link onClick={order}>
              <>
                <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon> Order
              </>
            </Link>
            <Link onClick={serviceList}>
              <li>
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon> Service List
              </li>
            </Link>
            <Link onClick={review}>
              <li>
                <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon> Review
              </li>
            </Link>
          </ul>
        </div>

        {/* main part */}

        <div className="col-md-10 p-0">
          <div style={{ background: "#F4F7FC" }}>
            {customer.makeOrder && <Order></Order>}
            {customer.serviceList && <ServiceList></ServiceList>}
            {customer.review && <Review></Review>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
