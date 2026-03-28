
async function fetchNextDays(req,res){
    const {lat,lon} = req.query

    if(!lat || !lon) {
        console.log('Missing parameters at fetchNextDays')
    }
    
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`)
        

        if(!response.ok){
            console.log('response error at fetchNextDays:', response.status)
            return
        }
        const data = await response.json()
        console.log(`fetchNextDays`, data)
        return res.json(data)

    } catch (error) {
        console.log('htpp error at fetchNextDays:', error)
        return
    }
}

export default fetchNextDays