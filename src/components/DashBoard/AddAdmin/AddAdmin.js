import React from "react";
import { useForm } from "react-hook-form";

const AddAdmin = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    fetch("https://infinite-fjord-10812.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: data.email }),
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ width: "50%", marginLeft: "50px", padding: "50px" }}
    >
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        style={{ border: "1px solid lightgray" }}
        id="email"
        placeholder="your name"
        ref={register({ required: true })}
      />
      {errors.exampleRequired && <span>This field is required</span>}
      <button className="btn btn-success">Send</button>
    </form>
  );
};

export default AddAdmin;
