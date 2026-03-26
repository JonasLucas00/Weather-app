import { useState, useEffect } from "react";
import getUv from "../../utils/fetchUV";
import uvCalc from "../../utils/uvCalc";

function UV ({userPositionWeather}){
    //This is feched data getUv()
    const [uv, setUv] = useState(null)
    //That's the data used in the uvCalc(), returns an object {level: 'low', spf:'opcional'}
    const [uvData, setUvData] = useState(null)
    
    
    useEffect(()=>{
        async function fetchUv() {
            await getUv(userPositionWeather,setUv)
        }
        fetchUv()
        
        
    }, [userPositionWeather])
    console.log('Uv Component',uv)

    useEffect(()=>{
        if(uv !== null){
            uvCalc(uv, setUvData)
        }

    },[uv])
    
    return(
        <div className="text-slate-300 w-full p-2 m-2 rounded-lg flex flex-col justify-center border border-slate-700"
            style={{background: "rgba(255, 255, 255, 0.06)"}}
        >
            
            <h1 className="p-2">UV indice</h1>

            <div className="flex gap-2 items-center">
                
                {/* Isso funciona? */}
                {/* <p className="bg-orange-400 p-2 m-2 00 text-slate-900 rounded-lg">{uvData ? uvData.current_units.uv_index : 'Valor UV'}</p> */}

                {uv && uvData &&
                
                    <p className="bg-orange-400 p-2 m-2 00 text-slate-900 rounded-lg min-w-24 text-center font-bold">UV {uv ? uv.current.uv_index : 'Valor UV'}</p>

                }
                {uv && uvData &&
                
                    <div className="flex flex-col justify-center items-left">
                        <p className="font-bold">{uvData.level}</p>
                        <p className="text-sm">{uvData.spf}</p>
                    </div> 

                }
            </div>
        </div>
    )
}

export default UV