import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Store} from 'react-chrome-redux'
import {PORT_NAME} from './config'

import './index.css'
import Popup from './components/App'

const proxyStore =  new Store({
  state: {},
  portName: PORT_NAME
})

ReactDOM.render(<Provider store={proxyStore}><Popup /></Provider>, document.getElementById('root'))
 