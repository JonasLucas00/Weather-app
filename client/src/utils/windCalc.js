function windCalc(windParameter){
    const maxWind = 60
    const windSpeed = windParameter.wind.speed 
    const percentage = Math.min((windSpeed/maxWind) * 100, 100).toFixed()
    const windData = {windSpeed: windSpeed.toFixed(1) + ' km/h', percentage: percentage + '%'}
    return windData
}
export default windCalc