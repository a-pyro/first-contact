import React from 'react'

import { AuthForm } from '@/components'

const SignUp = () => {
  return <AuthForm formType="signup" isLoading={false} onSubmit={console.log} />
}

export default SignUp
