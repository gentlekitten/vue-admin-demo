import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/getUserInfo',
    method: 'get',
    params: { token }
  })
}

export function logout(data) {
  return request({
    url: '/logout',
    method: 'post',
    data
  })
}
