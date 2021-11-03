import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import "../styles/LogoutButton.css";
function LogoutButton() {
  const { setUserInfo, setIsUserLogged, setUserRole, setUserAvatar } =
    useContext(AppContext);

  let history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    setUserInfo(null);
    setIsUserLogged(false);
    setUserRole(null);
    setUserAvatar(null);
    history.push("/login");
  };

  return (
    <div onClick={handleLogout} className={"logoutButton"}>
      <div className={"logoutImg"}></div>
      <p>Logout</p>
    </div>
  );
}

export default LogoutButton;
