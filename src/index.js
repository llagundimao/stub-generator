import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
import App from './App'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/parent.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
