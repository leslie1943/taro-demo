export default {
  namespace: 'count',
  state: {
    current: 0
  },
  effects: {
    // *adding({ call, put, select }) {
    //   yield put({ type: 'add' })
    // },
    // *reducing({ call, put, select }) {
    //   yield put({ type: 'reduce' })
    // }
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