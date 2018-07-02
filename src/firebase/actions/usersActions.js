import MyFirebase from 'firebase/MyFirebase'

const db = MyFirebase.firebase.database()

export const getFullUser = (uid) => db
  .ref('users')
  .child(`full/${uid}`)
  .once('value')
