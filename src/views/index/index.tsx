import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton, AtDivider, AtForm, AtInput } from 'taro-ui'
import './index.scss'
import { connect } from '@tarojs/redux';
import epro from '../../static/banners/epro.png'

// 定义接口
interface iComponentCount {
  user: String,
  password: String,
  dispatch: Function,
}

@connect(({ home }) => ({
  ...home,
}))
export default class Index extends Component<iComponentCount> {
  constructor() {
    super(...arguments)
    this.state = {
      user: '',
      password: ''
    }
  }

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
  componentWillMount() { }
  componentDidMount() { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }

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
  onSubmit = () => {
    console.info('submit')
    console.info('this.props', this.props)
    this.props.dispatch({
      type: 'home/login',
      payload: this.state,
      callback: (res: any) => {
        this.setState({ stars: res.stars, loading: false })
      }
    })
  }

  onReset = () => {
  }
  handleChange = (stateName, stateVal) => {
    if (stateName == 'user') {
      this.setState({
        user: stateVal
      })
    }
    if (stateName == 'password') {
      this.setState({
        password: stateVal
      })
    }
  }

  render() {
    return (
      <View className="all">

        <View className='index' style="height:200px;color:white;">
          <img src={epro}></img>
        </View>
        <AtDivider />
        <View>
          <AtForm>
            <AtInput
              name='user'
              type='text'
              placeholder="用户名"
              value={this.state['user']}
              onChange={this.handleChange.bind(this, 'user')}
            />
            <AtInput
              name='password'
              type='password'
              placeholder="密 码"
              value={this.state['password']}
              onChange={this.handleChange.bind(this, 'password')}
            />
            <View  >
              <AtButton type="primary" onClick={this.onSubmit} formType='submit'>登录</AtButton>
            </View>
            {/* <AtButton formType='reset'>重置</AtButton> */}
          </AtForm>
        </View>

        <View className='index' style="margin-top:10px;">
          <AtButton type='secondary' onClick={this.toMember}>To member list</AtButton>
        </View>
        <View className='index' style="margin-top:10px;">
          <AtButton type='secondary' onClick={this.toHeroList}>To tab list</AtButton>
        </View>
      </View>
    )
  }
}
