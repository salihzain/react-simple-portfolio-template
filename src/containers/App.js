import React, { Component } from "react";
import store from '../store';
import NavBar from "../components/NavBar";
import Home from '../components/Home';
import _ from 'lodash';
import { Switch, Route } from 'react-router-dom';
import About from './About';


class App extends Component {
  render() {
    const { siteIdentity, navs, homenavs } = store.getState();
    return (
      <main>
        <NavBar title={siteIdentity.title} navs={_.values(navs)} />,
        <Switch>
          <Route exact path="/"><Home image={siteIdentity.profile_pic} navs={_.values(homenavs)} /></Route>
          <Route path="/about"><About /></Route>
        </Switch>

      </main >

    );
  }
}




export default App; 
