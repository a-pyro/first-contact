import { Redirect, router } from 'expo-router'
import React from 'react'
import { Image, Text, View } from 'react-native'

import { CustomButton, ScrollableWrapper } from '@/components'
import { images } from '@/constants'
import { useUserContext } from '@/context'

const HomePage = () => {
  const { isLogged, loading } = useUserContext()
  if (!loading && isLogged) return <Redirect href="/home" />
  return (
    <ScrollableWrapper innerViewClass="items-center" statusBarStyle="light">
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
    </ScrollableWrapper>
  )
}

export default HomePage
