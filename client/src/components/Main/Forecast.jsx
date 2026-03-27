import getForecast from '../../utils/getForecast.js'
import { useState, useEffect } from 'react'

function Forecast({userPositionWeather, searchData}){
    const data = searchData ? searchData : userPositionWeather
    //API returned data
    const [forecastData, setForecastData] = useState(null)
    console.log(`Forecast 1`, data)

    useEffect(()=>{

        async function fetch() {
            await getForecast(data, setForecastData)
            // console.log('console useEffect', forecastData)
        }

        if(data) fetch()
        

    },[data])

    return(
        <div className="w-full border border-slate-700 p-2 m-2 rounded-lg text-slate-400"
            style={{background:"rgba(255, 255, 255, 0.06)"}}
        >
            <h1>Next hours</h1>

        {forecastData &&
        
            <div className='flex justify-left'>
                {forecastData.list.slice(0, 6).map((e,i)=>{
                    const hour = i === 0 ? 'Now' : new Date(e.dt * 1000).toLocaleTimeString("pt-BR",{
                        hour: "2-digit",
                        minute: "2-digit",
                    })
                    

                    return(

                        <div key={e.dt} 
                            className='flex flex-col p-2 m-2 items-center rounded-lg border border-slate-600'
                            style={{background:"rgba(255, 255, 255, 0.07)"}}
                        >
                            <h2 className="text-sm mb-[-18px]">{hour}</h2>
                            <img src={`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`} alt="forecast-img"  className="w-20" />
                            <p className="mt-[-10px]">{(e.main.temp).toFixed()}°</p>
                        </div>

                    )
                    
                })

                }
            
            
            </div>    
        
        
        }

        </div>
    )
}

export default Forecast