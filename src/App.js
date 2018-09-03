import React, { Component } from 'react';

import './App.css';

import LandingPage from './containers/landingPage/landingPage';
import Categories from './containers/categorySelector/categorySelector';
import GameHandler from './containers/gameHandler/gameHandler';
import Highscores from './containers/highscores/highscores';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Switch>
            <Route path="/categories" component={Categories}/>
            <Route path="/game" component={GameHandler}/>
            <Route path="/highscores" component={Highscores}/>
            <Route path="/" exact component={LandingPage}/>
        </Switch>
    );
  }
}

export default App;
