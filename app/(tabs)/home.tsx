/* eslint-disable react/no-unstable-nested-components -- rn */
import React from 'react'
import { FlatList, Text } from 'react-native'

import { ScrollableWrapper } from '@/components'
import { FAKE_POSTS, ListHeader } from '@/components/home'

const fakeData = [
  {
    $id: '1',
    title: 'Title 1',
    description: 'Description 1',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    $id: '2',
    title: 'Title 2',
    description: 'Description 2',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    $id: '3',
    title: 'Title 3',
    description: 'Description 3',
    imageUrl: 'https://via.placeholder.com/150',
  },
]

const HomeView = () => {
  return (
    <ScrollableWrapper>
      <FlatList
        ListHeaderComponent={() => <ListHeader latestPosts={FAKE_POSTS} />}
        data={fakeData}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text>{`${item.title} - ${item.description}`}</Text>
        )}
      />
    </ScrollableWrapper>
  )
}

export default HomeView
