import Taro, { Component, Config } from '@tarojs/taro'
import { View, } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: 'Member page'
  }

  toDemo = () => {
    Taro.redirectTo({
      url: '/views/count/index'
    })
  }
  render() {
    return (
      <View>
        <View>
          <View style="text-align:center;">This is memember list page</View>
          <AtButton onClick={this.toDemo} type='primary' className='btn-max-w' >Go count page for dva</AtButton>
        </View>
      </View>
    )
  }
}
