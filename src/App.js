import React,{Component} from 'react';
import PageWrapper from './Components/PageWrapper.js';
import Home from './Components/Pages/Home.js';
import {BrowserRouter as Router,Route,  Link} from "react-router-dom";

class App extends Component{
 

  render(){
    
  return (
    <Router>
    <PageWrapper>
      <Route
      path="/"
      component={Home}
      />
    </PageWrapper>
    </Router>  
  );
}
}
export default App;