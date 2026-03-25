import Cards1 from "./Cards1.jsx"
import Wind from "./Wind.jsx"

function Main({data, userposition}){
    // console.log(userposition)
    // if(data) console.log(data)

    const userPositionWeather = userposition ? userposition : null
    // console.log(userPositionWeather)

    return(
    <div className="flex flex-col items-center justify-center">
        {userPositionWeather &&
            <>
                <Cards1 userPositionWeather={userPositionWeather} searchData = {data}/>
                <Wind userPositionWeather = {userPositionWeather} searchData = {data}/>
            </>
            
        
        }
    </div>)












































    
    // if(!data) return null
    // const bgColor = headerBgColor(data.weather[0].main)
    // console.log(bgColor)
    // console.log(data.weather[0].main)

    // console.log(data)
    // return(
    //         <div className="p-6 m-2 min-w-[900px] min-h-[500px] rounded-xl flex flex-col items-center shadow-2xl justify-center mt-16"
    //             style={{
    //                 background: bgColor,
    //                 opacity:0.7
    //                 }}
    //         >
    //                 <h1 className="text-4xl mb-8 font-semibold text-white">
    //                     Today's weather forecast in {data.name}
    //                 </h1>

    //                 <div className="flex items-center text-white bg-white/10 border border-white/10 p-4 rounded-xl text-center shadow-2xl-2xl text-white mb-8 ">
    //                     <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="" className="w-16"/>
    //                     <p className="text-xl">{data.weather[0].description}</p>
    //                 </div>
                    
    //             <div className="grid grid-cols-2 gap-6 w-full">

                    

    //                     <div className="bg-white/10 border border-white/10 p-4 rounded-xl text-center shadow-2xl-2xl text-white">
    //                             <p className="text-lg font-medium"><i className="fa-solid fa-temperature-three-quarters text-xl"></i> Temperature</p>
    //                             <p className="text-xl ">{data.main.temp.toFixed()}°</p>
    //                     </div>
                            
    //                     <div className="bg-white/10 border border-white/10 p-4 rounded-xl text-center shadow-2xl text-white">
    //                             <p className="text-lg font-medium">Feels like</p>
    //                             <p className="text-xl">{data.main.feels_like}°</p>
    //                     </div>
                            
    //                     <div className="bg-white/10 border border-white/10 p-4 rounded-xl text-center shadow-2xl text-white">
    //                         <p className="text-lg font-medium">Wind</p>
    //                         <p className="text-xl">{(data.wind.speed * 3.6).toFixed(1)}</p>
    //                     </div>
                            
    //                     <div className="bg-white/10 border border-white/10 p-4 rounded-xl text-center shadow-2xl text-white">
    //                         <p className="text-lg font-medium">humidity</p>
    //                         <p className="text-xl">{data.main.humidity}%</p>
    //                     </div>
                    
    //             </div>

    //         </div>
        
    // )

}
export default Main