async function getForecast(data, setForecastData){
    const {lat, lon} = data.coord
    
    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/weather/forecast?lat=${lat}&lon=${lon}`)

        if(!response.ok){
            console.error('Failed to fetch forecast:', response.status);
            return
        }
        const fetchedData = await response.json()
        
        setForecastData(fetchedData)
        return
    } catch (error) {
        console.error('Forecast fetch error:', error.message);
        return
    }
}

export default getForecast