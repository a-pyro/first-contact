import { Tabs } from 'expo-router'
import React from 'react'

import { TabBarIcon } from '@/components/navigation/tab-bar-icon'
import { Colors } from '@/constants/colors'
import { useColorScheme } from '@/hooks/use-color-scheme'

const TabLayout = () => {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          // eslint-disable-next-line react/no-unstable-nested-components -- rn thing
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              name={focused ? 'home' : 'home-outline'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          // eslint-disable-next-line react/no-unstable-nested-components -- rn thing
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              name={focused ? 'code-slash' : 'code-slash-outline'}
            />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabLayout
