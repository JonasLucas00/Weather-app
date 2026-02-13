import './App.css'
import Header from './components/Header.jsx'
import SearchResult from './components/Search/SearchResults.jsx'
import SearchBar from './components/Search/SearchBar.jsx'

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />

      <div className='flex justify-around mt-[90px] items-center'>
        <SearchResult />
        <SearchBar />
      </div>

    </div>
  )
}

export default App
