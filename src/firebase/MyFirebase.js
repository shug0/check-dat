import firebase from 'firebase'

import firebaseConfig from '../constants/firebaseConfig'
import Rebase from 're-base'

class MyFirebase {
  constructor () {
    const firebaseInstance = firebase.initializeApp(firebaseConfig)
    const databaseInstance = firebaseInstance.database()
    const rebaseInstance = Rebase.createClass(databaseInstance)

    this.firebaseInstance = firebaseInstance
    this.rebaseInstance = rebaseInstance
  }

  get firebase () {
    return this.firebaseInstance
  }

  get rebase () {
    return this.rebaseInstance
  }
}

const MyInstance = new MyFirebase()

export default MyInstance
