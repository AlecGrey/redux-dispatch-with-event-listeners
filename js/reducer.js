// add code snippets from README
const button = document.getElementById('button')
let state

const reducer = ( state = { count: 0 }, action ) => {
    // action = { type: 'type', payload: { payload } }
    switch ( action.type ) {
        case 'INCREASE_COUNT':
            return { count: state.count + 1 }
        default:
            return state
    }
}

const dispatch = ( action ) => {
    state = reducer( state, action )
    render()
}

const render = () => {
    document.getElementById('container').textContent = state.count
}

button.addEventListener( 'click', () => dispatch({ type: 'INCREASE_COUNT' }) )

dispatch('@@INIT')