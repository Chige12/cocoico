import firebase from '~/plugins/firebase'

export const getters = {
  isLoggedIn(state){
    return (state.user !== null)
  }
}

export const state = () => ({
  user: null
})


export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  logout(state) {
    state.user = null
  },
}

export const actions = {
  loginWithGoogle({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        const resultUser = result.user
        const user = Object.keys(resultUser).reduce(
          (acc, key) =>
            ({}.hasOwnProperty.call(acc, key)
              ? { ...acc, [key]: resultUser[key] }
              : acc),
          { uid: null, displayName: null, photoURL: null, email: null }
        )
        if (user.uid) {
          console.log(user)
          commit('setUser', user)
        }
      })
      .catch(function(error) {
        console.log(error.code)
      })
  },
  logout({ commit }) {
    commit('logout')
  },
  loginWithEmail(context, payload) {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
          console.log('成功！')
        }).catch((error) => {
          alert(error)
        })
  },
}