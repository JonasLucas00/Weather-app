import dotenv from 'dotenv'
dotenv.config()

async function searchWeather(req,res){
    const {city} = req.query
    console.log(city)
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_KEY}`)
        
        if(!response.ok){
            console.log(`Response Error: ${response.status}`)
            return
        }

        const data = await response.json()
        console.log(data)
        return res.json(data)
    } catch (error) {
        console.log(`HTTP Error: ${error}`)
        return
    }
}

export default searchWeather