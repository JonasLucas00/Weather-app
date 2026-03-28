import getNextDayMeteo from '../../utils/getNextDaysMeteo.js'
import { useState, useEffect } from 'react'


export function NextDays({userPositionWeather, searchData}){
    const data = searchData ? searchData : userPositionWeather
    const [fiveDays, setFiveDays] = useState(null)
    const {lat,lon} = data.coord
    

    useEffect(()=>{

        if(!data) return

        async function fetch() {
            const result = await getNextDayMeteo(lat,lon)
            setFiveDays(result)
        }
        fetch()
        
    },[data])

    return(
        <div className="text-white w-full p-2 m-2 rounded-lg border border-slate-700 justify-center roboto-condensed"
            style={{background:"rgba(255, 255, 255, 0.06)"}}
        >
            <div className="flex justify-between w-full">
                <h1  className="text-xl">Next 5 days</h1>
                <div className='flex text-lg'>
                    <h1  className="mx-2">max</h1>
                    <h1  className="mx-2">min</h1>
                </div>

            </div>

            { fiveDays &&
                (fiveDays.daily.time).map((date, i)=>{
                    const [year, month, day] = date.split("-")
                    const formatDate =  new Date(year, month - 1, day).toLocaleDateString("pt-BR",{
                        weekday: "short",
                    }).replace('.','')
                    
                    const max = fiveDays.daily.temperature_2m_max[i].toFixed()
                    const min = fiveDays.daily.temperature_2m_min[i].toFixed()
                    return(
                        <>

                            <div key={i} 
                                className='flex justify-between w-full hover:-translate-y-1 transition-transform duaration-200'>
                                 <div className="flex flex-col mt-4">
                                     <p>{formatDate}</p>
                                 </div>
                                     

                                 <div className="flex mt-4 gap-2">
                                     <p className="mx-2">{max}°</p>
                                     
                                     <p className="mx-2 text-slate-400">{min}°</p>
                                 </div>
                                
                            </div>

                            {i !== fiveDays.daily.time.length - 1 && (
                                <div  className="w-full h-[1px] bg-white/10"></div>
                            )}
                            
                        </>
                    )
                })


            


            }
            
        </div>
    )
}