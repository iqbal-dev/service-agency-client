import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Dropdown } from "react-bootstrap";

// you can use React.forwardRef to pass the ref too

const AllUser = ({ service, setFetchStatus, fetchStatus, handleDelete }) => {
  // const [status, setStatus] = useState("");

  const handleClick = (id, status) => {
    setFetchStatus(!fetchStatus);
    console.log(id, status);
    fetch(`http://localhost:5000/status/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ status: status }),
    });
  };
  return (
    //  all user table
    <tbody>
      <tr>
        <td>{service.name}</td>
        <td>{service.email}</td>
        <td>{service.title}</td>
        <td>{service.description}</td>
        <td>
          <Dropdown>
            <Dropdown.Toggle
              variant={
                (service.status === "Done" && "success") ||
                (service.status === "pending" && "danger") ||
                (service.status === "on going" && "warning")
              }
              id="dropdown-basic"
              style={{ width: "124px" }}
            >
              {service.status}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={(e) => handleClick(service._id, "Done")}>
                Done
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleClick(service._id, "pending")}
              >
                pending
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleClick(service._id, "on going")}
              >
                on going
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
        <td
          style={{ cursor: "pointer" }}
          onClick={() => handleDelete(service._id)}
        >
          <FontAwesomeIcon
            variant="danger"
            className="text-danger font-bold"
            icon={faTrashAlt}
          />
        </td>
      </tr>
    </tbody>
  );
};

export default AllUser;
