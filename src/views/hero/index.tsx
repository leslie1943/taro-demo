import Taro, { Component, Config } from '@tarojs/taro'
import { View, } from '@tarojs/components'
import { AtTabs, AtButton, AtTabsPane, AtAvatar } from 'taro-ui'
import './index.scss'

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: 'Hero list'
  }
  constructor() {
    super(...arguments)
    this.state = { current: 0 }
  }

  handleClickTab = (value) => {
    this.setState({
      current: value
    })
  }

  toHome = () => {
    Taro.switchTab({
      url: '/views/index/index'
    })
  }

  render() {
    let current = this.state.current
    const tabList = [{ title: '战士' }, { title: '法师' }, { title: '刺客' }, { title: '辅助' }, { title: '射手' }]
    return (
      <View>
        <View>
          <AtButton onClick={this.toHome} type='primary' className='btn-max-w' >To Home</AtButton>
        </View>
        <AtTabs current={current} tabList={tabList} onClick={this.handleClickTab}>
          <AtTabsPane current={current} index={0}>
            <View style='padding: 20px 20px;background-color: #FAFBFC;text-align: center;' >
              <AtAvatar image='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=427691521,2243448880&fm=26&gp=0.jpg'></AtAvatar>
              <AtAvatar image='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=427691521,2243448880&fm=26&gp=0.jpg'></AtAvatar>
              <AtAvatar image='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=427691521,2243448880&fm=26&gp=0.jpg'></AtAvatar>
              <AtAvatar image='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=427691521,2243448880&fm=26&gp=0.jpg'></AtAvatar>
            </View>
          </AtTabsPane>
          <AtTabsPane current={current} index={1}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页2的内容</View>
          </AtTabsPane>
          <AtTabsPane current={current} index={2}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页3的内容</View>
          </AtTabsPane>
          <AtTabsPane current={current} index={3}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页4的内容</View>
          </AtTabsPane>
          <AtTabsPane current={current} index={4}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页5的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
