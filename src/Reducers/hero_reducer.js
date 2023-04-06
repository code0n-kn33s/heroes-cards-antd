
import {REQ_HERO, RES_HERO, ERR_HERO, EDIT_HERO, CLEAR_HERO} from '../ActionTypes'

const initialState = {
    hero_info: null,
    hero_requesting: false,
    hero_error: ''
};

function hero_reducer(state = initialState, action) {
    switch (action.type) {
        case REQ_HERO:
            return ({ ...state, hero_requesting: true })

        case RES_HERO:
            return ({ ...state, hero_info: action.payload })

        case EDIT_HERO:
            const keys = action.keys, data = action.data;
            const [key1, key2] = keys;

            const updateHeroInfo = Object.assign(state.hero_info, {
                [key1]: {...state.hero_info[key1], [key2]: data}
            })

            return ({ ...state, hero_info: updateHeroInfo })

        case ERR_HERO:
            return ({ ...state, hero_error: action.error })

        case CLEAR_HERO:
            console.log('hero data was cleared..')
            return ({ ...state, hero_info: null })
        default:
            return state;
    }
}

export default hero_reducer