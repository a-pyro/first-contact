import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'

import { CustomButton, FormField } from '@/components'
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit = () => {
    console.log(form)
  }
  return (
    <ScrollableWrapper statusBarStyle="light">
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
      <CustomButton
        containerClass="mt-7"
        isLoading={isSubmitting}
        title="Log in"
        onPress={handleSubmit}
      />
      <View className="flex flex-row justify-center gap-2 pt-5">
        <Text className="font-pregular text-lg text-gray-100">
          Don&apos;t have an account?
        </Text>
        <Link className="font-psemibold text-lg text-secondary" href="/sign-up">
          <Text>Signup</Text>
        </Link>
      </View>
    </ScrollableWrapper>
  )
}

export default SignInView
