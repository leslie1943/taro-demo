import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// AtTimeline
import { AtButton, AtMessage } from 'taro-ui'
import './index.scss'

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: 'Demo 2 page'
  }

  toHome = () => {
    Taro.switchTab({
      url: '/views/index/index'
    })
  }
  handleSuccess = (type) => {
    console.info('type', type)
    Taro.atMessage({
      'type': type,
      'message': '成功通知!'
    })
  }
  render() {
    return (
      <View >
        {/* <AtTimeline
          items={[
            { title: '吃饭' },
            { title: '睡觉', color: 'green' },
            { title: '改BUG', color: 'red' },
            { title: '睡觉', color: 'yellow' },
            { title: '吃饭' },
            { title: '睡觉', color: 'green' },
            { title: '改BUG', color: 'red' },
          ]}
        >
        </AtTimeline> */}
        <AtMessage />
        <View style="margin-top:10px;">
          <AtButton type='primary' onClick={this.handleSuccess.bind(this, 'success')}>成功消息</AtButton>
        </View>
        <View style="margin-top:10px;">
          <AtButton onClick={this.toHome} type='primary' className='btn-max-w' >To Home</AtButton>
        </View>
      </View>
    )
  }
}
