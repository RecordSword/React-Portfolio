
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./Components/NavTabs";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";



function App() {
  return (
    <div className="App">
     <Router>
      <NavTabs />
        <div>
          <Route exact path="/" component={About}></Route>
          <Route exact path="/portfolio" component={Portfolio}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </div>
     </Router>
    </div>
  );
}

export default App;