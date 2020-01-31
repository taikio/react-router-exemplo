import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Sobre from './pages/Sobre';

const Routes = () => {
    return (
        <Switch>          
          <Route path="/" exact={true} component={Home} />
          <Route path="/sobre" component={Sobre} />
        </Switch>
    );
}

export default Routes;