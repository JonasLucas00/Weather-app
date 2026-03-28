async function getData(city){
    

    try {
        const response = await fetch(`http://localhost:3000/weather/search?city=${city}`)

        if(!response.ok){
            console.log(`Res STATUS: ${response.status}`)
            return
        }

        const data =  await response.json()
    
        return data
    } catch (error) {
        console.log(`Error: ${error}`)
        return
    }
}

export default getData