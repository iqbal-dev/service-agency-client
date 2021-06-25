import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddMentor = () => {
  const [file, setFile] = useState(null);
  const handleChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  const { register, handleSubmit, errors, setError } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    const formData = new FormData();
    formData.append("files", file);
    formData.append("mentorName", data.mentorName);
    formData.append("mentorDescription", data.mentorDescription);
    formData.append("expertise", data.expertise);

    fetch("http://localhost:5000/addMentor", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        alert(result.message);
      });
  };
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
            name="mentorName"
            style={{ border: "1px solid lightgray" }}
            placeholder="Mentor Name"
            ref={register({ required: true })}
          />
          {errors.mentorName && (
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
        </div>
      </div>
      {/* add service image upload */}
      <div className="col-md-6 bg-white p-3 mb-5">
        <div>
          <textarea
            style={{ border: "1px solid lightgray" }}
            name="mentorDescription"
            placeholder="Mentor Description"
            ref={register({ required: true })}
            id=""
            cols="30"
            rows="3"
          ></textarea>
          {errors.mentorDescription && (
            <span style={{ color: "red" }}>This field is required</span>
          )}

          <input
            type="text"
            name="expertise"
            style={{ border: "1px solid lightgray" }}
            placeholder="Expertise"
            ref={register({ required: true })}
          />
          {errors.expertise && (
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

export default AddMentor;
