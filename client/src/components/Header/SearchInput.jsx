import featchWeather from "../../utils/fetchWeather.js"

export default function SearchInput(){
    return(
        <div className="relative">

            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                <button className="cursor-pointer"
                    onClick={()=>{featchWeather()}}
                ><i className="fa-solid fa-magnifying-glass text-xl hover:text-slate-300"></i>
                </button>
            </span>

            <input
                type="text"
                placeholder="Search weather"
                className="pl-10 pr-4 py-2 rounded-full bg-transparent text-slate-200 border border-slate-200 outline-none"
            />
        </div>
    )
}

