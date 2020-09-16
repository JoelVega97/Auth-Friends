//{ username: 'Lambda School', password: 'i<3Lambd4' }
import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialValues = {
  username: "",
  password: "",
};

export default function Login(props) {
  const [values, setValues] = useState(initialValues);

  const change = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const login = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .post("/api/login", values)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
        debugger;
      })
      .catch((err) => {
        console.log("Error");
        debugger;
      });
  };

  return (
    <>
      <div className="login">
        <h2>Login to see your Friends List!</h2>
        <form onSubmit={login}>
          <label>
            Username:
            <input
              value={values.username}
              onChange={change}
              name="username"
              placeholder="Enter Username"
              type="text"
            />
          </label>
          <label>
            Password:
            <input
              value={values.password}
              onChange={change}
              name="password"
              placeholder="Enter password"
              type="password"
            />
            <button>Log in!</button>
          </label>
        </form>
      </div>
    </>
  );
}
