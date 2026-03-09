import express from 'express'
const router = express.Router()
import weatherAPI from '../controllers/weatherCon.js'

router.get('/', weatherAPI)

export default router