import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'

import { ScrollableWrapper } from '@/components/scrollable-wrapper'
import { images } from '@/constants'

import { CustomButton } from '../custom-button'

import { FormField } from './form-field'

type FormState = {
  email: string
  password: string
}

type AuthFormProps = {
  formType: 'login' | 'signup' // Specify the form type
  onSubmit: (form: FormState) => void
  isLoading: boolean
}

export const AuthForm = ({ formType, onSubmit, isLoading }: AuthFormProps) => {
  const [form, setForm] = useState<FormState>({
    email: '',
    password: '',
  })

  return (
    <ScrollableWrapper statusBarStyle="light">
      <Image
        className="h-[34px] w-[115px]"
        resizeMode="contain"
        source={images.logo}
      />

      <Text className="mt-10 font-psemibold text-2xl font-semibold text-white">
        {formType === 'login' ? 'Log in to Aora' : 'Sign up for Aora'}
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
        isLoading={isLoading}
        title={formType === 'login' ? 'Log in' : 'Sign up'}
        onPress={() => {
          onSubmit(form)
        }}
      />
      {formType === 'login' && (
        <View className="flex flex-row justify-center gap-2 pt-5">
          <Text className="font-pregular text-lg text-gray-100">
            Already have an account?
          </Text>
          <Link
            className="font-psemibold text-lg text-secondary"
            href="/sign-up"
          >
            <Text>login</Text>
          </Link>
        </View>
      )}
    </ScrollableWrapper>
  )
}
