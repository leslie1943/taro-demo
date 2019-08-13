import Taro, { Component, Config } from '@tarojs/taro'
import { View, } from '@tarojs/components'
import { AtButton, AtDivider } from 'taro-ui'
import { connect } from '@tarojs/redux';
import './index.scss'

// 定义接口
interface iComponentCount {
  current: Number,
  dispatch: Function,
}

// bind model
@connect(({ count }) => ({
  ...count,
}))
export default class Index extends Component<iComponentCount> {
  constructor(props) {
    super(props)
  }

  config: Config = {
    navigationBarTitleText: 'dva demo'
  }

  componentDidMount() {
    // Taro.getLocation({
    //   success: res => console.log(res)
    // }).then(res => console.log('res', res))
  }

  toDemo = () => {
    Taro.redirectTo({
      url: '/views/demo2/index'
    })
  }
  add = () => {
    this.props.dispatch({
      type: 'count/add'
    })
  }
  reduce = () => {
    this.props.dispatch({
      type: 'count/reduce'
    })
  }
  render() {
    console.info('this in views/count/index.tsx:', this)
    const { current } = this.props
    return (
      <View>
        <View>
          <View className="bottom-10 index">
            <AtDivider content="This page show how dva works"></AtDivider>
          </View>
          <View className="bottom-10 index">
            {current}
          </View>
          <View style="display:flex;" className="bottom-10">
            <AtButton onClick={this.add} className='btn-max-w count' >Count++</AtButton>
            <AtButton onClick={this.reduce} type='secondary' className='btn-max-w count' >Count--</AtButton>
          </View>

          <AtButton onClick={this.toDemo} type='primary' className='btn-max-w' >To Demo 2</AtButton>
        </View>
      </View>
    )
  }
}
