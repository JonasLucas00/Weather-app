async function getData(city){
    

    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/weather/search?city=${city}`)

        if(!response.ok){
            console.error('Failed to fetch weather data:', response.status);
            return
        }

        const data =  await response.json()
    
        return data
    } catch (error) {
        console.error('Weather fetch error:', error.message);
        return
    }
}

export default getData