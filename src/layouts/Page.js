import { Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import HardwareList from "../components/HardwareList";
import RentHardware from "../components/RentHardware";
import AdminPanel from "../components/AdminPanel";
import ErrorPage from "../pages/ErrorPage";
import "../styles/Page.css";

import { AppContext } from "../components/AppContext";
function Page() {
  const { isUserLogged, userRole } = useContext(AppContext);

  return (
    <>
      <Switch>
        {isUserLogged ? (
          <Route exact path="/dashboard" />
        ) : (
          <Redirect to="/login" />
        )}
        {isUserLogged ? (
          <Route path="/dashboard/hardwarelist" component={HardwareList} />
        ) : (
          <Redirect to="/login" />
        )}
        {isUserLogged ? (
          <Route path="/dashboard/renthardware" component={RentHardware} />
        ) : (
          <Redirect to="/login" />
        )}
        {isUserLogged && userRole === "admin" ? (
          <Route path="/dashboard/adminpage" component={AdminPanel} />
        ) : (
          <Redirect to="/login" />
        )}
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default Page;
