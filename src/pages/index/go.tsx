import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

export default class Demo extends Component {

  home = () => {
    Taro.redirectTo({
      url: '/'
    })
  }

  render() {
    return (
      <View>
        <View className='index' style="margin-left:30%;width:25%">
          <Button onClick={this.home} className='btn-max-w' plain type='primary'>Home</Button>
        </View>
      </View>
    )
  }
}
