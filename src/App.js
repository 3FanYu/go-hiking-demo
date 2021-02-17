import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CollectPage from "./pages/CollectPage";
import ColumnPage from "./pages/ColumnPage";
import SearchQuick from "./pages/SearchQuick";
import SearchResult from "./pages/SearchResult";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    
    <Router>
      <div>
        <Switch>
        <Route path='/SearchQuick/:id' exact component={SearchQuick}/>
    
          <Route path="/ColumnPage" exact component={ColumnPage} />
          <Route path="/SearchPage" exact component={SearchPage} />
          <Route path="/searchResult" exact component={SearchResult} />
          <Redirect from="*" to="/SearchQuick" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
