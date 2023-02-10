import axios from 'axios'

const state = {
  token: sessionStorage.getItem('Token') ? sessionStorage.getItem('Token') : ''
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  }
}

const actions = {
  LoginByUsername({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get(
        'http://rap2.taobao.org:38080/app/mock/248005/api/getUserInfo'
      ).then(response => {
        const data = response.data.data
        sessionStorage.setItem('Token', data.token) // 登录成功后将token存储在cookie之中
        commit('SET_TOKEN', data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
