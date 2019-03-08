import initialState from './initialState';

export default (state = initialState, action) => {
    console.log(state)
    switch (action.type){
      // Check if action dispatched is
      // CREATE_Contact and act on that
        case 'Create_Contact':
            state.push(action.contact)
            return state
        case 'Delete_Contact':
            state = state.filter(contact => contact.id !== action.id)
            return state
        default:
            return state;
    }
  };