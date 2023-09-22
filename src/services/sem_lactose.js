import api from '../plugins/api.js'

class Sem_LactoseService {
  async getAllSem_Lactoses() {
    const response = await api.get('/sem_lactose/')
    return response.data
  }
  async saveSem_Lactose(sem_lactose) {
    const response = await api.post('/sem_lactose/', sem_lactose)
    return response.data
  }
  async deleteSem_Lactose(sem_lactose) {
    const response = await api.delete(`/sem_lactose/${sem_lactose.id}/`)
    return response.data
  }
}

export default new Sem_LactoseService()