
import { React } from "react";
import Nav from "./components/navigation";
import Home from "./components/home";
import Increment from "./components/increase";
import Decrement from "./components/decrease";

import { BrowserRouter as Router, Switch ,Route } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/increase" component={Increment}/>
          <Route path="/decrease" component={Decrement} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
