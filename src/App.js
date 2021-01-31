import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchResult from "./pages/SearchResult";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={SearchPage} />
          <Route path="/searchResult" component={SearchResult} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
