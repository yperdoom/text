'use strict'

const { api, config } = require('../route_config')


/**
 * 
 * 
 * https://developers.google.com/maps/documentation/transportation-logistics/on-demand-rides-deliveries-solution/reference/fleet-engine/rest?hl=pt-br#rest-resource:-v1.providers.vehicles
 */

module.exports = ({
  // Instancia um novo veículo associado a um fornecedor de serviço de transporte por aplicativo ou entregas sob demanda.
  create: async (requestBody) => {
    const body = {
      vehicleState,
      supportedTripTypes,
      maximumCapacity,
      vehicleType
    }

    const { data, status } = await api.post('/vehicles', body, config)

    return data
  },

  // Retorna um veículo do Fleet Engine.
  get: async (trip) => {
    const { data, status } = await api.get('/vehicles/*}', config)

    return data
  },

  // Retorna uma lista paginada de veículos associados a um provedor que corresponde às opções de solicitação.
  list: async () => {
    const { data, status } = await api.post('/vehicles', data, config)

    return data
  },

  // Retorna uma lista de veículos que correspondem às opções de solicitação.
  search: async () => {
    const { data, status } = await api.post('/vehicles:search', data, config)

    return data
  },

  // Grava dados atualizados do veículo no Fleet Engine.
  update: async (data) => {
    const { data, status } = await api.put('/vehicles/', data, config)

    return data
  },

  // Atualiza parcialmente os atributos de um veículo
  updateAttributes: async (data) => {
    const { data, status } = await api.put('/vehicles/*}:updateAttributes', data, config)

    return data
  },
})