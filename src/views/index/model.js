import "@tarojs/async-await"
import * as homeApi from './service'
export default {
  namespace: 'home',
  state: {
  },
  effects: {
    *login({ payload, callback }, { call, put, select }) {
      console.info('call model method')
      const res = yield call(homeApi.login, payload)
      if (res.status === 'ok') {
        callback(res.data)
      }
    },
  }
}