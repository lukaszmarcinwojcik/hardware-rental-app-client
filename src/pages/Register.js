import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import ErrorsList from "../components/ErrorList";

function Register() {
  let history = useHistory();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user,
        }),
      });
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        const data = await response.json();
        if (data.errors) {
          setErrors(data.errors);
          setUser(data.user);
        } else {
          console.log(data);
          setErrors([]);
          setUser(data.user);
          history.push("/login");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={"loginPanelWrapper"}>
      <div className={"formContainer"}>
        <h1>Register</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="loginPanelDiv">
            <label htmlFor="firstName">First name</label>
            <br />
            <input
              type="text"
              value={user.firstName}
              onChange={handleInput}
              name="firstName"
              id="firstName"
            />
          </div>
          <div className="loginPanelDiv">
            <label htmlFor="lastName">Last name</label>
            <br />
            <input
              type="text"
              value={user.lastName}
              onChange={handleInput}
              name="lastName"
              id="lastName"
            />
          </div>
          <div className="loginPanelDiv">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              value={user.email}
              onChange={handleInput}
              name="email"
              id="email"
            />
          </div>
          <div className="loginPanelDiv">
            <label htmlFor="avatar">Avatar</label>
            <br />
            <input
              type="avatar"
              value={user.avatar}
              onChange={handleInput}
              name="avatar"
              id="avatar"
            />
          </div>
          <div className="loginPanelDiv">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              value={user.password}
              onChange={handleInput}
              name="password"
              id="password"
            />
          </div>
          <div className="loginPanelDiv">
            <label htmlFor="confirmPassword">Confirm password</label>
            <br />
            <input
              type="password"
              value={user.confirmPassword}
              onChange={handleInput}
              name="confirmPassword"
              id="confirmPassword"
            />

            {errors.length === 0 ? null : <ErrorsList errorsList={errors} />}
          </div>
          <button className={"loginPanelButton"} onClick={handleSubmit}>
            Register
          </button>
        </form>

        <p>
          Already a member? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
