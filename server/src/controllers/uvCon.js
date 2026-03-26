import dotenv from 'dotenv'
dotenv.config()

async function uvController(req, res){
    
    const {lat, lon} = req.query

    if(!lat || !lon){
        console.log('Lat and log not received')
        return
    }
    console.log(`Uv controller open-meteo: `,lat,lon)
    
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,uv_index`)
        
        
        if(!response.ok){
            console.log('response error uvCon:', response.status);
            return
        }

        const data = await response.json()
        console.log(data)
        return res.json(data)
    } catch (error) {
        console.log('http error uvCon:', error);
        return
    }
}

export default uvController

