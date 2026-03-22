import express from 'express'
const router = express.Router()
import positionWeatherCon from '../controllers/positionWeatherCon.js'
import searchWeather from '../controllers/searchWeatherCon.js'

router.get('/position', positionWeatherCon)
router.get('/search', searchWeather)

export default router