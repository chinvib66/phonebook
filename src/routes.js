import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Book from './components/Book'
import Add from './components/Add'
import App from './App'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Book}></IndexRoute>
    <Route path="/add" component={Add}></Route>
  </Route>
);