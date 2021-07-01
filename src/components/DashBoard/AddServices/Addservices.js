import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useForm } from "react-hook-form";
const Addservices = () => {
  const [file, setFile] = useState(null);
  const [mentorName, setMentorName] = useState([]);
  const [editorState, setEditorState] = useState();
  const [name, setName] = useState("");
  const handleChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  const { register, handleSubmit, errors, setError } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    const formData = new FormData();
    formData.append("files", file);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("duration", data.duration);
    formData.append("language", data.language);
    formData.append("courseOutline", data.courseOutline);
    formData.append("date", data.date);
    formData.append("mentorName", name);

    fetch("http://localhost:5000/newService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        alert(result.message);
      });
  };
  useEffect(() => {
    fetch("http://localhost:5000/mentor")
      .then((res) => res.json())
      .then((data) => setMentorName(data));
  }, []);
  console.log(name);
  return (
    <form
      className="row"
      onSubmit={handleSubmit(onSubmit)}
      style={{ width: "80%", marginLeft: "50px", paddingTop: "50px" }}
    >
      {/* add service form */}
      <div className="col-md-6 bg-white p-3 mb-5">
        <div className="">
          <input
            type="text"
            name="title"
            style={{ border: "1px solid lightgray" }}
            placeholder="title"
            ref={register({ required: true })}
          />
          {errors.title && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          <textarea
            style={{ border: "1px solid lightgray" }}
            name="description"
            placeholder="Description"
            ref={register({ required: true })}
            id=""
            cols="30"
            rows="3"
          ></textarea>
          {errors.description && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          <label htmlFor="img">Select image:</label>
          <input
            onChange={handleChange}
            style={{ border: "1px solid lightgray" }}
            type="file"
            ref={register({ required: true })}
            id="img"
            name="img"
            accept="image/*"
          />
          {errors.img && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
           <label htmlFor="duration">Course Duration:</label>
          <input
            type="time"
            id="duration"
            name="duration"
            style={{ border: "1px solid lightgray" }}
            placeholder="Duration of course"
            ref={register({ required: true })}
          />
          {errors.price && (
            <span style={{ color: "red" }}>This field is required</span>
          )}

        </div>
      </div>
      {/* add service image upload */}
      <div className="col-md-6 bg-white p-3 mb-5">
        <div>
          <input
            type="number"
            name="price"
            style={{ border: "1px solid lightgray" }}
            placeholder="Price"
            ref={register({ required: true })}
          />
          {errors.price && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          <input
            type="text"
            name="language"
            style={{ border: "1px solid lightgray" }}
            placeholder="Language"
            ref={register({ required: true })}
          />
          {errors.price && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {name ? name : "select instructor name"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {mentorName.map((name) => (
                <Dropdown.Item onClick={() => setName(name.mentorName)}>
                  {name.mentorName}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <br />
          <textarea
            style={{ border: "1px solid lightgray" }}
            name="courseOutline"
            placeholder="Course Outline"
            ref={register({ required: true })}
            id=""
            cols="30"
            rows="3"
          ></textarea>
          {errors.description && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
            <label htmlFor="date">Starting Date:</label>        
          <input
            type="date"
            name="date"
            style={{ border: "1px solid lightgray" }}
            placeholder="Starting date"
            ref={register({ required: true })}
          />
          {errors.price && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </div>

        <button className="btn btn-primary ml-auto my-5" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Addservices;
