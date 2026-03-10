function SearchResult({weather}) {

    if(!weather) return null

    return(
            <div className="g-white/5 border border-white/10 p-6 m-2 min-w-[900px] min-h-[500px] rounded-xl flex flex-col items-center shadow-2xl justify-center mb-8">
                    <h1 className="text-4xl mb-8 font-semibold text-white">
                        Today's weather forecast in {weather.name}
                    </h1>
                    
                <div className="grid grid-cols-2 gap-6 w-full">

                        <div className="bg-white/10 border border-white/10 p-4 rounded-xl text-center shadow-2xl-2xl text-white">
                                <p className="text-lg font-medium"><i className="fa-solid fa-temperature-three-quarters text-xl"></i> Temperature</p>
                                <p className="text-xl ">{weather.main.temp}°</p>
                        </div>
                            
                        <div className="bg-white/10 border border-white/10 p-4 rounded-xl text-center shadow-2xl text-white">
                                <p className="text-lg font-medium">Feels like</p>
                                <p className="text-xl">{weather.main.feels_like}°</p>
                        </div>
                            
                        <div className="bg-white/10 border border-white/10 p-4 rounded-xl text-center shadow-2xl text-white">
                            <p className="text-lg font-medium">Wind</p>
                            <p className="text-xl">{weather.wind.speed}</p>
                        </div>
                            
                        <div className="bg-white/10 border border-white/10 p-4 rounded-xl text-center shadow-2xl text-white">
                            <p className="text-lg font-medium">humidity</p>
                            <p className="text-xl">{weather.main.humidity}%</p>
                        </div>
                    
                </div>

            </div>
        
    )
}

export default SearchResult

// function SearchResult({ weather }) {
//   if (!weather) return null

//   const stats = [
//     {
//       icon: 'fa-temperature-three-quarters',
//       label: 'Temperature',
//       value: `${weather.main.temp}°`,
//       color: '#f97316',
//       bg: 'rgba(249,115,22,0.12)',
//     },
//     {
//       icon: 'fa-wind',
//       label: 'Feels Like',
//       value: `${weather.main.feels_like}°`,
//       color: '#818cf8',
//       bg: 'rgba(129,140,248,0.12)',
//     },
//     {
//       icon: 'fa-gauge-high',
//       label: 'Wind Speed',
//       value: `${weather.wind.speed} m/s`,
//       color: '#34d399',
//       bg: 'rgba(52,211,153,0.12)',
//     },
//     {
//       icon: 'fa-droplet',
//       label: 'Humidity',
//       value: `${weather.main.humidity}%`,
//       color: '#38bdf8',
//       bg: 'rgba(56,189,248,0.12)',
//     },
//   ]

//   return (
//     <div
//       className="relative overflow-hidden rounded-3xl p-8 shadow-2xl"
//       style={{
//         background: 'rgba(255,255,255,0.07)',
//         backdropFilter: 'blur(24px)',
//         border: '1px solid rgba(255,255,255,0.15)',
//         minWidth: '480px',
//         maxWidth: '600px',
//         width: '100%',
//       }}
//     >
//       {/* Glow accent */}
//       <div
//         className="absolute top-0 right-0 w-48 h-48 opacity-20 blur-3xl pointer-events-none"
//         style={{ background: 'radial-gradient(circle, #38bdf8, transparent)' }}
//       />

//       {/* Header */}
//       <div className="flex flex-col items-center mb-8">
//         <div className="text-sky-300 text-4xl mb-3">
//           <i className="fa-solid fa-location-dot" />
//         </div>
//         <h1
//           className="text-white text-3xl font-bold text-center"
//           style={{ fontFamily: "'Sora', 'DM Sans', sans-serif", letterSpacing: '-0.02em' }}
//         >
//           {weather.name}
//         </h1>
//         <p className="text-sky-300/70 text-xs tracking-widest uppercase mt-1 font-medium">
//           Today's Forecast
//         </p>
//       </div>

//       {/* Divider */}
//       <div className="w-full h-px mb-8" style={{ background: 'rgba(255,255,255,0.1)' }} />

//       {/* Stats Grid */}
//       <div className="grid grid-cols-2 gap-4">
//         {stats.map((stat) => (
//           <div
//             key={stat.label}
//             className="flex flex-col items-center justify-center py-5 px-4 rounded-2xl transition-transform duration-200 hover:scale-105"
//             style={{
//               background: stat.bg,
//               border: `1px solid ${stat.color}30`,
//             }}
//           >
//             <i
//               className={`fa-solid ${stat.icon} text-2xl mb-2`}
//               style={{ color: stat.color }}
//             />
//             <p className="text-white/50 text-xs uppercase tracking-widest mb-1 font-medium">
//               {stat.label}
//             </p>
//             <p
//               className="text-white text-2xl font-bold"
//               style={{ fontFamily: "'Sora', sans-serif" }}
//             >
//               {stat.value}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default SearchResult