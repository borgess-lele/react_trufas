import api from '../plugins/api.js'

class ComboService {
  async getAllCombos() {
    const response = await api.get('/combo/')
    return response.data
  }
  async saveCombo(combo) {
    const response = await api.post('/combo/', combo)
    return response.data
  }
  async deleteCombo(combo) {
    const response = await api.delete(`/combo/${combo.id}/`)
    return response.data
  }
}

export default new ComboService()