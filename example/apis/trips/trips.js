'use strict'

const { api, config } = require('../route_config')

module.exports = ({
  // criar uma viagem com o fleet engine e retorna a viagem
  create: async (data) => {
    const { data, status } = await api.post('/v1/{parent=providers/*}/trips', data, config)

    return { data, status }
  },

  // retorna informaçòes sobre uma viagem específica
  get: async (trip) => {
    const { data, status } = await api.get('/v1/{name=providers/*/trips/*}', config)

    return { data, status }
  },

  // retorna todas as viagens de um veículo específico
  search: async () => {
    const { data, status } = await api.post('/v1/{parent=providers/*}/trips:search', data, config)

    return { data, status }
  },

  // atualiza dados de viagem
  update: async (data) => {
    const { data, status } = await api.put('/v1/{name=providers/*/trips/*}', data, config)

    return { data, status }
  },
})