
async function weatherAPI(req,res){
    const {city} = req.query
    console.log(city)

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d5ed564264c0c7b24775e60ebabfc2b&units=metric`)
    
      if(!response.ok){
        throw new Error(`Response ERRor: ${response.status}`)
      }

      const data = await response.json();
      console.log(data)
      return res.json(data)
    
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Erro ao buscar clima"})
        
    }
    
}

export default weatherAPI