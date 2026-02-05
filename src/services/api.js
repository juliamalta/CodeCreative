import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL

// VERIFICAÇÃO
if (!API_URL) {
    console.warn(' NEXT_PUBLIC_API_URL não definida')
}

export const api = async (question) => {
    try {
        const response = await axios.post(`${API_URL}/question/perguntar`, {
            question,
        })

        return response.data.resposta
    } catch (err) {
        console.error('Erro ao buscar resposta', err)
        throw err
    }
}
