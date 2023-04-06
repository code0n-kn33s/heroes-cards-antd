import {
    REQ_HEROES, RES_HEROES, ERR_HEROES, REQ_HERO, RES_HERO, ERR_HERO, EDIT_HERO, CLEAR_HERO
} from '../ActionTypes';

import { jwttoken } from '../redux'

export const getHeroes = () => dispatch => {
    dispatch({ type: REQ_HEROES })

    fetch(`https://www.superheroapi.com/api.php/${jwttoken}/search/all`)
        .then(req => req.json())
        .then(data => {
            dispatch({ type: RES_HEROES, payload: data.results })

        })
        .catch(err => dispatch({ type: ERR_HEROES, error: err }))
}

export const getHero = (id) => dispatch => {
    dispatch({ type: REQ_HERO })

    fetch(`https://www.superheroapi.com/api.php/${jwttoken}/search/${id}`)
        .then(req => req.json())
        .then(data => {
            dispatch({ type: RES_HERO, payload: data.results[0] })
        })
        .catch(err => dispatch({ type: ERR_HERO, error: err }))
}

export const editHero = (keys, data) => dispatch => {
    dispatch({ type: EDIT_HERO, keys: keys, data: data})
}

export const clearHero = () => dispatch => {
    dispatch({ type: CLEAR_HERO })
}
