import {StrictMode} from 'react'
import {render} from 'react-dom'
import './index.css'
import './global.css'
import App from './App'
import {Provider} from 'react-redux'
import store from './reducers/store'

render(
  <StrictMode>
    <Provider store={store}>
    <App />

    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
