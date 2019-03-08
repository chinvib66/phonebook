import initialState from './initialState'
;
export default (state = initialState.nextid, action) => {
    let newS = state
    switch (action.type){
      // Check if action dispatched is
      // CREATE_Contact and act on that
        case 'Next_Id':
            newS++
            return newS
        default:
            return newS;
    }
  };