import React, { useState } from 'react'
import { Image, Text } from 'react-native'

import { FormField } from '@/components'
import { ScrollableWrapper } from '@/components/scrollable-wrapper'
import { images } from '@/constants'

type FormState = {
  email: string
  password: string
}

const SignInView = () => {
  const [form, setForm] = useState<FormState>({
    email: '',
    password: '',
  })
  return (
    <ScrollableWrapper>
      <Image
        className="h-[34px] w-[115px]"
        resizeMode="contain"
        source={images.logo}
      />

      <Text className="mt-10 font-psemibold text-2xl font-semibold text-white">
        Log in to Aora
      </Text>
      <FormField
        keyboardType="email-address"
        title="Email"
        type="text"
        value={form.email}
        wrapperViewClassName="mt-5"
        handleChange={(value) => {
          setForm({ ...form, email: value })
        }}
      />
      <FormField
        title="Password"
        type="password"
        value={form.password}
        wrapperViewClassName="mt-5"
        handleChange={(value) => {
          setForm({ ...form, password: value })
        }}
      />
    </ScrollableWrapper>
  )
}

export default SignInView
