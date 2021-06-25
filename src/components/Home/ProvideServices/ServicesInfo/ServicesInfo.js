import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../App";
import "./ServiceInfo.css";

const ServicesInfo = ({ service }) => {
  const [user, setUser] = useContext(UserContext);
  console.log(service);
  const handleCourse = (
    id,
    title,
    description,
    courseImg,
    mentorName,
    duration,
    language,
    price,
    courseOutline
  ) => {
    const newUser = {
      id: id,
      title: title,
      description: description,
      courseImg: courseImg,
      mentorName: mentorName,
      duration: duration,
      language: language,
      price: price,
      courseOutline: courseOutline,
    };
    setUser(newUser);
  };
  console.log(service);
  return (
    <div className="col-md-4">
      <div
        className="service-container"
        style={{ background: "rgb(169 238 220)" }}
      >
        <Link
          to="/course-details"
          onClick={() =>
            handleCourse(
              service._id,
              service.title,
              service.description,
              service.image.img,
              service.mentorName,
              service.duration,
              service.language,
              service.price,
              service.courseOutline
            )
          }
        >
          <div className="content" style={{ width: "200px", margin: "0 auto" }}>
            {service.image ? (
              <img
                className="img-fluid mr-auto"
                style={{ height: "200px" }}
                src={`data:image/png;base64,${service.image.img}`}
                alt=""
              />
            ) : (
              <img
                className="img-fluid mr-auto rounded"
                style={{ height: "200px" }}
                src={service.img}
                alt=""
              />
            )}
          </div>

          <div
            style={{
              textAlign: "center",
              fontFamily: "poppins",
              margin: "20px 0",
            }}
          >
            <h5>
              <strong>{service.title}</strong>
            </h5>
            <p>{service.description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServicesInfo;
