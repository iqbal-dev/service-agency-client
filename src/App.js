import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import DashBoard from "./components/DashBoard/Dashboard/DashBoard";
import ServiceList from "./components/DashBoard/ServiceList/ServiceList";
import DetailsCourse from "./components/Home/DetailsCourse/DetailsCourse";
import Home from "./components/Home/Home/Home";
import OurTeam from "./components/Home/OurTeam/OurTeam";
import PaymentProcess from "./components/Home/PaymentProcess/PaymentProcess";
import Login from "./components/Login/Login";
import NoMatch from "./components/Nomatch/NoMatch";
import Portfolio from "./components/Postfolio/Portfolio";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SignUp from "./components/SignUp/SignUp";
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    title: "",
    id: "",
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/create">
            <SignUp></SignUp>
          </Route>
          <Route path="/signup/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <Route path="/servicelist">
            <ServiceList></ServiceList>
          </Route>
          <Route path="/portfolio">
            <Portfolio></Portfolio>
          </Route>
          <Route path="/checkout">
            <PaymentProcess />
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          {/* <Route path="/payment">
            <PaymentProcess/>
          </Route> */}
          <Route path="/team">
            <OurTeam></OurTeam>
          </Route>
          <Route path="/course-details">
            <DetailsCourse />
          </Route>
          <Route path="/*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
