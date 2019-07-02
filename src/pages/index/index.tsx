import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'

export default class Index extends Component {
  // constructor() {
  //   super(...arguments)
  // }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: 'Home'
  }

  click = () => {
    console.info('click handle')
  }
  go = () => {
    Taro.redirectTo({
      url: '/pages/index/go'
    })
  }
  componentWillMount() { }
  componentDidMount() { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }

  render() {
    return (
      <View className="all">
        <AtIcon value='clock' size='30'></AtIcon>
        <View className='index'>
          <Text style='color:red;' onClick={this.click}>DEMO</Text>
        </View>

        <View className='index' style="margin-left:30%;width:25%">
          <Button onClick={this.go} className='btn-max-w' plain type='primary'>GO</Button>
        </View>
      </View>
    )
  }
}
