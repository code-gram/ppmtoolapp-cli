import "./App.css";
import React from "react";
import HeaderComponent from "./components/layout/HeaderComponent";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProjectComponent from "./components/projects/AddProjectComponent";

import { Provider } from "react-redux";
import store from "./store";
import UpdateProject from "./components/projects/UpdateProject";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <HeaderComponent />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/addProject" component={AddProjectComponent} />
          <Route path="/updateProject/:id" component={UpdateProject} />
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
