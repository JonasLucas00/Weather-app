import dotenv from 'dotenv'
dotenv.config()

async function positionWeatherCon(req,res){
    console.log('Chegou aqui')
    const {lat,lon} = req.query

    if(!lat || !lon) {
      return res.status(400).json({error:"lat and lon is required"})
    }
    
   console.log(`Server ${lat} and ${lon}`)

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}&units=metric`)
      // const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=-23.7928448&lon=-46.8156416&appid=1db8704c5a8427a03b6b99659ae8b3d5&units=metric")
    
      if(!response.ok){
        console.log(`Response ERRor: ${response.status}`)
        return
      }

      const data = await response.json();
      console.log(data)
      return res.json(data)
    
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Erro ao buscar clima"})
        
    }
    
}

export default positionWeatherCon