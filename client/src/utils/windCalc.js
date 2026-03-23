function windCalc(userPositionWeather){
    const maxWind = 60
    const windSpeed = userPositionWeather.wind.speed * 3.6 // converte m/s para km/h
    const percentage = Math.min((windSpeed/maxWind) * 100, 100).toFixed()
    const windData = {windSpeed: windSpeed.toFixed(1) + ' km/h', percentage: percentage + '%'}
    return windData
}
export default windCalc