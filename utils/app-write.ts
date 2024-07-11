import { Account, Client, ID } from 'react-native-appwrite'

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

export const createUser = async (
  email: string,
  password: string,
  name: string,
) => {
  const resp = await account.create(ID.unique(), email, password, name)
  return resp
}
