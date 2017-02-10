/**
 * This is an opinionated authentication store that assumes you have an "api"
 * module on the root of your project and it contains a sub module called "auth"
 * that handles authentication.
 *
 * Modify at will to adapt to your specific situation.
 */
import * as types from '../mutation-types'
import Store from 'store/store'

import api from '../../api'

/**
 * This is our local state, initialized from the localStorage according to
 * @type {Object}
 */
const state = {
  user: Store.get('user', null),
  token: Store.get('token', null)
}

const getters = {
  user: state => state.user,
  isLoggedIn: state => state.user != null && state.token != null,
  token: state => state.token
}

const actions = {
  /**
   * This action logs the user in.
   */
  login ({ commit, state }, payload) {
    let promise = api.auth.login(payload)
    promise.then((result) => {
      commit(types.LOGIN, {
        user: result.data.data,
        token: result.data.token
      })
      // Store the user's data (token and user representation) if marked
      if (payload.rememberMe) {
        Store.set('user', result.data.data)
        Store.set('token', result.data.token)
      }
    })
    return promise
  },
  logout ({commit, state}) {
    api.auth.logout()
    commit(types.LOGOUT)
    Store.clear()
  }
}

const mutations = {
  [types.LOGIN] (state, { user, token }) {
    state.token = token
    state.user = user
  },

  [types.LOGOUT] (state) {
    this.user = null
    this.state = null
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
