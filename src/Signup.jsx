import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset;
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name:{" "}
          <input name="name" type="text" value={name} onChange={(event) => setName(event.target.value.slice(0, 20))} />
        </div>
        <small>{20 - name.length} charecters remaining</small>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Image_url: <input name="image_url" type="url" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <div>
          Password_confirmation: <input name="password_confirmation" type="password" />
        </div>
        <button className="button_style" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}
