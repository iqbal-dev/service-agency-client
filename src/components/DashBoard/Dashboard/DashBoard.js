import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Admin from "../Admin/Admin";
import Customer from "../Customer/Customer";

const DashBoard = () => {
  const [user] = useContext(UserContext);
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setAdmin({
            admin: true,
            customer: false,
          });
        } else {
          setAdmin({
            admin: false,
            customer: true,
          });
        }
      });
  }, []);
  return (
    <div>
      {admin.admin && <Admin></Admin>}
      {admin.customer && <Customer></Customer>}
    </div>
  );
};

export default DashBoard;
