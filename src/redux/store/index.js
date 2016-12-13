import {createStore} from 'redux'
import rootReducer from '../reducers'

module.exports = function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default
            store.replaceReducer(nextReducer)
        })
    }

    return store

}