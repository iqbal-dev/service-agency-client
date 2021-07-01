import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Pie, PieChart, Tooltip } from "recharts";
import createPdf from "./jspdf";
import "./Stat.css";

// Default export is a4 paper, portrait, using millimeters for units

const Stat = () => {
  const [serviceList, setServiceList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allUser")
      .then((res) => res.json())
      .then((data) => {
        setServiceList(data);
      });
  }, []);
  const pending = serviceList.filter((service) => service.status === "pending");
  const onGoing = serviceList.filter(
    (service) => service.status === "on going"
  );
  const done = serviceList.filter((service) => service.status === "Done");
  const data = [
    { name: "pending", value: pending.length },
    { name: "on going", value: onGoing.length },
    { name: "done", value: done.length },
  ];
  console.log(pending);

  return (
    <div className="py-5 row justify-content-around">
      <ul className="ul col-md-5">
        <li className="li">
          <Button
            variant="danger"
            onClick={() => createPdf(pending, pending.length, "Pending")}
          >
            Download all Pending Status
          </Button>
        </li>
        <li className="li">
          <Button
            variant="warning"
            onClick={() => createPdf(onGoing, onGoing.length, "On going")}
          >
            Download all On Going Status
          </Button>
        </li>
        <li className="li">
          <Button
            variant="success"
            onClick={() => createPdf(done, done.length, "done")}
          >
            Download all Done Status
          </Button>
        </li>
      </ul>
      {data.length && (
        <PieChart className="col-md-5" width={400} height={250}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
          <Tooltip />
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
        </PieChart>
      )}
    </div>
  );
};

export default Stat;
