import api from '../plugins/api.js'

class SaborService {
  async getAllSabors() {
    const response = await api.get('/sabor/')
    return response.data
  }
  async saveSabor(sabor){
    const response = await api.post('/sabor/', sabor)
    return response.data
  }
  async deleteSabor(sabor) {
    const response = await api.delete(`/sabor/${sabor.id}/`)
    return response.data
  }
}

export default new SaborService()