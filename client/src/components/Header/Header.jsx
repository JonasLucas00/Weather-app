import { useEffect } from "react"
import { useState  } from "react"
// import { FiSearch } from "react-icons/fi";

function Header({userPosition}) {
    const [headColorGrad, setHeadColorGrad] = useState("linear-gradient(135deg, #1d4ed8, #0ea5e9)") 
    const [appColorGrad, setAppColorGrad] = useState('bg-gradient-to-b from-blue-900 to-slate-300') 

    function headBG(condition){
        const defaultGradient = "linear-gradient(135deg, #1d4ed8, #0ea5e9)";

        const gradients = {
            Clear:        "linear-gradient(135deg, #1d4ed8, #0ea5e9, #38bdf8)",
            Clouds:       "linear-gradient(135deg, #475569, #64748b, #94a3b8)",
            Rain:         "linear-gradient(135deg, #1e3a5f, #1e40af, #334155)",
            Drizzle:      "linear-gradient(135deg, #1e3a5f, #2563eb, #475569)",
            Thunderstorm: "linear-gradient(135deg, #1a1a2e, #312e81, #1e3a5f)",
            Snow:         "linear-gradient(135deg, #b0c4de, #dbeafe, #e0f2fe)",
            Mist:         "linear-gradient(135deg, #78909c, #90a4ae, #b0bec5)",
            Fog:          "linear-gradient(135deg, #78909c, #90a4ae, #b0bec5)",
            Haze:         "linear-gradient(135deg, #92400e, #b45309, #d97706)",
        };
        console.log(gradients[condition])
        console.log(condition)
        return gradients[condition] || defaultGradient
    }

    
    
    useEffect(()=>{
        if(userPosition){
            let headColor = headBG(userPosition.weather[0].main)
            setHeadColorGrad(headColor)
            
        }
    },[userPosition])
    
    
    return (<div className={`flex border-b border-white/10 justify-between p-4 items-center m-4 rounded-xl text-white`}
                style={{background: headColorGrad}}
            >

        {userPosition?
            <div className="font-semibold">
                <p className="text-xl">{userPosition.name}</p>
                <p className="text-3xl">{userPosition.main.temp} °</p>
                <p className="">{userPosition.weather[0].description}</p>

            </div>
            
             : 
            <button className="text-xl text-white">Weather</button>
        }

            <div className="flex flex-col items-center">
                <div className="relative">

                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>

                    <input
                        type="text"
                        placeholder="Search weather"
                        className="pl-10 pr-4 py-2 rounded-xl bg-white text-black"
                    />

                </div>
                {userPosition &&
                    
                    <img src={`https://openweathermap.org/img/wn/${userPosition.weather[0].icon}@2x.png`}
                        alt="weather icon" 
                        className="w-20 h-20 ml-[150px]"
                    />
                }
            </div>
    </div>

    )
}

export default Header