import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from "./Components/Login/Login";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Signup from "./Components/Login/SignUp";
import PrivetRoute from "./Components/PrivetRoute/PrivetRoute";
import Orders from "./Components/Orders";
import Deals from "./Components/Deals";
import Admin from "./Components/Admin";

export const UserContext = createContext();

function App() {
 const [loggedInUser, SetLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, SetLoggedInUser]}>
      <p>Name :{loggedInUser.name}</p>

    <div>
      <Router>
          <Header />
          <Switch>
            <PrivetRoute path="/deals">
              <Deals/>
            </PrivetRoute>
            <PrivetRoute path="/admin">
              <Admin />
            </PrivetRoute>
            <PrivetRoute path="/orders">
              <Orders />
            </PrivetRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
