import { useEffect } from "react";

function UserPosition({setUserPosition}) {
    let lat
    let lon
    useEffect (()=>{
        navigator.geolocation.getCurrentPosition(async (position)=>{
           lat = position.coords.latitude;
           lon = position.coords.longitude;

            
            positionWeather(lat,lon)
            },
            (error) =>{
                console.error('Geolocation error:', error.code);
                if (error.code === 1) {
                    return
                }

                if (error.code === 2) {
                    return
                }

                if (error.code === 3) {
                    return
                }
            }
            
        )   

        async function positionWeather(lat,lon) {
            
            try {
                const response = await fetch(`http://localhost:3000/weather/position?lat=${lat}&lon=${lon}`)

                if(!response.ok){
                    console.error('Failed to fetch position weather:', response.status);
                    return
                }
                const data = await response.json()
                
                setUserPosition(data)
                return
            } catch (error) {
                console.error('Position weather fetch error:', error.message);
                return
            }
        }
        
        
    },[])

}

export default UserPosition;