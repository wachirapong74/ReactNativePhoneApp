import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'
import testReducers from './testReducers'
// import userReducers from './userReducers'
import authReducers from './authReducers'

const rootReducers = combineReducers({
    form: formReducer,
    testReducers,
    // userReducers,
    authReducers,
})

export default rootReducers