import React from 'react'
import ReactDOM from 'react-dom'
import App from './core/App'
import registerServiceWorker from './registerServiceWorker'
import firebase from 'firebase'

import firebaseConfig from './core/constants/firebaseConfig'

firebase.initializeApp(firebaseConfig)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
