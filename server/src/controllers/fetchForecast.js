import dotenv from "dotenv"
dotenv.config()

async function fetchForecast(req,res){
    const {lat,lon} = req.query
    
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}&units=metric`)
        

        if(!response.ok){
            console.log('response error at fetchForecast:', response.status)
            return
        }
        const fetchedData = await response.json()
    
        return res.json(fetchedData)

    } catch (error) {
        console.log('htpp error at fetchForecast:', error)
        return
    }
}

export default fetchForecast