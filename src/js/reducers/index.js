// a reducer is a javascript funtion that takes in the current state and action
// the principle of redux makes it so that a state cannot be changes or mutated anyhow
// the only way a state can be mutated is by sendinfg a signal to the store, through dispatching an action
import { ADD_ARTICLE } from './../constants/action-types';

const initialState = {
  articles: []
};

function rootReducer (state = initialState, action) {
  if (action.type === ADD_ARTICLE) return Object.assign({}, state, {
    articles: state.articles.concat(action.payload)
  })

  return state;
}

export default rootReducer;
