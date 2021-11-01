import { useState } from "react";
import { Link } from "react-router-dom";

const API = "https://";

const Error = (props) => <p className="error">{props.error}</p>;

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    error: "jakis blad",
    emailError: "zly email",
    passwordError: "zle haslo",
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
      <h2>Welcome back</h2>
      <form action="" onSubmit={handleSubmit}>
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
          {errors.error && <Error error={errors.error} />}
        </div>
        <button className={"submitBtn"} onClick={handleSubmit}>
          Login
        </button>
      </form>

      <p>
        No account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
