import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
//import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import ListDepartementComponent from './components/ListDepartementComponent';
import ViewDepartementComponent from './components/ViewDepartementComponent';
import CreateDepartementComponent from './components/CreateDepartementComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/departements" component = {ListDepartementComponent}></Route>
                          <Route path = "/add-departement/:id" component = {CreateDepartementComponent}></Route>
                          <Route path = "/view-departement/:id" component = {ViewDepartementComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
    <FooterComponent/>
        </Router>
    </div>
    
  );
}

export default App;
