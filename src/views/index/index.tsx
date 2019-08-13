import Taro, { Component, Config } from '@tarojs/taro'
// Text
import { View } from '@tarojs/components'
// , AtFab,
import { AtButton, AtIcon, AtCountdown, AtList, AtListItem } from 'taro-ui'
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
  toMember = () => {
    Taro.switchTab({
      url: '/views/member/index'
    })
  }
  toHeroList = () => {
    Taro.redirectTo({
      url: '/views/hero/index'
    })
  }
  componentWillMount() { }
  componentDidMount() { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }

  onTimeUp = () => {
    Taro.showToast({
      title: '时间到', icon: 'success', duration: 2000
    })
  }

  render() {
    return (
      <View className="all">
        <View className='index'>
          <AtIcon value='clock' size='20' color='black'></AtIcon>
          <AtCountdown
            format={{ hours: ':', minutes: ':', seconds: '' }}
            seconds={10000}
            onTimeUp={this.onTimeUp}
          />
        </View>
        <View>
          <AtList>
            <AtListItem
              title='标题文字'
              arrow='right'
              extraText='详细信息'
              thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            />
            <AtListItem
              title='标题文字'
              note='描述信息'
              extraText='详细信息'
              arrow='down'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            />
            <AtListItem
              title='标题文字'
              note='描述信息'
              extraText='详细信息'
              arrow='up'
              thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            />
          </AtList>
        </View>

        <View className='index'>
          <AtButton type='secondary' onClick={this.toMember}>To member list</AtButton>
          <AtButton type='secondary' onClick={this.toHeroList}>To tab list</AtButton>
        </View>
      </View>
    )
  }
}
