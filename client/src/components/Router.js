import React, { Component } from 'react';
import { Route } from 'react-router';
import Page from './Page';
import PageTemplate from './PageTemplate';

export default class Router extends Component {
  render () {
    return (
      <>
      <Route exact path='/' component={Page} />
      <Route path='/search' component={PageTemplate} />
      </>
    );
  }
}
