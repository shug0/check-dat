import base from 'app/firebase/rebase'

export const getUserByEmail = (email) => (
  base.get('users', {
    context: this,
    query: (ref) => ref.where('email', '==', email)
  })
)
