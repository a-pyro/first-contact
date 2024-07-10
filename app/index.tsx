/* eslint-disable react-native/no-inline-styles  -- rn */
import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context' // this keeps the content within the safe area of the device (notches, etc.)

import { images } from '@/constants'

const HomePage = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="h-full w-full items-center px-4">
          <Image
            className="h-[84px] w-[130px]"
            resizeMode="contain"
            source={images.logo}
          />
          <Image
            className="h-[300px] w-full max-w-[380px]"
            resizeMode="contain"
            source={images.cards}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomePage
