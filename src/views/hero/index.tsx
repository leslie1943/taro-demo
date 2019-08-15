import Taro, { Component, Config } from '@tarojs/taro'
import { View, SwiperItem, Swiper } from '@tarojs/components'
import { AtTabs, AtButton, AtTabsPane, AtIcon, AtCountdown } from 'taro-ui'
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

  onTimeUp = () => {
    Taro.showToast({
      title: '时间到', icon: 'success', duration: 2000
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
            <View className='index' style="height:100px;border:1px solid gray;background-color:gray;color:white;">
              <AtIcon value='clock' size='20' color='black'></AtIcon>
              <AtCountdown
                format={{ hours: ':', minutes: ':', seconds: '' }}
                seconds={10000}
                onTimeUp={this.onTimeUp}
              />
            </View>
          </AtTabsPane>
          <AtTabsPane current={current} index={1}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >
              <View>
                <Swiper
                  className='test-h'
                  indicatorColor='#999'
                  indicatorActiveColor='#333'
                  circular
                  indicatorDots
                  autoplay>
                  <SwiperItem>
                    <View className='demo-text-1'>
                      {/* <img className="carouls" src={banner1}></img> */}
                    </View>
                  </SwiperItem>
                  <SwiperItem>
                    <View className='demo-text-2'>
                      {/* <img className="carouls" src="https://images.pexels.com/photos/2332257/pexels-photo-2332257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img> */}
                    </View>
                  </SwiperItem>
                  <SwiperItem>
                    <View className='demo-text-3'>
                      {/* <img className="carouls" src="https://images.pexels.com/photos/2332257/pexels-photo-2332257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img> */}
                    </View>
                  </SwiperItem>
                  <SwiperItem>
                    <View className='demo-text-4'>
                      {/* <img className="carouls" src="https://images.pexels.com/photos/2332257/pexels-photo-2332257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img> */}
                    </View>
                  </SwiperItem>
                </Swiper>
              </View>
            </View>
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
