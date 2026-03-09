function SearchResult({weather}) {

    if(!weather) return null

    return(
            <div className="bg-blue-300 p-2 m-2 w-[650px] h-[700px] rounded-xl flex flex-col items-center">
                <div className="flex flex-col items-center mt-8 text-xl border-2 border-black">
                    <h1 className="text-4xl mb-4">Today's weather forecast in {weather.name}</h1>
                    
                    <p>Temperature: {weather.main.temp}</p>
                    <p>Feels like: {weather.main.feels_like}</p>
                    <p>Wind: {weather.wind.speed}</p>
                </div>
        </div>
        
    )
}

export default SearchResult