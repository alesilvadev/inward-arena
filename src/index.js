import React from 'react'
import { render } from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import store from './utils/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './App'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
