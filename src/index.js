import React from 'react'
import ReactDOM from 'react-dom'
import App from 'core/App'
import registerServiceWorker from './registerServiceWorker'
import 'normalize.css'

import './core/firebase/MyFirebase'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
