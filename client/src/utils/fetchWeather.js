async function getData(city){
    
    if(!city){
        alert('Fill in the fild')
        return
    }

    try {
        const response = await fetch(`http://localhost:3000/weather/search?city=${city}`)

        if(!response.ok){
            console.log(`Res STATUS: ${response.status}`)
            return
        }

        const data =  await response.json()
        console.log(data);
        return data
    } catch (error) {
        console.log(`Error: ${error}`)
        return
    }
}

export default getData