import { create } from 'dva-core'
import { createLogger } from 'redux-logger'
import createLoading from 'dva-loading'

let app
let store
let dispatch

function createApp(opt) {
  // redux log
  // opt.onAction = [createLogger()]
  app = create(opt)
  app.use(createLoading({}))

  // load models
  if (!global.registered) {
    opt.models.forEach(model => app.model(model))
  }
  global.registered = true
  app.start()

  // store
  store = app._store
  app.getStore = () => store

  // get dispatch
  dispatch = store.dispatch

  // set dispatch
  app.dispatch = dispatch

  return app
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch
  }
}