import React, { useState } from 'react'

import { AuthForm } from '@/components'

const SignInView = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit = () => {
    console.log(form)
  }
  return <AuthForm formType="login" isLoading={false} onSubmit={console.log} />
}

export default SignInView
