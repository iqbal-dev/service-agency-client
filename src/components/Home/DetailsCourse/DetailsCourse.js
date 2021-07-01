import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import Navbar from "../Header/Navbar/Navbar";
import "./DetailsCourse.css";
const DetailsCourse = () => {
  const history = useHistory();
  const [serviceList, setServiceList] = useState([]);
  const [mentor, setMentor] = useState({});
  const [student, setStudent] = useState([]);
  const [user, setUser] = useContext(UserContext);
  console.log(user);
  useEffect(() => {
    fetch("http://localhost:5000/allUser")
      .then((res) => res.json())
      .then((data) => {
        setServiceList(data);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/findMentor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mentorName: user.mentorName }),
    })
      .then((res) => res.json())
      .then((res) => setMentor(res.data[0]));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: user.title }),
    })
      .then((res) => res.json())
      .then((res) => setStudent(res.data));
  }, []);
  console.log("====================================");
  console.log(mentor);
  console.log("====================================");
  return (
    <div>
      <Navbar />
      <div className="banner">
        <div className="opacity d-flex align-items-center justify-content-center">
          <div className="text-white text-center">
            <h1>{user.title}</h1>
            <br />
            <h5>{user.description}</h5>
            <button
              onClick={() => history.push("/dashboard")}
              className="banner-button"
            >
              Buy This course
            </button>
          </div>
        </div>
      </div>
      <div className="details-containers my-5">
        <div className="row justify-content-around ">
          <div className="content col-4">
            <h1>What to learn in this course?</h1>
            <hr />
            <h3>At the end of this course you learn-</h3>
            <br />
            <p>{user.courseOutline}</p>
          </div>
          <div className="content-right col-4">
            {mentor.image && (
              <div className="mb-3" style={{ background: "rgb(169 238 220)" }}>
                <img
                  className="m-3"
                  src={`data:image/png;base64,${mentor.image.img}`}
                  alt=""
                  style={{ height: "200px", width: "95%" }}
                />
                <div
                  className="pb-3"
                  style={{ textAlign: "end", width: "95%" }}
                >
                  <h4>{mentor.mentorName}</h4>
                </div>
              </div>
            )}
            <div className="row justify-content-around align-items-center border mx-3 p-2">
              <div className="col-6">
                <h4>{user.price} BDT</h4>
              </div>
              <button
                onClick={() => history.push("/dashboard")}
                className="btn col-6 btn-info px-4 py-3  text-bold"
                style={{ fontWeight: "bold", fontSize: "20px" }}
              >
                Buy This course
              </button>
            </div>
            <br />
            <br />
            <div className="row justify-content-around p-2 mx-3">
              <div className="col-4">
                <h4>Duration</h4>
                <p>
                  <strong>{user.duration}</strong>
                </p>
              </div>
              <div className="col-4">
                <h4>Language</h4>
                <p>
                  {" "}
                  <strong>{user.language}</strong>
                </p>
              </div>
              <div className="col-4">
                <h4>Current Enroll</h4>
                <p>
                  <strong>{student.length && student.length}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCourse;
