import { combineReducers } from "redux";

import count_reducer from './count_reducer';
import heroes_reducer from './heroes_reducer';
import hero_reducer from './hero_reducer';

const reducers = combineReducers({
    count_reducer,
    heroes_reducer,
    hero_reducer,
})

export default reducers;