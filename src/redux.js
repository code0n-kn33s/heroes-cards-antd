import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers';
import { createLogger } from 'redux-logger';

function configureStore(initialState) {
    const windowExist = typeof window === 'object';
    const loggerMiddleware = createLogger({
        colors: {
            title: (color) => windowExist && color,
            prevState: (color) => windowExist && color,
            action: (color) => windowExist && color,
            nextState: (color) => windowExist && color,
            error: (color) => windowExist && color
        }
    });
    const composeEnhancers = (windowExist &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || // eslint-disable-line no-underscore-dangle
        compose;
    return createStore(
        initialState,
        composeEnhancers(
            applyMiddleware(loggerMiddleware, thunk),
        )
    );
}

// const middleware = applyMiddleware(thunk)
// export const store = createStore(reducers, middleware);
export const store = configureStore(reducers);

localStorage.setItem('token', '6151662711549902')
export const jwttoken = localStorage.getItem('token')