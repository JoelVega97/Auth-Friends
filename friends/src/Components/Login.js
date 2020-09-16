//{ username: 'Lambda School', password: 'i<3Lambd4' }
import React, { useState } from "react";
import axios from "axios";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialValues = {
  username: "",
  password: "",
};

export default function Login() {
  const [values, setValues] = useState(initialValues);

  const change = (name, value) => {
    setValues({ [name]: value });
  };

  const login = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .post("/api/login", { username: "Lambda School", password: "i<3Lambd4" })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
      })
      .catch((err) => {
        console.log("Error");
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
