import windCalc from "../../utils/windCalc"

function Wind({userPositionWeather, searchData}){
    
    const windData = windCalc(searchData ? searchData : userPositionWeather)
    
    return(
        <div className=" flex flex-col text-white w-full justify-around rounded-lg border border-slate-700 mt-4 p-2  roboto-condensed"
            style={{background: "rgba(255, 255, 255, 0.06)"}}
        >
            <p className="text-slate-300">Wind</p>
            <p className="text-2xl font-bold text-slate-300">{windData.windSpeed}</p>
            <div className="bg-gray-700 rounded-full">
                <div className={`bg-sky-400 rounded-full h-2`}
                    style={{
                        width: windData.percentage,}}
                >
                </div>

            </div>
            <div className="flex justify-between text-slate-300">
                <p>0</p>
                <p>20</p>
                <p>40</p>
                <p>50</p>
            </div>
        </div>
    )
}

export default Wind