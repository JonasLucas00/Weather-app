import { useEffect } from "react";

function UserPosition() {
    let lat
    let lon
    useEffect (()=>{
        navigator.geolocation.getCurrentPosition(async (position)=>{
           lat = position.coords.latitude;
           lon = position.coords.longitude;

            // console.log(lat,lon)
            positionWeather(lat,lon)
            },
            (error) =>{
                console.log("UserPosition Error:", error);

                if (error.code === 1) {
                    console.log("Usuário negou a localização");
                    return
                }

                if (error.code === 2) {
                    console.log("Localização indisponível");
                    return
                }

                if (error.code === 3) {
                    console.log("Tempo esgotado");
                    return
                }
            }
            
        )   

        async function positionWeather(lat,lon) {
            console.log(lat,lon)
            try {
                const response = await fetch(`http://localhost:3000/weather?lat=${lat}&lon=${lon}`)

                if(!response.ok){
                    console.log(`Status: ${response.status}`)
                    return
                }
                const data = await response.json()
                console.log(data)
            } catch (error) {
                console.log(`HTTP error: ${error}`)
                return
            }
        }
        
        
    },[])

}

export default UserPosition;