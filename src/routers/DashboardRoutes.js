import React from "react";

import Navbar from "../ui/Navbar";

import { Switch, Route, Redirect } from "react-router-dom";

import MarvelScreen from "../components/marvel/MarvelScreen";

import { HeroScreen } from "../components/heroes/HeroScreen";

import { SearchScreen } from "../components/search/SearchScreen";

import DcScreen from "../components/dc/DcScreen";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel">
            <MarvelScreen />
          </Route>
          <Route exact path="/hero/:heroeId" component={HeroScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Route exact path="/dc">
            <DcScreen />
          </Route>

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;
