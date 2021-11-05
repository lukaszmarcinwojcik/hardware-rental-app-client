import { createContext, useState } from "react";
import { useHistory } from "react-router";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  let history = useHistory();
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userRole, setUserRole] = useState(null);

  const checkIsUserLoggedIn = () => {
    const foundUser = JSON.parse(localStorage.getItem("userInfo"));
    if (foundUser) {
      setUserInfo(foundUser);
      setIsUserLogged(true);
      setUserId(foundUser._id);
      setUserRole(foundUser.role);
      if (foundUser.avatar) {
        setUserAvatar(foundUser.avatar);
      }
      setUserRole(foundUser.role);
      history.push("/dashboard");
      return;
    }
  };

  return (
    <AppContext.Provider
      value={{
        checkIsUserLoggedIn,
        isUserLogged,
        setIsUserLogged,
        userInfo,
        setUserInfo,
        userRole,
        setUserRole,
        userAvatar,
        setUserAvatar,
        userId,
        setUserId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
