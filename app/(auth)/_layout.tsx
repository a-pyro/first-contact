import { Stack } from 'expo-router'
import React from 'react'

import { AppStatusBar } from '@/components'

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="sign-in"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          headerShown: false,
        }}
      />
      <AppStatusBar />
    </Stack>
  )
}

export default AuthLayout
