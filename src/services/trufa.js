import api from '../plugins/api.js'

class TrufaService {
  async getAllTrufas() {
    const response = await api.get('/trufa/')
    return response.data
  }
  async saveTrufa(trufa) {
    const response = await api.post('/trufa/', trufa)
    return response.data
  }
  async deleteTrufa(trufa) {
    const response = await api.delete(`/trufa/${trufa.id}/`)
    return response.data
  }
}

export default new TrufaService()