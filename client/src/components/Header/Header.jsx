import { useEffect } from "react"
import { useState  } from "react"
import headBG from "../../utils/headerBgColor.js"
import SearchInput from "../Header/SearchInput.jsx"


function Header({userPosition, setData, data}) {
    const [headColorGrad, setHeadColorGrad] = useState("linear-gradient(135deg, #133ba8, #0e7eb3)") 
    const whereWeather = data ? data : userPosition
    console.log(`Header whereData`,whereWeather)
    

    useEffect(()=>{
        if(whereWeather){
            let headColor = headBG(whereWeather.weather[0].main)
            setHeadColorGrad(headColor)
            
        }
    },[userPosition,data])
    
    
    return (<header className="fixed top-0 left-0 w-full z-50 mb-4">
            <div className={`flex border-b border-white/10 justify-between p-4 items-center m-4 rounded-xl text-white shadow-2xl`}
                        style={{background: headColorGrad}}
                    >

                {whereWeather?
                    <div className="text-slate-200">
                        <p className="text-xl">{whereWeather.name}</p>
                        <p className="text-3xl font-semibold">{whereWeather.main.temp.toFixed()}°</p>
                        <p className="">{whereWeather.weather[0].description}</p>

                    </div>
                    
                    : 
                    <button className="text-xl text-white">Weather</button>
                }

                    <div className="flex flex-col items-center">
                        <SearchInput setData = {setData}/>
                        
                        
                        
                        {whereWeather &&
                            
                            <img src={`https://openweathermap.org/img/wn/${whereWeather.weather[0].icon}@2x.png`}
                                alt="weather icon" 
                                className="w-20 h-20 ml-[150px]"
                            />
                        }
                    </div>

                    
            </div>

            
    </header>
    
    )
}

export default Header