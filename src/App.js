import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import SignUp from "./components/sign_up/SignUp";
import SignIn from "./components/sign_in/SignIn";
import FirstPage from "./components/first_page/FirstPage";


function App() {
  const registrated = JSON.parse(localStorage.getItem("Registrated"));
  
  return (
      <Router basename="/cursor-hw20">
        <Switch>
          <Route exact path="/">
            {registrated ? <Redirect to="/sign-in"/> : <Redirect to="/sign-up"/>}
          </Route>
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/first-page" component={FirstPage} />
        </Switch>
      </Router>
  );
}

export default App;
