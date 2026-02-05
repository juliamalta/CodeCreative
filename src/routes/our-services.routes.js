import express from 'express'
import { ourServices } from '../controllers/our-services.js'

const router = express.Router()

// POST /api/perguntar
router.post('/perguntar', ourServices)

export default router
