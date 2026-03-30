async function getNextDaysMeteo(lat,lon){
     
    
    try {
        const response = await fetch(`http://localhost:3000/weather/days?lat=${lat}&lon=${lon}`)

        if(!response.ok){
            console.error('Failed to fetch next days forecast:', response.status);
            return
        }
        const data = await response.json()
        
        return data
    } catch (error) {
        console.error('Next days forecast fetch error:', error.message);
        return
    }
}

export default getNextDaysMeteo