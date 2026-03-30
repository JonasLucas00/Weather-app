import { useState } from "react"

export default function SearchBar({setWeather}){
    const [city, setCity] = useState('')
    

        async function fetchData() {
            try {
                
                if(!city){
                    console.error('Please enter a city name');
                    return

                } 

            
                const response = await fetch(`http://localhost:3000/weather?city=${city}`)
                if(!response.ok){
                    console.error('Failed to fetch weather:', response.status);
                    return
                }
    
                const data = await response.json()
                setWeather(data)
    
            } catch (error) {
                console.error('Search error:', error.message);
                return
            }
        }
    

    return(<div className=" p-8 m-2 max-h-screen rounded-xl flex flex-col items-center mt-[200px]">

        <div className="flex flex-col bg-white/5 border border-white/10 rounded-2xl shadow-xl w-[700px] py-[100px] px-8 m-4 items-center ">

            <i className="fa-solid fa-cloud-sun text-6xl text-white/60 mb-4" />
            <h1 className="text-4xl mb-8 font-semibold text-white">Search weather</h1>
            
            <div className="flex gap-4 w-full justify-center">
                <input 
                    type="text"
                    className=" flex-1 h-12 border-white/20 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-sky-400 text-xl px-2 m-2 rounded-lg placeholder-white/40"
                    placeholder="Insert country or city"
                    value={city}
                    onChange={(e)=>setCity(e.target.value)}
                />
                
                <button
                    className="px-6 m-2 bg-sky-500 text-white hover:bg-sky-400 transition duration-200 cursor-pointer rounded-lg shadow-md"
                    onClick={()=>{
                        fetchData()
                    }}
                >Search
                </button>

            </div>
        </div>

    </div>)

//     return (
//     <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
//       style={{
//         background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #0369a1 100%)',
//       }}
//     >
//       {/* Decorative blobs */}
//       <div className="absolute top-[-80px] left-[-80px] w-[340px] h-[340px] rounded-full opacity-20 blur-3xl"
//         style={{ background: 'radial-gradient(circle, #38bdf8, transparent)' }} />
//       <div className="absolute bottom-[-60px] right-[-60px] w-[300px] h-[300px] rounded-full opacity-20 blur-3xl"
//         style={{ background: 'radial-gradient(circle, #818cf8, transparent)' }} />

//       {/* Card */}
//       <div
//         className="relative z-10 flex flex-col items-center px-12 py-16 rounded-3xl shadow-2xl"
//         style={{
//           background: 'rgba(255,255,255,0.07)',
//           backdropFilter: 'blur(24px)',
//           border: '1px solid rgba(255,255,255,0.15)',
//           minWidth: '480px',
//           maxWidth: '600px',
//           width: '100%',
//         }}
//       >
//         {/* Icon */}
//         <div className="mb-4 text-sky-300 text-5xl drop-shadow-lg">
//           <i className="fa-solid fa-cloud-sun" />
//         </div>

//         {/* Title */}
//         <h1
//           className="text-white text-4xl font-bold tracking-tight mb-2"
//           style={{ fontFamily: "'Sora', 'DM Sans', sans-serif", letterSpacing: '-0.02em' }}
//         >
//           Weather Search
//         </h1>
//         <p className="text-sky-300 text-sm mb-10 tracking-widest uppercase font-medium">
//           Real-time forecast
//         </p>

//         {/* Input Row */}
//         <div className="flex w-full gap-3">
//           <input
//             type="text"
//             className="flex-1 h-13 px-5 py-3 rounded-2xl text-white text-base font-medium placeholder-sky-300/60 focus:outline-none focus:ring-2 focus:ring-sky-400/60 transition-all"
//             style={{
//               background: 'rgba(255,255,255,0.1)',
//               border: '1px solid rgba(255,255,255,0.18)',
//               backdropFilter: 'blur(8px)',
//             }}
//             placeholder="Enter city name..."
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             onKeyDown={(e) => e.key === 'Enter' && fetchData()}
//           />

//           <button
//             className="px-7 py-3 rounded-2xl font-semibold text-white text-base transition-all duration-200 active:scale-95 hover:brightness-110 shadow-lg cursor-pointer"
//             style={{
//               background: 'linear-gradient(135deg, #38bdf8, #0284c7)',
//               boxShadow: '0 4px 24px rgba(56,189,248,0.35)',
//             }}
//             onClick={() => {
//               console.log(city)
//               fetchData()
//             }}
//           >
//             <i className="fa-solid fa-magnifying-glass mr-2" />
//             Search
//           </button>
//         </div>
//       </div>
//     </div>
//   )

}