async function getForecast(data, setForecastData){
    const {lat, lon} = data.coord
    
    try {
        const response = await fetch(`http://localhost:3000/weather/forecast?lat=${lat}&lon=${lon}`)

        if(!response.ok){
            console.log('response error at getForecast:', response.status)
            return
        }
        const fetchedData = await response.json()
        
        setForecastData(fetchedData)
        return
    } catch (error) {
        console.log('htpp error at getForecast:', error)
        return
    }
}

export default getForecast