import React, { Component } from 'react';
import { Route } from 'react-router';
import HomePage from './HomePage';
import SearchPage from './SearchPage';

export default class App extends Component {

  render () {
    return (
      <>
      <Route exact path='/' component={HomePage} />
      <Route path='/search' component={SearchPage} />
      </>
    );
  }
}