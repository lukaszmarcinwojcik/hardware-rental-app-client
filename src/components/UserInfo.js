import "../styles/UserInfo.css";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "./AppContext";
import defaultAvatar from "../assets/defaultAvatar.png";

function UserInfo() {
  const { userInfo, userAvatar } = useContext(AppContext);
  // console.log("to avatar", userInfo.avatar);

  if (userInfo) {
    console.log("jest avatar", userInfo.avatar);
  }
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
