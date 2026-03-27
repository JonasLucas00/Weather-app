async function getNextDaysMeteo(lat,lon){
     
    // console.log('getNextDaysMeteo 2',lat,lon)
    try {
        const response = await fetch(`http://localhost:3000/weather/days?lat=${lat}&lon=${lon}`)

        if(!response.ok){
            console.log('response error at getForecast:', response.status)
            return
        }
        const data = await response.json()
        console.log('feched getNextDaysMeteo: ', data)
        return data
    } catch (error) {
        console.log('htpp error at getForecast:', error)
        return
    }
}

export default getNextDaysMeteo