import axios from 'axios'

export const api = async (question) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'https://codecreative-5.onrender.com/api'
    console.log('API_URL dentro da função:', API_URL)
    if (!API_URL) {
        console.warn(' NEXT_PUBLIC_API_URL não definida')
        throw new Error('NEXT_PUBLIC_API_URL não definida')
    }

    try {
        const response = await axios.post(`${API_URL}/question/perguntar`, { question })
        return response.data.resposta
    } catch (err) {
        console.error('Erro ao buscar resposta', err)
        throw err
    }
}
