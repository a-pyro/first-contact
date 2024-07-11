import {
  type PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

type User = {
  username: string
  email: string
  accountId: string
  avatar: string
}

type GlobalContextType = {
  user: User | null
  isLogged: boolean
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLogged, setIsLogged] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser)
      } else {
        setUser(null)
      }
    })

    return unsubscribe
  }, [])

  return (
    <GlobalContext.Provider value={{ user }}>{children}</GlobalContext.Provider>
  )
}
