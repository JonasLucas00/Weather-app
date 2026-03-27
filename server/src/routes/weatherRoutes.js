import express from 'express'
const router = express.Router()
import positionWeatherCon from '../controllers/positionWeatherCon.js'
import searchWeather from '../controllers/searchWeatherCon.js'
import uvController from '../controllers/uvCon.js'
import fetchForecast from '../controllers/fetchForecast.js'

router.get('/position', positionWeatherCon)
router.get('/search', searchWeather)
router.get('/uv', uvController )
router.get('/forecast', fetchForecast)

export default router