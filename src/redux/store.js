import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import rootReducer from './reducer';

export default () => {
    const middlewares = [loggerMiddleware, thunkMiddleware];
    const store = createStore(rootReducer, applyMiddleware(...middlewares));
    return store;
};
