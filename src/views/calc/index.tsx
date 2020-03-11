import Taro, { Component, Config } from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
// AtTimeline
import { AtButton, AtMessage, AtInput } from 'taro-ui'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      name: '',
      age: '',
      gender: '',
    }
  }
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
  handleNameChange = (value: any) => {
    this.setState({ name: value })
  }

  handleAgeChange = (value: any) => {
    this.setState({ age: value })
  }

  handleSexChange = (value: any) => {
    this.setState({ sex: value })
  }

  render() {
    console.info('this.state', this.state)
    return (
      <View >
        <View><AtInput title="name:" value={this.state.name} name="name" onBlur={this.handleNameChange} /></View>
        <View><AtInput title="age:" value={this.state.age} name="age" onBlur={this.handleAgeChange} /></View>
        <View><AtInput title="sex:" value={this.state.sex} name="sex" onBlur={this.handleSexChange} /></View>
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
