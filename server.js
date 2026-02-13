import cors from 'cors' // ← Importar cors
import express from 'express'

import ourServicesRoutes from './src/routes/our-services.routes.js'

const app = express()
const PORT = process.env.PORT || 3001
app.use(express.json()) // para receber JSON no body
app.use(
    cors({
        origin: [
            'http://localhost:3000',
            'https://codecreative-5.onrender.com', // troque pelo domínio real
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
// Rotas
app.use('/api/question', ourServicesRoutes)

// Start server
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
