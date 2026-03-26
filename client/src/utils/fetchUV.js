async function getUv(whichUvData, setUv){
    // console.log(`Which data `, whichUvData)
    const {lat, lon} = whichUvData.coord
    try {
        const response = await fetch(`http://localhost:3000/weather/uv?lat=${lat}&lon=${lon}`)

        if(!response.ok){
            console.log(`response error: ${response.status}`)
            return
        }
        const data = await response.json()
        // console.log(`fetch UV`, data)
        setUv(data)
        return data
    } catch (error) {
        console.log(`HTTP error: ${error}`)
        return
    }
}

export default getUv