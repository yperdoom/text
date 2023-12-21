'use strict'

const { api, config } = require('../config/route_config')

const platformEnum = require('./platformEnum')
const solutionTypeEnum = require('./solutionTypeEnum')

/**
 * Função usada para informar o uso de viagens faturáveis.
 * 
 * link para a documentação oficial:
 * https://developers.google.com/maps/documentation/transportation-logistics/on-demand-rides-deliveries-solution/reference/fleet-engine/rest/v1/providers.billableTrips/report?hl=pt-br
 * 
 */
module.exports = ({
  // informar uso de viagens faturáveis
  report: async (requestBody) => {
    const body = {
      "countryCode": requestBody.countryCode, // String. Obrigatório. Código do país em que a viagem acontece, com duas letras. O preço é definido de acordo com o código do país.
      "platform": platformEnum[requestBody.BillingPlatformIdentifier], // A plataforma em que a solicitação foi emitida.
      "relatedIds": requestBody.relatedIds, // Lista de Strings. Os identificadores que estão diretamente relacionados à viagem que está sendo informada. Geralmente, são IDs (por exemplo, IDs de sessão) de operações de pré-reserva feitas antes que o ID da viagem fique disponível. O número de relatedIds está limitado a 50.
      "solutionType": solutionTypeEnum[requestBody.SolutionType]
    }
    const billable_trip = requestBody.billableTrip

    const { data, status } = await api.post(`/billableTrips/${billable_trip}`, body, config)

    return { data, status }
  },
})
