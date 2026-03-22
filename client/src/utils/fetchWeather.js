async function getData(city){
    const testPhrase = 'Hello there'
    // if(!city){
    //     alert('Fill in the fild')
    //     return
    // }

    try {
        const response = await fetch(`http://localhost:3000/weather/search?phrase=${testPhrase}`)

        if(!response.ok){
            console.log(`Res STATUS: ${response.status}`)
            return
        }

        const data =  await response.json()
        console.log(data);
        return
    } catch (error) {
        console.log(`Error: ${error}`)
        return
    }
}

export default getData