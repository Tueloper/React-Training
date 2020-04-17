// this is the store
// the createStore is used as a first arguement to create a store
// also there is the initialState
// the reducers produces the state of the application
import { createStore } from 'redux';
import rootReducer from '../reducers/index';
 const store = createStore(rootReducer);

 export default store;
