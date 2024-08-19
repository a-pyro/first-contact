import React from 'react'
import { Image, Text, View } from 'react-native'

import { images } from '@/constants'

import { SearchInput } from '../form/search-input'

import { type Post, Trending } from './trending'

export const ListHeader = ({ latestPosts }: { latestPosts: Post[] }) => (
  <View className="my-6 flex space-y-6 px-4">
    <View className="mb-6 flex flex-row items-start justify-between">
      <View>
        <Text className="font-pmedium text-sm text-gray-100">Welcome Back</Text>
        <Text className="font-psemibold text-2xl text-white">
          Rn First Contact
        </Text>
      </View>

      <View className="mt-1.5">
        <Image
          className="h-10 w-9"
          resizeMode="contain"
          source={images.logoSmall}
        />
      </View>
    </View>

    <SearchInput initialQuery="asd" />

    <View className="w-full flex-1 pb-8 pt-5">
      <Text className="mb-3 font-pregular text-lg text-gray-100">
        Latest Videos
      </Text>
      <Trending posts={latestPosts} />
    </View>
  </View>
)
