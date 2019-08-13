import "@tarojs/async-await"
import * as homeApi from './service'
console.info('homeApi:', homeApi)
export default {
  namespace: 'count',
  state: {
    current: 0
  },
  effects: {
    *load({ payload, callback }, { call, put, select }) {
      const res = yield call(homeApi.homepage, {})
      // console.info('res:', res)
      if (res.status === 'ok') {
        callback(res.data)
      }
    },
  },
  reducers: {
    add(state, { payload }) {
      return {
        ...state,
        current: state.current + 1
      }
    },
    reduce(state, { payload }) {
      return {
        ...state,
        current: state.current - 1
      }
    }
  }
}