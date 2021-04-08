import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./config.firebase";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";

const Login = () => {
  // const [user, setUser] = useState({
  //   isLoggedIn: false,
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  const [loggedInUser, SetLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const googleLogin = () => {
    firebase.initializeApp(firebaseConfig);
    
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signInUser = { name: displayName, email };
        SetLoggedInUser(signInUser);

        history.replace(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const [user, setUser] = useState({
    isLoggedIn: false,
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let isFormValid;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      isFormValid = e.target.value > 8;
    }
    if (isFormValid) {
      const newUserinfo = { ...user };
      newUserinfo[e.target.name] = e.target.value;
      setUser(newUserinfo);
      console.log(user.email, user.password);
    }
  };
  // submitForm
  const submitForm = (e) => {
    if (user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  .then((res) => {
    // Signed in 
    console.log(res);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
    }
    e.preventDefault();
  };
  return (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6 mx-auto">
            <form onSubmit={submitForm}>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
                  name="email"
                  onBlur={handleChange}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  required
                  name="password"
                  onBlur={handleChange}
                />
              </div>
              <input
                type="submit"
                value="Login"
                onClick={submitForm}
                className="btn btn-primary mt-2"
              />

              <div className="d-flex">
                <p>Create account</p>
                <Link to="/signup">Sign Up</Link>
              </div>
            </form>
            <hr />
            <button
              type="button"
              onClick={googleLogin}
              className="btn btn-primary btn-block mt-2"
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
