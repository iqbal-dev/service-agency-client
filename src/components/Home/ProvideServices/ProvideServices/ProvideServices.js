import { Audio, useLoading } from "@agney/react-loading";
import React, { useEffect, useState } from "react";
import ServicesInfo from "../ServicesInfo/ServicesInfo";
import "./ProvideService.css";

const ProvideServices = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Audio width="50" />,
  });
  const [service, setService] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setLoader(false);
          setService(data);
        }
      });
  }, []);

  return (
    <div className="container provider-container">
      <h1
        className="my-4 text-center font-family"
        style={{ fontWeight: "600" }}
      >
        Provide awesome <span style={{ color: "#7AB259" }}>services</span>
      </h1>

      {loader && (
        <section className="text-center" {...containerProps}>
          {indicatorEl}
        </section>
      )}
      <div className="row">
        {service.map((service) => (
          <ServicesInfo service={service} key={service._id}></ServicesInfo>
        ))}
      </div>
    </div>
  );
};

export default ProvideServices;
