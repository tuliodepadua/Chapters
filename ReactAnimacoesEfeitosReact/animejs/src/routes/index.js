import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Components/pages/public/home";
import Servicos from "../Components/pages/public/servicos";

function routes() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/tuliodepadua' component={Servicos} />
    </Switch>
  );
}

export default routes;
