import React, { useEffect, useState } from "react";
import "./ServiceList.css";

const ServiceList = () => {
  const [orderlist, setOrderlist] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:5000/orderlist?email=" + sessionStorage.getItem("email")
    )
      .then((res) => res.json())
      .then((data) => {
        setOrderlist(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="row ">
      {orderlist.map((service, index) => (
        <div
          className="col-md-5"
          key={index}
          style={{
            display: service.muteStatus === "active" ? "none" : "inline",
          }}
        >
          <div className="serviceList-container p-5">
            <div className="row justify-content-between">
              <div className=" col-md-6">
                <img
                  className="img-fluid"
                  style={{ height: "60px" }}
                  src={service.courseImg}
                  alt=""
                />
              </div>
              {service.status === "pending" && (
                <div class=" col-md-4 alert alert-danger" role="alert">
                  {service.status}
                </div>
              )}
              {service.status === "on going" && (
                <div class=" col-md-4 alert alert-warning" role="alert">
                  {service.status}
                </div>
              )}
              {service.status === "Done" && (
                <div class=" col-md-4 alert alert-success" role="alert">
                  {service.status}
                </div>
              )}
            </div>
            <h4>{service.title}</h4>
            <small>{service.description}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
