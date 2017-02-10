/**
 * Import your routes from different modules here. Eg:
 *
 * import authRoutes from auth
 */
import error from '../../components/error.vue'
import hello from '../../components/Hello.vue'

let routes = [
  {
    path: '/',
    name: 'hello',
    component: hello
  },
  {
    path: '*',
    component: error,
    name: 'error'

  }
]

/**
 * Add your sub-routes here. One way to do so is:
 *
 * routes = [...routes, ...authRoutes]
 */

export default routes
