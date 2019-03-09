import React, { Component } from 'react';
import './App.css';
//import {Router } from 'react-router';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Book from './components/Book';
import Add from './components/Add';


class App extends Component {
  render() {
    return (
      <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"/>
        <header className="App-header">
          <p>PHONE DIRECTORY</p>
        </header>
        
          <BrowserRouter>
          <Switch>
            <Route exact path="/phonebook" component={Book}/>
            <Route path="/phonebook/add" component={Add}/>
          </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
