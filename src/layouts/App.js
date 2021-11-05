import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";

import AppProvider from "../components/AppContext";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "../styles/App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <AppProvider>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
            <Route component={ErrorPage} />
          </Switch>
        </AppProvider>
      </Router>
    </div>
  );
}

export default App;
