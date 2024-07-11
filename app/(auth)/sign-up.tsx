import React, { useCallback, useState } from 'react'

import { AuthForm, type SignUpFormState } from '@/components'
import { createUser } from '@/utils'

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = useCallback(
    async ({ userName, email, password }: SignUpFormState) => {
      // sanitize the form data

      const sanitizedEmail = email.trim().toLowerCase()
      const sanitizedPassword = password.trim()
      const sanitizedUserName = userName.trim()
      setIsSubmitting(true)
      const response = await createUser({
        email: sanitizedEmail,
        password: sanitizedPassword,
        userName: sanitizedUserName,
      })

      console.log(response)
    },
    [],
  )

  return (
    <AuthForm formType="signup" isLoading={false} onSubmit={handleSubmit} />
  )
}

export default SignUp
