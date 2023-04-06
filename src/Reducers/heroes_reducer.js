
import {REQ_HEROES, RES_HEROES, ERR_HEROES} from '../ActionTypes'

const initialState = {
    list_heroes: [],
    heroes_requesting: false,
    heroes_error: ''
};

function heroes_reducer(state = initialState, action) {
    switch (action.type) {
        case REQ_HEROES:
            return ({ ...state, heroes_requesting: true })
        case RES_HEROES:
            return ({ ...state, list_heroes: action.payload })
        case ERR_HEROES:
            return ({ ...state, heroes_error: action.error })
        default:
            return state;
    }
}

export default heroes_reducer