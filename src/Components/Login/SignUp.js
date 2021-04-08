import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./config.firebase";

// firebase.initializeApp(firebaseConfig);
// const loginHandle = () => {
//   let provider = new firebase.auth.GoogleAuthProvider();
//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// };

const SignUp = () => {
  return (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6 mx-auto">
            <form>
                <div className="form-group">
                <label for="fname">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button type="submit"  className="btn btn-primary mt-2">
                Sign Up
              </button>
            </form>
            <hr/>
            <button type="button"  className="btn btn-primary btn-block mt-2">
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
