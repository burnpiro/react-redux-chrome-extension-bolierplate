import {wrapStore} from 'react-chrome-redux'
import {createStore} from 'redux'
import rootReducer from './reducers'
import {PORT_NAME} from './config'

const store = createStore(rootReducer, {})

wrapStore(store, {portName: PORT_NAME})