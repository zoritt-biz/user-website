import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage"

function App() {
  return (
      <div className="d-flex">
        <Router>
          <main>
            <div className="App">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/example" render={() => <div>Example route</div>}/>
              </Switch>
            </div>
          </main>
        </Router>
      </div>
  );
}

export default App;
