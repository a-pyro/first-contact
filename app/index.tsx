/* eslint-disable react-native/no-inline-styles  -- rn */
import { router } from 'expo-router'
import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context' // this keeps the content within the safe area of the device (notches, etc.)

import { AppStatusBar, CustomButton } from '@/components'
import { images } from '@/constants'

const HomePage = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="h-full w-full items-center justify-center px-4">
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
          <View className="mt-5">
            <Text className="text-center text-3xl font-bold text-white">
              Discover endless possibilities with &nbsp;
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              className="absolute -bottom-2 -right-8 h-[15px] w-[136px]"
              resizeMode="contain"
              source={images.path}
            />
          </View>
          <Text className="mt-7 text-center font-pregular text-sm text-gray-100">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <CustomButton
            containerClass="w-full"
            title="Continue with email"
            onPress={() => {
              router.push('/sign-in')
            }}
          />
        </View>
      </ScrollView>
      {/* the top  bar where the time and wifi and other stuff are */}
      <AppStatusBar />
    </SafeAreaView>
  )
}

export default HomePage
