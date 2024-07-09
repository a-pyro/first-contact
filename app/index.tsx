import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const HomePage = () => {
  return (
    <View className="justify-center items-center h-full ">
      <Text className="text-3xl font-pblack">index</Text>
      <Link href="/home">
        <Text>Go to Home</Text>
      </Link>
    </View>
  )
}

export default HomePage
