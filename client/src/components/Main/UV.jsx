import { useState, useEffect } from "react";
import getUv from "../../utils/fetchUV";
import uvCalc from "../../utils/uvCalc";

function UV ({userPositionWeather,data}){
    //This is feched data getUv()
    const [uv, setUv] = useState(null)
    //That's the data used in the uvCalc(), returns an object {level: 'low', spf:'opcional'}
    const [uvData, setUvData] = useState(null)
    const whichUvData = data ? data : userPositionWeather
    
    
    //Fetch the UV data from the server
    useEffect(()=>{
        async function fetchUv() {
            await getUv(whichUvData,setUv)
        }
        fetchUv()
        
        
    }, [userPositionWeather, data])
    
    // Returns the UV data to be displayed
    useEffect(()=>{
        
        if(uv !== null){
            uvCalc(uv, setUvData)
        }

    },[uv])
    
    return(
        <div className="text-slate-300 w-full p-2 my-4 rounded-lg flex flex-col justify-center border border-slate-700 roboto-condensed"
            style={{background: "rgba(255, 255, 255, 0.06)"}}
        >
            
            <h1 className="p-2">UV index</h1>

            <div className="flex gap-2 items-center ">
                

                {uv && uvData &&
                
                    <p className="bg-orange-400 p-2 m-2 00 text-slate-900 rounded-lg min-w-24 text-center font-bold">UV {uv ? uv.current.uv_index : 'Valor UV'}</p>

                }
                {uv && uvData &&
                
                    <div className="flex flex-col justify-center items-left">
                        <p className="font-bold">{uvData.level}</p>
                        <p className="text-sm">Use sunscreen SPF {uvData.spf}</p>
                    </div> 

                }
            </div>
        </div>
    )
}

export default UV