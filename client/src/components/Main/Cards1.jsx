function Cards1({userPositionWeather, searchData}){
    const weather = searchData ? searchData : userPositionWeather
    // console.log('Cards1', weather)
    return(
    <div className="flex text-white w-full h-16 gap-3 text-center mt-2">

        <div className="flex flex-col p-4 flex-1 rounded-lg py-2 border border-slate-700"
            style={{background: "rgba(255, 255, 255, 0.06)"}}
        >
            <p>Temperature</p>
            <p className="font-bold">{weather.main.temp}°</p> 
        </div>

        <div className="flex flex-col p-4 flex-1 rounded-lg py-2 border border-slate-700"
             style={{background: "rgba(255, 255, 255, 0.06)"}}
        >
            <p>feels like</p>
            <p className="font-bold">{weather.main.feels_like}°</p> 
        </div>

        <div className="flex flex-col p-4 flex-1 rounded-lg py-2 border border-slate-700"
            style={{background: "rgba(255, 255, 255, 0.06)"}}
        >
            <p>Humidity</p>
            <p className="font-bold">{weather.main.humidity}%</p> 
        </div>

        <div className="flex flex-col p-4 flex-1 rounded-lg py-2 border border-slate-700"
            style={{background: "rgba(255, 255, 255, 0.06)"}}
        >
            <p>Wind</p>
            <p className="font-bold">{weather.wind.speed} km/h</p> 
        </div>
    </div>)
}

export default Cards1