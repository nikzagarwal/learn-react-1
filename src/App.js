import React,{Component} from 'react';
import PageWrapper from './Components/PageWrapper.js';
import {BrowserRouter as Router,Route,  } from "react-router-dom";

import Home from './Components/Pages/Home.js';
import About from './Components/Pages/About.js';
import Service from './Components/Pages/Services.js';

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
       <Route
      path="/services"
      component={Service}
      />
    </PageWrapper>
    </Router>  
  );
}
}
export default App;