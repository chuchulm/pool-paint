import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import App from "../App";
import { FixScreen } from "../component/fixScreen/FixScreen";

import { Floor } from "../component/floor/FloorScreen";
import { Paint } from "../component/paint/PaintScreen";


export default function AppRouter() {


  return (

    <Router>
       
        <div> 
            <Switch>
               
            
                <Route path="/floor" component={Floor}/>
                <Route path="/fixscreen" component={FixScreen}/>
                <Route path="/paint" component={Paint}/>
                <Route path="/" exact component={App} />
                  
                 <Redirect to="/" />
            </Switch>
        </div>
    </Router>


  );
}