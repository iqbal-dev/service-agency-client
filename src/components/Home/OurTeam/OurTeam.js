import { Audio, useLoading } from "@agney/react-loading";
import React, { useEffect, useState } from "react";
import Navbar from "../Header/Navbar/Navbar";

const OurTeam = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Audio width="50" />,
  });
  const [mentor, setMentor] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/mentor")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setLoader(false);
          setMentor(data);
        }
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="container provider-container">
        <h1 className="text-center font-family" style={{ fontWeight: "600" }}>
          Our Team <span style={{ color: "#7AB259" }}>Members</span>
        </h1>

        {loader && (
          <section className="text-center" {...containerProps}>
            {indicatorEl}
          </section>
        )}
        <div className="row">
          {mentor.map((service) => (
            <div className="col-md-4">
              <div className="service-container">
                <div
                  className="content"
                  style={{ width: "100px", margin: "0 auto" }}
                >
                  {service.image ? (
                    <img
                      className="img-fluid mr-auto rounded-circle"
                      style={{ height: "100px" }}
                      src={`data:image/png;base64,${service.image.img}`}
                      alt=""
                    />
                  ) : (
                    <img
                      className="img-fluid mr-auto rounded-circle"
                      style={{ height: "100px" }}
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
                    <strong>{service.mentorName}</strong>
                  </h5>
                  <h6>Mentor Expertise: {service.expertise}</h6>
                  <h6>{service.batchTime}</h6>
                  <small>{service.mentorDescription}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurTeam;
