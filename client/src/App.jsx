import './App.css'
import Header from './components/Header/Header.jsx'
import UserPosition from './components/Header/UserPosition.jsx'
import Main from './components/Main/Main.jsx'
import FooterMain from './components/Footer/FooterMain.jsx'
import { useState } from 'react'

function App() {
  const [userPosition, setUserPosition] = useState('')
  const [data, setData] = useState(null)
  
  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-b from-white to-sky-300 pt-40 mt'
          style={{background: '#0c1a2e'}}
    >
      <Header userPosition = {userPosition} setData={setData} data={data}/>
      <UserPosition setUserPosition = {setUserPosition}/>
        <div className='flex flex-col p-2 mt-4' >
          <Main data={data} userposition={userPosition}/>
        <FooterMain/>
        
        </div>

    </div>
  )
}

export default App
