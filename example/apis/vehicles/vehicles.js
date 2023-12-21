'use strict'

const { api, config } = require('../config/route_config')


/**
 * 
 * 
 * https://developers.google.com/maps/documentation/transportation-logistics/on-demand-rides-deliveries-solution/reference/fleet-engine/rest?hl=pt-br#rest-resource:-v1.providers.vehicles
 */

module.exports = ({
  // Instancia um novo veículo associado a um fornecedor de serviço de transporte por aplicativo ou entregas sob demanda.
  create: async (requestBody) => {
    const body = {
      vehicleState: requestBody.vehicleState,
      supportedTripTypes: requestBody.supportedTripTypes,
      maximumCapacity: requestBody.maximumCapacity,
      vehicleType: requestBody.vehicleType
    }

    const { data, status } = await api.post('/vehicles', body, config)

    return { data, status }
  },

  // Retorna um veículo do Fleet Engine.
  get: async (vehicle, params) => {


    const { data, status } = await api.get(`/vehicles/${vehicle}`, config)

    return { data, status }
  },

  // Retorna uma lista paginada de veículos associados a um provedor que corresponde às opções de solicitação.
  list: async () => {
    const { data, status } = await api.get('/vehicles', config)

    return { data, status }
  },

  // Retorna uma lista de veículos que correspondem às opções de solicitação.
  search: async () => {
    const { data, status } = await api.post('/vehicles:search', config)

    return { data, status }
  },

  // Grava dados atualizados do veículo no Fleet Engine.
  update: async (requestBody) => {
    const { data, status } = await api.put('/vehicles/', requestBody, config)

    return { data, status }
  },

  // Atualiza parcialmente os atributos de um veículo
  updateAttributes: async (requestBody) => {
    const { data, status } = await api.put('/vehicles/*}:updateAttributes', requestBody, config)

    return { data, status }
  },
})