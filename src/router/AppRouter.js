import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import App from "../App";
import { LoginScreen } from "../component/auth/LoginScreen";
import { RegisterScreen } from "../component/auth/RegisterScreen";


export default function AppRouter() {


  return (

    <Router>
       
        <div> 
            <Switch>
               
            
                <Route path="/login" component={LoginScreen}/>
                <Route path="/register" component={RegisterScreen}/>
                <Route path="/" component={App} />
                  
                 <Redirect to="/" />
            </Switch>
        </div>
    </Router>


  );
}