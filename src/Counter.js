import React from 'react'
import { INCREASE, DECREASE } from './ActionTypes'
import { connect } from 'react-redux'

function Counter(props) {
    console.log('props', props)
    const changeCount = (value) => () => {
        props.setCount(value)
    }

    return (
        <div>Counter
            <button onClick={changeCount('plus')}>+</button>
            {props.count}
            <button onClick={changeCount('minus')}>-</button>

        </div>
    )
}

const state = (state) => ({
    count: state.count
})

const dispatch = (dispatch) => ({
    setCount: (value) => dispatch({
        type: value === 'minus' ? INCREASE : DECREASE
    })
})

export default connect(state, dispatch)(Counter)
