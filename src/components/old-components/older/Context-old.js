import { useContext, createContext } from 'react'

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);
  // See https://nimblewebdeveloper.com/blog/react-context-provider-hook-pattern

export default MyContext;