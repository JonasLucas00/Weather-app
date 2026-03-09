import './App.css'
import Header from './components/Header.jsx'
import SearchResult from './components/Search/SearchResults.jsx'
import SearchBar from './components/Search/SearchBar.jsx'
import { useState } from 'react'

function App() {
  const [weather, setWeather] = useState(null)
  return (
    <div className='flex flex-col h-screen'>
      <Header />

      <div className='flex justify-around mt-[90px] items-center'>
        <SearchResult weather = {weather}/>
        <SearchBar setWeather = {setWeather}/>
      </div>

    </div>
  )
}

export default App
