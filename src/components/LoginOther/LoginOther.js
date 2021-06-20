import React, { useContext } from "react";
import * as firebase from "firebase/app";
import firebaseConfig from "../Login/firebaseConfig";
import "firebase/auth";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
const LoginOther = () => {
  const history = useHistory();
  const location = useLocation();

  const [user, setUser] = useContext(UserContext);
  let { from } = location.state || { from: { pathname: "/" } };
  const provider = new firebase.auth.GoogleAuthProvider();
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleSubmit = () => {
    history.push("/dashboard");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const newUser = {
          ...user,
          name: displayName,
          email: email,
          img: photoURL,
        };
        localStorage.setItem("email", newUser.email);
        setUser(newUser);
        history.replace(from);
        console.log(newUser, result.user);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <button
      onClick={handleSubmit}
      className="btn"
      style={{ backgroundColor: "#EFEFEF", width: "100%" }}
    >
      <img
        height="30px"
        src={require("../../images/logos/googlePlus.png")}
        alt=""
      />{" "}
      Google Sign in
    </button>
  );
};

export default LoginOther;
