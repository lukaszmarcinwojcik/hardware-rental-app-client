import { useContext } from "react";
import { AppContext } from "./AppContext";

import "../styles/UserInfo.css";
import defaultAvatar from "../assets/defaultAvatar.png";

function UserInfo() {
  const { userInfo, userAvatar } = useContext(AppContext);

  return (
    <div className={"userInfo"}>
      <img
        className={"avatar"}
        src={userAvatar ? userAvatar : defaultAvatar}
        alt="avatar"
      />

      <p>{userInfo ? `${userInfo.firstName} ${userInfo.lastName}` : "Guest"}</p>
    </div>
  );
}

export default UserInfo;
