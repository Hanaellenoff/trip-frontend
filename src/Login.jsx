/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login({ setLoginMessage }) {
  const [errors, setErrors] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors("");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log("Login error", error.response);
        if (error.response && error.response.status === 401) {
          setErrors("Invalid email or password");
          setLoginMessage("Invalid email or password");
        } else {
          setLoginMessage("Login Succesful");
        }
      });
  };
  return (
    <div id="login">
      <h1>Login</h1>
      {errors && (
        <ul>
          <li>{errors}</li>
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          Email: <input name="email" type="email" required />
        </div>
        <div>
          Password: <input name="password" type="password" required />
        </div>
        <button className="button_style" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
