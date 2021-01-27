import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchResult from "./pages/SearchResult";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component />
          <Route path="/searchResult" component={SearchResult} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
