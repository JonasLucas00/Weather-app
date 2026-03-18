import { useEffect } from "react"

function Header({userPosition}) {

    function defineBG(){
        
        

    }
    
    useEffect(()=>{
        if(userPosition){
            defineBG()
        }
    },[userPosition])
    
    
    return (<div className="flex bg-sky-500 border-b border-white/10 justify-between p-4 items-center m-4 rounded-xl">

        {userPosition?
            <div className="">
                <p className="text-xl">{userPosition.name}</p>
                <p className="text-3xl">{userPosition.main.temp} °</p>
                <p className="">{userPosition.weather[0].description}</p>

            </div>
            
             : 
            <button className="text-xl text-white">Weather</button>
        }

        {userPosition &&
            
            <div className="flex flex-col items-center">
                <input type="text" className="bg-white rounded-xl text-xl" placeholder="Search Weather"/>
                <img src={`https://openweathermap.org/img/wn/${userPosition.weather[0].icon}@2x.png`}
                alt="weather icon" 
                className="w-20 h-20 ml-[150px]"
                />
            </div>
        }
    </div>

    )
}

export default Header