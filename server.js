import express from 'express'
import ourServicesRoutes from './src/routes/our-services.routes.js'
import cors from 'cors' // ← Importar cors

const app = express()
const PORT = 3001
app.use(express.json()) // para receber JSON no body
app.use(
    cors({
        origin: 'http://localhost:3000', // só permite seu frontend
        methods: ['GET', 'POST'],
        credentials: true,
    })
)
// Rotas
app.use('/api/question', ourServicesRoutes)

// Start server
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
