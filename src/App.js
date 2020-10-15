import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import DashBoard from './components/DashBoard/Dashboard/DashBoard';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceList from './components/DashBoard/ServiceList/ServiceList';
import NoMatch from './components/Nomatch/NoMatch';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    title: '',
    id:''
  })
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
        <PrivateRoute path="/dashboard">
          <DashBoard></DashBoard>
          </PrivateRoute>
          <Route path="/servicelist">
            <ServiceList></ServiceList>
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
