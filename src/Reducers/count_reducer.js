
import {INCREASE, DECREASE} from '../ActionTypes'

const initialState = {
    count: 0
};

function count_reducer(store = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return ({ count: store.count + 1 })
        case DECREASE:
            return ({ count: store.count - 1 })
        default:
            return store;
    }
}

export default count_reducer