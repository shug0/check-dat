import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/firestore'

import firebaseConfig from 'app/constants/firebaseConfig'

const app = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore(app)
db.settings({ timestampsInSnapshots: true })

const base = Rebase.createClass(db)

export default base
