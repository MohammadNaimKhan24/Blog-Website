import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from './pages/login/Login.jsx';
import Register from "./pages/register/Register.jsx";
import Settings from './pages/settings/Settings.jsx';
import Single from "./pages/single/Single.jsx";
import Write from './pages/write/Write.jsx';
import Topbar from "./topbar/Topbar.jsx";


const App = () => {
  const user = false;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          {user ? <Home/> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/settings">
          {user ? <Settings /> : <Register />}
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Register />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      
      </Switch>
    </Router>
  );
};

export default App;
