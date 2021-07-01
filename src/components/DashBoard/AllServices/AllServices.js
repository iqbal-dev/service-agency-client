import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AllServices = () => {
  const [service, setService] = useState([]);
  const [view, setView] = useState("");
  const [selected, setSelected] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setSelected([]);
  };
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setService(data);
        }
      });
  }, []);

  const handleView = (e) => {
    setView(e);
  };
  useEffect(() => {
    fetch("http://localhost:5000/selectPerson", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: view }),
    })
      .then((response) => response.json())
      .then((result) => setSelected(result));
  }, [view]);
  console.log(selected);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>service picture</th>
            <th>Starting Date</th>
            <th>Course Price</th>
            <th>Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {service.map((service) => (
            <tr key={service._id}>
              <td>
                <strong>{service.title}</strong>
              </td>
              <td>
                <img
                  src={`data:image/png;base64,${service.image.img}`}
                  alt="Service picture"
                  style={{ height: "100px" }}
                />
              </td>
              <td>{service.date}</td>
              <td>{service.price}</td>
              <td>{service.duration}</td>
              <td>
                <span
                  style={{ marginRight: "20px", cursor: "pointer" }}
                  onClick={() => {
                    setShow(true);
                    handleView(service.title);
                  }}
                >
                  View
                </span>
                <span style={{ marginRight: "20px", cursor: "pointer" }}>
                  Edit
                </span>
                <span style={{ marginRight: "20px", cursor: "pointer" }}>
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Total Enroll :{selected.length}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-info">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {selected.map((selected) => (
                  <tr>
                    <td>{selected.name}</td>
                    <td>{selected.email}</td>
                    <td>{selected.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </>
  );
};

export default AllServices;
