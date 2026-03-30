async function getData(city){
    

    try {
        const response = await fetch(`http://localhost:3000/weather/search?city=${city}`)

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