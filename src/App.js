import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SearchResult from "./pages/SearchResult";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/searchPage" exact component={SearchPage} />
          <Route path="/searchResult" exact component={SearchResult} />
          <Redirect from="*" to="/searchPage" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
