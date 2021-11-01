import { useState } from "react";
import { Link } from "react-router-dom";

const API = "https://";

const Error = (props) => <p className="error">{props.error}</p>;

function Register() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    error: "jakis blad",
    firstNameError: "zle imie",
    lastNameError: "zle nazwisko",
    emailError: "zly email",
    avatarError: "zly link",
    passwordError: "zle haslo",
    confirmPasswordError: "hasla sie roznia",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("name: ", name, "value: ", value);

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={"formContainer"}>
      <h2>Register</h2>
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
          {errors.firstNameError && <Error error={errors.firstNameError} />}
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
          {errors.lastNameError && <Error error={errors.lastNameError} />}
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
          {errors.emailError && <Error error={errors.emailError} />}
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
          {errors.avatarError && <Error error={errors.avatarError} />}
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
          {errors.passwordError && <Error error={errors.passwordError} />}
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
          {errors.confirmPasswordError && (
            <Error error={errors.confirmPasswordError} />
          )}
          {errors.error && <Error error={errors.error} />}
        </div>
        <button className={"submitBtn"} onClick={handleSubmit}>
          Register
        </button>
      </form>

      <p>
        Already a member? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
