/* eslint-disable react-native/no-inline-styles  -- rn */
import { type ClassValue } from 'clsx'
import { type StatusBarStyle } from 'expo-status-bar'
import React, { type PropsWithChildren } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'

import { cn } from '@/utils'

import { AppStatusBar } from './app-status-bar'

type ScrollableWrapperProps = {
  innerViewClass?: ClassValue
  statusBarStyle?: StatusBarStyle
}

export const ScrollableWrapper = ({
  children,
  innerViewClass,
  statusBarStyle,
}: PropsWithChildren<ScrollableWrapperProps>) => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View
          className={cn(
            'min-h-[85vh] w-full justify-center px-4',
            innerViewClass,
          )}
        >
          {children}
        </View>
      </ScrollView>
      {/* the top  bar where the time and wifi and other stuff are */}
      <AppStatusBar style={statusBarStyle} />
    </SafeAreaView>
  )
}
