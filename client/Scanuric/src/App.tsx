import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SettingSubscription from './pages/SettingSubscription'
import { Header } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <SettingSubscription/>
    </>
  )
}

export default App
