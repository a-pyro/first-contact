import React from 'react'
import { FlatList, Text } from 'react-native'

export type Post = {
  $id: string
  title: string
}

export const FAKE_POSTS = [
  {
    $id: '1',
    title: 'Title 1',
  },
  {
    $id: '2',
    title: 'Title 2',
  },
  {
    $id: '3',
    title: 'Title 3',
  },
]

type TrendingProps = {
  posts: Post[]
}

export const Trending = ({ posts }: TrendingProps) => {
  return (
    <FlatList
      horizontal
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => <Text>{item.title}</Text>}
    />
  )
}
