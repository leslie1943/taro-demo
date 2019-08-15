import Taro, { Component, Config } from '@tarojs/taro'
import Index from './views/index'
import 'taro-ui/dist/style/index.scss'
import './app.scss'
import models from './models/index.js'
import { Provider } from '@tarojs/redux';

console.info('models in app.tsx:', models)

import dva from './utils/dva'
const dvaApp = dva.createApp({
  initialState: {},
  models: models
})

const store = dvaApp.getStore()

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }


class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'views/index/index',
      'views/member/index',
      'views/count/index',
      'views/calc/index',
      'views/hero/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: 'views/index/index',
          text: '推荐',
          iconPath: 'static/photo.png',
          selectedIconPath: 'static/photo-active.png'
        },
        {
          pagePath: 'views/member/index',
          text: '我的',
          iconPath: 'static/profile.png',
          selectedIconPath: 'static/profile-active.png'
        }
      ]
    }
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
