import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import permission from './modules/permission'
import user from './modules/user'
import app from './modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // sidebar: null,
    breadcrumb: null
  },
  mutations: {
    // sidebar: (state, sidebar) => (state.sidebar = sidebar),
    breadcrumb: (state, breadcrumb) => (state.breadcrumb = breadcrumb)
  },
  getters: {
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    breadcrumb: state => state.breadcrumb,
    roles: state => state.user.roles,
    addRoutes: state => state.permission.routes,
    token: state => state.user.token,
    name: state => state.user.name
  },
  actions: {},
  modules: {
    user,
    permission,
    login,
    app
  }
})
