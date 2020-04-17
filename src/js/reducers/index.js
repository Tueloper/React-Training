// a reducer is a javascript funtion that takes in the current state and action
// the principle of redux makes it so that a state cannot be changes or mutated anyhow
// the only way a state can be mutated is by sendinfg a signal to the store, through dispatching an action
import { ADD_ARTICLE, ADD_TABLE, REMOVE_TABLE_INDEX } from './../constants/action-types';

const initialState = {
  articles: [],
  characters: []
};

function rootReducer (state = initialState, action) {

  // payload is an object
  if (action.type === ADD_ARTICLE) return state.characters = [...state.characters, action.payload];

  // payload is an object
  if (action.type === ADD_TABLE) return Object.assign({}, state, {
    characters: state.characters.concat(action.payload)
  })

  // payload is an index
  if (action.type === REMOVE_TABLE_INDEX) return Object.assign({}, state, {
    characters: state.characters.filter((item, i) => i !== action.payload)
  })

  return state;
}

export default rootReducer;
