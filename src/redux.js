import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers';
import { createLogger } from 'redux-logger';

const middleware = applyMiddleware(thunk, createLogger())
export const store = createStore(reducers, middleware);

localStorage.setItem('token', '6151662711549902')
export const jwttoken = localStorage.getItem('token')