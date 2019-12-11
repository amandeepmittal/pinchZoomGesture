import React from 'react'
import { Image, View, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

// import PinchZoom from './PinchZoom'

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{
          uri: 'https://miro.medium.com/max/1080/1*7SYuZvH2pZnM0H79V4ttPg.jpeg'
        }}
        style={{
          width: width,
          height: 300
        }}
        resizeMode='contain'
      />
    </View>
  )
}

export default App
