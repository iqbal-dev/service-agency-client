import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./Login.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { UserContext } from "../../App";
import LoginOther from "../LoginOther/LoginOther";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [user, setUser] = useContext(UserContext);
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleLogIn = (e) => {
    history.push("/dashboard");
    console.log(user);
    if (user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          console.log(res);
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          setUser(newUserInfo);
          history.replace(from);
          console.log("user created");
        })
        .catch((error) => {
          // Handle Errors here.
          var errorMessage = error.message;
          console.log(errorMessage);
          const newError = { ...user };
          newError.error = errorMessage;
          newError.success = "";
          setUser(newError);
          // ...
        });
    }
    e.preventDefault();
  };
  console.log(user);
  return (
    <div className="container login">
      <div style={{ width: "500px", margin: "40px auto" }}>
        <img
          style={{ height: "100px", margin: "0 auto" }}
          src={require("../../images/logos/logo.png")}
          alt=""
        />
      </div>{" "}
      <form onSubmit={handleLogIn}>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Username or Email"
        />
        <input type="password" name="password" id="" placeholder="password" />

        <input type="submit" value="Log In" />
        <span>Don't have an Account? </span>
        <Link style={{ color: "#F9A51A" }} to="/create">
          Create a new account
        </Link>

        <LoginOther />
      </form>
    </div>
  );
};

export default Login;
