import React, { Component } from "react";
import store from '../store';
import NavBar from "../components/NavBar";
import Home from '../components/Home';
import _ from 'lodash';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Post from './Post';
import Posts from './Posts';
import { fetchWork } from '../actions';
import WorkItem from '../containers/WorkItem';
import Work from '../containers/Work';
store.dispatch(fetchWork());

class App extends Component {
  render() {
    const { siteIdentity, navs } = store.getState();
    return (
      <main>
        <NavBar title={siteIdentity.title} navs={_.values(navs)} />,
        <Switch>
          <Route exact path="/"><Home image={siteIdentity.profile_pic} navs={_.values(navs)} /></Route>
          <Route path="/about" component={About} />
          <Route exact path="/blog" component={Posts} />
          <Route path="/blog/:id" component={Post} />
          <Route exact path="/work" component={Work} />
          <Route path="/work/:id" component={WorkItem} />
        </Switch>
      </main >

    );
  }
}




export default App; 
