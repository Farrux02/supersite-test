import './App.css'
import MainPage from './pages/MainPage'
import OrderModal from './features/OrderModal/OrderModal'
import { useState } from 'react';
import { IsModalOpenContext } from './shared/Context';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <IsModalOpenContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {isModalOpen && <OrderModal />}
      <MainPage />
    </IsModalOpenContext.Provider>
  )
}

export default App
