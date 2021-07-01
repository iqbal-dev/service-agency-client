import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Allservice = () => {
  const [allResults, setAllResults] = useState([]);
  const [mentorDetails, setMentorDetails] = useState({});
  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(false);
  const handleEdit = (e) => {
    const mentordetails = allResults.filter((mentor) => mentor._id === e);
    setMentorDetails({
      title: mentordetails[0].title,
      description: mentordetails[0].description,
      duration: mentordetails[0].duration,
      date: mentordetails[0].date,
      id: e,
    });
    setShow(true);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/service`)
      .then((res) => res.json())
      .then((result) => setAllResults(result));
  }, [status]);
  const handleClose = () => setShow(false);
  const handleSubmit = () => {
    setShow(false);
    fetch(`http://localhost:5000/editService/${mentorDetails.id}`, {
      method: "POST",
      body: mentorDetails,
    }).then(() => setStatus(!status));
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>action</th>
          </tr>
        </thead>
        {allResults.map((allResults) => (
          <tbody>
            <tr>
              <td>{allResults.title}</td>
              <td style={{ width: "400px" }}>{allResults.description}</td>
              <td>{allResults.duration}</td>
              <td>{allResults.date}</td>
              <td className="d-flex justify-content-around">
                <FontAwesomeIcon
                  onClick={() => handleEdit(allResults._id)}
                  variant="danger"
                  className=" font-bold"
                  icon={faEdit}
                />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Instructor Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-info">
          <form>
            <input
              type="text"
              value={mentorDetails.title}
              onChange={(e) =>
                setMentorDetails({ ...mentorDetails, title: e.target.value })
              }
            />
            <textarea
              type="text"
              row={10}
              value={mentorDetails.description}
              onChange={(e) =>
                setMentorDetails({
                  ...mentorDetails,
                  description: e.target.value,
                })
              }
            ></textarea>
            <input
              type="time"
              value={mentorDetails.duration}
              onChange={(e) =>
                setMentorDetails({ ...mentorDetails, duration: e.target.value })
              }
            />
            <input
              type="date"
              value={mentorDetails.date}
              onChange={(e) =>
                setMentorDetails({ ...mentorDetails, date: e.target.value })
              }
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Deelete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Allservice;
