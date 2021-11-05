import { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import ErrorsList from "../components/ErrorList";
import { AppContext } from "../components/AppContext";

import "../styles/LoginPanel.css";

function Login() {
  let history = useHistory();
  const {
    setUserInfo,
    setUserRole,
    setUserId,
    setUserAvatar,
    setIsUserLogged,
    checkIsUserLoggedIn,
  } = useContext(AppContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    checkIsUserLoggedIn();
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/login`, {
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
          setUserInfo(data.userInfo);
          setIsUserLogged(true);
          setUserId(data.userInfo._id);
          setUserRole(data.userInfo.role);
          if (data.userInfo.avatar) {
            setUserAvatar(data.userInfo.avatar);
          }
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("userInfo", JSON.stringify(data.userInfo));
          history.push("/dashboard");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={"loginPanelWrapper"}>
      <div className={"formContainer"}>
        <h1>Welcome back</h1>
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
            {errors.length === 0 ? null : <ErrorsList errorsList={errors} />}
          </div>
          <button className={"loginPanelButton"} onClick={handleSubmit}>
            Login
          </button>
        </form>

        <p>
          No account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
