import store from '../../store'

module.exports = {
  /**
   * This hook can be used to prevent non-logged in users from reaching states that require
   * authentication (i.e. everything but a fuew states)
   * @param  {Object}   to   The object representing the destination state.
   * @param  {Object}   from The object representing the origin state.
   * @param  {Function} next a function that will be called to pass on to the next state
   * @return {[type]}        [description]
   */
  loginRequired: function (to, from, next) {
    if (to.meta.loginRequired && !store.getters.isLoggedIn) {
      // DO SOMETHING HERE, for example, redirect the user to the login page
    }
    next()
  }
}
