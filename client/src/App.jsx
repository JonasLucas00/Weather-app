import './App.css'
import Header from './components/Header.jsx'
import SearchResult from './components/Search/SearchResults.jsx'
import SearchBar from './components/Search/SearchBar.jsx'
import { useState } from 'react'

function App() {
  const [weather, setWeather] = useState(null)
  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-b from-slate-900 to-blue-900'>
      <Header />


      <div className='flex flex-col mt-[90px] items-center gap-[90px]' >
        <SearchBar setWeather = {setWeather}/>
        <SearchResult weather = {weather}/>
      </div>

    </div>
  )
}

export default App
