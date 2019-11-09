import React,{Component} from 'react';
import PageWrapper from './Components/PageWrapper.js';
import {BrowserRouter as Router,Route,  Link} from "react-router-dom";

import Home from './Components/Pages/Home.js';
import About from './Components/Pages/About.js';
class App extends Component{
 

  render(){
    
  return (
    <Router>
    <PageWrapper>
      <Route
      exact={true}
      path="/"
      component={Home}
      />
      <Route
      path="/about"
      component={About}
      />
    </PageWrapper>
    </Router>  
  );
}
}
export default App;