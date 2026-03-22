import './App.css'
import Header from './components/Header/Header.jsx'
import UserPosition from './components/Header/UserPosition.jsx'
import SearchResult from './components/Search/SearchResults.jsx'
import SearchBar from './components/Search/SearchBar.jsx'
import Main from './components/Main/Main.jsx'
import { useState } from 'react'

function App() {
  const [weather, setWeather] = useState(null)
  const [userPosition, setUserPosition] = useState('')
  const [data, setData] = useState(null)
  
  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-b from-slate-400 to-sky-400 justify-center'>
      <Header userPosition = {userPosition} setData={setData}/>
      <UserPosition setUserPosition = {setUserPosition}/>
      <div className='flex flex-col justify-center items-center border border-black p-2 m-2' >
        
        <Main data={data}/>
        
      </div>

    </div>
  )
}

export default App
