import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL

// VERIFICAÇÃO
console.log('API_URL:', API_URL)

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
