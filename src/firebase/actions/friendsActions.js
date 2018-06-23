import camelCase from 'lodash/camelCase'
import MyFirebase from 'firebase/MyFirebase'

const db = MyFirebase.firebase.database()

export const searchUser = (name) => new Promise((resolve, reject) => (
  db
    .ref('users')
    .child('short')
    .orderByChild('id')
    .equalTo(camelCase(name))
    .limitToLast(1)
    .on('child_added', resolve, reject)
))

export const getFullUser = (uid) => db
  .ref('users')
  .child(`full/${uid}`)
  .once('value')
