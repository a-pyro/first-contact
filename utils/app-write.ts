/* eslint-disable no-console -- debug */
import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
} from 'react-native-appwrite'

import { type SignUpFormState } from '@/components/form'

export const appwriteConfig = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.apyro.rnfirstcontact',
  projectId: '668fdc1d00385c1e0373',
  databaseId: '668fdd990038c4cbb23e',
  storageId: '668fdef900373ee2a145',
  userCollectionId: '668fddb2003ccd7400ce',
  videoCollectionId: '668fdd990038c4cbb23e',
}

const client = new Client()

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform)

const account = new Account(client)
const avatars = new Avatars(client)
const dbs = new Databases(client)

export const signIn = async ({
  email,
  password,
}: Omit<SignUpFormState, 'formType' | 'userName'>) => {
  try {
    const session = await account.createEmailPasswordSession(email, password)
    return session
  } catch (error) {
    // Handle the error here
    console.error('Error signing in:', error)
    throw error
  }
}

export const createUser = async ({
  email,
  password,
  userName,
}: Omit<SignUpFormState, 'formType'>) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      userName,
    )

    if (!newAccount.$id) throw new Error('Account creation failed')
    const avatar = avatars.getInitials(userName)
    await signIn({ email, password })
    const newUser = await dbs.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        avatar,
        accountId: newAccount.$id,
        email,
        username: userName,
      },
    )
    return newUser
  } catch (error) {
    // Handle the error here
    console.error('Error creating user:', error)
    throw error
  }
}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get()
    if (!currentAccount.$id) throw new Error('User not found')

    const currentUser = await dbs.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal('accountId', currentAccount.$id)],
    )
    if (!currentUser.total) throw new Error('User not found')
    return currentUser.documents[0]
  } catch (error) {
    // Handle the error here
    console.error('Error getting current user:', error)
    throw error
  }
}
