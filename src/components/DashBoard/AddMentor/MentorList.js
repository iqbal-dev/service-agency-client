import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./MentorList.css";

const MentorList = () => {
  const [mentor, setMentor] = useState([]);
  const [loader, setLoader] = useState(true);
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(false);
  const [mentorDetails, setMentorDetails] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/mentor")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setLoader(false);
          setMentor(data);
        }
      });
  }, [status]);
  const handleEdit = (e) => {
    const mentordetails = mentor.filter((mentor) => mentor._id === e);
    setMentorDetails({
      mentorName: mentordetails[0].mentorName,
      mentorDescription: mentordetails[0].mentorDescription,
      expertise: mentordetails[0].expertise,
      image: mentordetails[0].image.img
        ? mentordetails[0].image.img
        : mentordetails[0].image.data,
      id: e,
    });
    setShow(true);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    setShow(false);
    fetch(`http://localhost:5000/mentor/${mentorDetails.id}`, {
      method: "DELETE",
    }).then(() => setStatus(!status));
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Profile picture</th>
            <th>Description</th>
            <th>expertise</th>
            <th>action</th>
          </tr>
        </thead>
        {mentor.map((mentor) => (
          <tbody>
            <tr>
              <td>{mentor.mentorName}</td>
              <td>
                <img
                  style={{ height: "100px", width: "100px" }}
                  src={
                    mentor.image
                      ? `data:image/png;base64,${mentor.image.img}`
                      : ""
                  }
                  alt=""
                />
              </td>
              <td style={{ width: "400px" }}>{mentor.mentorDescription}</td>
              <td>{mentor.expertise}</td>
              <td className="d-flex justify-content-around">
                {" "}
                <FontAwesomeIcon
                  onClick={() => handleEdit(mentor._id)}
                  variant="danger"
                  className="text-danger font-bold"
                  icon={faTrashAlt}
                />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Instructor Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-info">
          <form>
            <input type="text" row={10} value={mentorDetails.mentorName} />
            <textarea
              type="text"
              value={mentorDetails.mentorDescription}
            ></textarea>
            <img
              style={{ height: "100px", width: "100px" }}
              src={
                /[^A-Z0-9+\/=]/i.test(mentorDetails.image)
                  ? `${URL.createObjectURL(mentorDetails.image)}`
                  : `data:image/png;base64,${mentorDetails.image}`
              }
              alt=""
            />
            <input type="text" value={mentorDetails.expertise} />
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

export default MentorList;
