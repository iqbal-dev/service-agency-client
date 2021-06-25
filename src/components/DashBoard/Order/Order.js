import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import PaymentProcess from "../../Home/PaymentProcess/PaymentProcess";

const stripeKey =
  "pk_test_51J5AmlET3eIsEMKyAecl4TYP6UnlyIqmDdqviMv8JjgngzooADEDrbhC1xUPP8AZqSzjkshNKa98zSjuzu2AQ27v00ULK7WQzA";
const Order = () => {
  const history = useHistory();
  const [order, setOrder] = useState(false);
  const [user] = useContext(UserContext);
  console.log(user);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    // setOrder(true);
    // const customerDetails = {
    //   name: user.name,
    //   email: user.email,
    //   courseImage: user.courseImg,
    //   title: user.title,
    //   description: user.description,
    //   status: "pending",
    // };
    // fetch("http://localhost:5000/customerDetails", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(customerDetails),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     if (result) {
    //       setOrder(false);
    //       // alert(result.message);
    //     }
    //   });
  };

  const handleButton = () => {
    history.push("/dashboard");
  };
  return (
    <div>
      <div>
        <form
          className="col-md-6"
          onSubmit={handleSubmit(onSubmit)}
          style={{ paddingTop: "50px", paddingLeft: "50px" }}
        >
          <label htmlFor="course">Course</label>
          <input id="course" name="course" value={user.title} />
          {errors.exampleRequired && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          <label htmlFor="mentorName">Mentor Name:</label>
          <input id="mentorName" name="mentorName" value={user.mentorName} />
          {errors.exampleRequired && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </form>
        <div className="col-md-6" style={{ paddingTop: "50px" }}>
          <PaymentProcess />
        </div>
      </div>
    </div>
  );
};

export default Order;
