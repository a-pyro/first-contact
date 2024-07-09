/* eslint-disable react/no-unstable-nested-components -- rn */
import { Tabs } from 'expo-router'
import React from 'react'

import {
  BookmarkTabIcon,
  CreateTabIcon,
  HomeTabIcon,
  ProfileTabIcon,
} from '@/components/navigation/tab-bar-icon'

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false, // only show the label of the icon
      }}
    >
      <Tabs.Screen
        name="home" // the name of the screen (home.tsx)
        options={{
          title: 'home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <HomeTabIcon color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'create',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <CreateTabIcon color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <ProfileTabIcon color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'bookmark',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <BookmarkTabIcon color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
