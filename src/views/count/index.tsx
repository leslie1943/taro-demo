import Taro, { Component, Config } from '@tarojs/taro'
import { View, } from '@tarojs/components'
import { AtButton, AtDivider, AtList, AtListItem, AtModal } from 'taro-ui'
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
    this.state = {
      stars: [],
      loading: false,
      isOpened: false,
      currentDoc: {}
    }
  }

  config: Config = {
    navigationBarTitleText: 'dva demo'
  }

  componentDidMount() {
    this.setState({ loading: true })
    this.props.dispatch({
      type: 'count/load',
      callback: (res: any) => {
        this.setState({ stars: res.stars, loading: false })
      }
    })
  }

  toDemo = () => {
    Taro.redirectTo({
      url: '/views/calc/index'
    })
  }
  add = () => {
    this.setState({
      isOpened: false
    })
    this.props.dispatch({
      type: 'count/add'
    })
  }
  reduce = () => {
    this.setState({
      isOpened: false
    })
    this.props.dispatch({
      type: 'count/reduce'
    })
  }
  handleItemClick = (item) => {
    console.info(item)
    this.setState({
      isOpened: true,
      currentDoc: item
    })
  }
  render() {
    console.info('this in views/count/index.tsx:', this)
    const { current } = this.props
    const { stars, loading, isOpened, currentDoc } = this.state
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

          <View>
            <AtDivider content="call api to load data"></AtDivider>
            <AtList>
              {stars.map(item => {
                return <AtListItem
                  onClick={this.handleItemClick.bind(this, item)}
                  title={item.name}
                  note={item.description}
                  arrow="right"
                  thumb={item.image_src}
                >
                </AtListItem>
              })}
            </AtList>
            <AtModal isOpened={isOpened}
              content={currentDoc.description}
              title='Detail'
              cancelText='取消'
              confirmText='确认'>
            </AtModal>
          </View>

          <AtButton onClick={this.toDemo} type='primary' className='btn-max-w' >开始口算吧 </AtButton>
        </View>
      </View>
    )
  }
}
