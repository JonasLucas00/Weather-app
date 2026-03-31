async function getUv(whichUvData, setUv){
    const {lat, lon} = whichUvData.coord
    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/weather/uv?lat=${lat}&lon=${lon}`)

        if(!response.ok){
            console.error('Failed to fetch UV data:', response.status);
            return
        }
        const data = await response.json()

        setUv(data)
        return data
    } catch (error) {
        console.error('UV fetch error:', error.message);
        return
    }
}

export default getUv