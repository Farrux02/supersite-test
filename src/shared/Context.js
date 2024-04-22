import { createContext } from 'react'

export const IsModalOpenContext = createContext({
  isModalOpen: false,
  setIsModalOpen: () => { },
});