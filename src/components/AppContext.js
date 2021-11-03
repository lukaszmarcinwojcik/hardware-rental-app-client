import { createContext, useState } from "react";
import { useHistory } from "react-router";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  let history = useHistory();
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [userRole, setUserRole] = useState(null);

  const checkIsUserLoggedIn = () => {
    console.log("sprawdzam czy uzytkownik zalogowany?");

    const foundUser = JSON.parse(localStorage.getItem("userInfo"));
    if (foundUser) {
      console.log("uzytkownik zalogowany!");
      setUserInfo(foundUser);
      setIsUserLogged(true);
      setUserRole(foundUser.role);
      if (foundUser.avatar) {
        setUserAvatar(foundUser.avatar);
      }
      setUserRole(foundUser.role);
      history.push("/dashboard");

      return;
    }
    console.log("uzytkownik nie ejstn zalogowany :<");
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
