import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './rootReducer';



// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
// const rootStore = createStore(
//   rootReducer,
//   ComposeEnhancers(applyMiddleware(promiseMiddleware)));

// export default rootStore;
