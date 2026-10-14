import cors from 'cors'
import express from 'express'

import ourServicesRoutes from './src/routes/our-services.routes.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(
    cors({
        origin: [
            'http://localhost:3000',
            'https://codecreative-5.onrender.com',
            'https://codecreative.com.br',
            'https://www.codecreative.com.br',
        ],
        methods: ['GET', 'POST'],
        credentials: true,
    })
)

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' })
})

app.use('/api/question', ourServicesRoutes)

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
