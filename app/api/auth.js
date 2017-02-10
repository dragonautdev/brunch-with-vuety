/**
 * Example auth api connector that lets your user log in using a defined payload
 * and returns a promise
 */

import api from '../config/api'

let endpoints = {
  login: '/auth/local'
}

export default {
  login: (payload) => {
    let res = api.post(endpoints.login, payload)
    return res
  },
  logout: () => {
    console.log('logout')
  }
}
