import getNextDayMeteo from '../../utils/getNextDaysMeteo.js'
import { useState, useEffect } from 'react'


export function NextDays({userPositionWeather, searchData}){
    const data = searchData ? searchData : userPositionWeather
    // console.log(`NextDays: `, data)
    const {lat,lon} = data.coord
    // console.log(lat,lon)

    useEffect(()=>{

        if(data) getNextDayMeteo(lat,lon)
        
    },[data])

    return(
        <div className="text-white">
            NextDays
        </div>
    )
}