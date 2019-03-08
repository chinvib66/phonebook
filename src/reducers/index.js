import { combineReducers } from 'redux';
import contacts from './contactReducers'
import nextid from './idReducers'

export default combineReducers({
    contacts: contacts,
    nextid  : nextid
    // More reducers if there are
    // can go here
  });