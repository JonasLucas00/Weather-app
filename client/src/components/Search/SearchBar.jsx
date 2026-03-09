import { useState } from "react"

export default function SearchBar({setWeather}){
    const [city, setCity] = useState('')
    

        async function fetchData() {
            try {
                
                if(!city){
                    console.log('Fill in all fields')
                    return

                } 

            
                const response = await fetch(`http://localhost:3000/weather?city=${city}`)
                if(!response.ok){
                    console.log(`Response ERRor: ${response.status}`)
                    return
                }
    
                const data = await response.json()
                console.log(data)
                setWeather(data)
                
    
            } catch (error) {
                console.log(`HTTP ERRor ${error}`)
                return
            }
        }
    

    return(<div className="bg-red-300 p-2 m-2 w-[800px] h-[500px] rounded-xl">
        <input 
            type="text"
            className="bg-neutral-200"
            placeholder="Insert country"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
        />
        
         <button
            className="p-2 m-2 bg-neutral-300 cursor-pointer"
            onClick={()=>{
                console.log(city)
                fetchData()
            }}
         >Click me
         </button>

    </div>)
}