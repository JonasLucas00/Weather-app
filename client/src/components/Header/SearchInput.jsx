import getData from "../../utils/fetchWeather.js"
import { useState } from "react"

export default function SearchInput({setData}){
    const [city, setCity] = useState('')
    

    return(
        <div className="relative">

            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                <button className="cursor-pointer"
                    onClick={async ()=>{
                        if(!city){
                            alert('Fill in the city or country')
                            return
                        }
                        setData(await getData(city))}}
                ><i className="fa-solid fa-magnifying-glass text-xl hover:text-slate-300"></i>
                </button>
            </span>

            <input
                type="text"
                placeholder="Search weather"
                className="pl-10 pr-4 py-2 rounded-full bg-transparent text-slate-100 border border-slate-500 outline-none shadow-xl"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
        </div>
    )
}

