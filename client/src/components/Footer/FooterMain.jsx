

function Footer(){
    return(
        <div className="w-full h-16 flex items-center justify-between text-slate-500 text-sm">
            <p>
                Data from <span className="font-bold">OpenWeather </span>
                and
                <span className="font-bold"> OpenMeteo API</span></p>
            <div className="flex gap-2 items-center">
                <p className="p-[6px] my-2">Created by <span className="font-bold">Lucas Jonas</span></p>
                <p className="p-[6px] my-2 text-lg rounded-xl border border-slate-700 bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.06)] transition-all hover:translate-y-[-2px]"

                ><a href="https://github.com/JonasLucas00" target="__blank"  className="flex justify-center items-center"><i className="fa-brands fa-github text-2xl mx-2"></i>GitHub</a></p>
            </div>
        </div>
    )
}

export default Footer