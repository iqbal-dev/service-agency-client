import React, { useEffect, useState } from "react";
import FeedBackInfo from "../FeedBackInfo/FeedBackInfo";

const FeedBack = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://infinite-fjord-10812.herokuapp.com/commentsDetails")
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  }, []);

  return (
    <div className="container my-5 py-5">
      <h1
        className="text-center font-family mb-5"
        style={{ fontWeight: "600" }}
      >
        Client<span style={{ color: "#7AB259" }}>Feed Back</span>
      </h1>
      <div className="row">
        {comments.map((customer) => (
          <FeedBackInfo customer={customer} key={customer._id}></FeedBackInfo>
        ))}
      </div>
    </div>
  );
};

export default FeedBack;
