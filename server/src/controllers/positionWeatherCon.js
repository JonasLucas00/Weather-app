
async function positionWeatherCon(req,res){
    
    const {lat,lon} = req.query

    if(!lat || !lon) {
      return res.status(400).json({error:"lat and lon is required"})
    }
    
   console.log(`Server ${lat} and ${lon}`)

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4858cc40b15097fe38f3ec11e3d78452&units=metric`)
    
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