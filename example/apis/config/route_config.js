'use strict'

const axios = require('axios')
const oAuth = require('oauth')
const sdkTypeEnum = require('./sdkTypeEnum')
const platformEnum = require('./platformEnum')

const BASE_URL = 'https://fleetengine.googleapis.com'
const provider = '430293889793'
const url = `${BASE_URL}/v1/providers/${provider}`

const oauth2 = new oAuth.OAuth2(
  '430293889793-vlnc2qt3dps2s4jle7l32ei41li59ssd.apps.googleusercontent.com', // client_id
  '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', // client_secret
  // 'https://fleetengine.googleapis.com/', // URL base da API externa
  // 'https://oauth2.googleapis.com/token', // URL base da API externa
  // 'https://www.googleapis.com/auth/cloud-platform', // URL base da API externa
  // 'https://accounts.google.com/o/oauth2/auth', // URL base da API externa
  'https://accounts.google.com/signin/oauth', // URL base da API externa
  'authorize', // Caminho de autorização
  'token', // Caminho para obter o token
)

// {
//   "client_id": "430293889793-vlnc2qt3dps2s4jle7l32ei41li59ssd.apps.googleusercontent.com",
//   "project_id": "odrd-onboarding",
//   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//   "token_uri": "https://oauth2.googleapis.com/token",
//   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//   "client_secret": "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",
//   "redirect_uris": [
//     "https://fleetengine.googleapis.com/"
//   ]
// }

module.exports.oauth2 = async () => {
  oauth2.getOAuthAccessToken(
    '',
    { 'grant_type': 'client_credentials' },
    (err, accessToken, refreshToken, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Resultados:', results);
        console.log('Token de refresh:', refreshToken);
        console.log('Token de acesso:', accessToken);
        // Use o token para fazer chamadas à API externa
      }
    }
  )
}

module.exports.api = axios.create({
  baseURL: url,
  timeout: 10000,
  headers: {
    "Authorization": "Bearer ya29.a0AfB_byAR63alqmGUJ6v3S8b2eeg1d9jzHYHVCUNF1NiICilza0IgUbTqmwa7DI4fJfALhEv-IlTxE9gQwHxKJW6WjY8rLdsxVcn6cpuiRmUBkTjs7hztQ_fwEMe4ICIYPsuM2gANfxVl88-ZpG1jNpgjau77Q-EmGMyOYp1kv7IaCgYKAVESARESFQHGX2MibVbySbuJ6mbn9F0Na6y6OA0178",
    "X-goog-api-key": "AIzaSyA7S85zRDquFau6ANs-d6H5ydSDwCv9HaA",
    'x-goog-user-project': 'odrd-onboarding',
    'X-Custom-Header': 'foobar',
    "languageCode": 'pt-BR', // O código de idioma BCP-47, como en-US ou sr-Latn. Para mais informações, consulte http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. Se nenhum for especificado, a resposta poderá estar em qualquer idioma, com preferência pelo inglês se existir tal nome. Exemplo de valor de campo: en-US.
    "regionCode": 'BR', // Obrigatório. Código CLDR da região de origem da solicitação. Exemplo de valor de campo: US.
    // "sdkVersion": string, // Versão do SDK de chamada, se aplicável. O formato da versão é "major.minor.patch", por exemplo: 1.1.2.
    "osVersion": '12.1', // Versão do sistema operacional em que o SDK de chamada está sendo executado. Exemplos de valor de campo: 4.4.1, 12.1.
    "deviceModel": 'SM-G920F', // Modelo do dispositivo em que o SDK que faz a chamada está sendo executado. Exemplos de valor de campo: iPhone12,1, SM-G920F.
    "sdkType": sdkTypeEnum['panel'], // O tipo de SDK que envia a solicitação
    "mapsSdkVersion": '5.2.1', // Versão do MapSDK da qual o SDK que faz a chamada depende, se aplicável. O formato da versão é "major.minor.patch", por exemplo: 5.2.1.
    "navSdkVersion": '2.1.0', // Versão do NavSDK de que depende o SDK de chamada, se aplicável. O formato da versão é "major.minor.patch", por exemplo: 2.1.0.
    "platform": platformEnum['panel'], // Plataforma do SDK que fez a chamada.
    "manufacturer": 'Samsung', // Fabricante do dispositivo Android do SDK de chamada, aplicável somente aos SDKs do Android. Exemplo de valor de campo: Samsung.
    "androidApiLevel": '33', // Nível da API do Android do SDK de chamada, aplicável apenas aos SDKs do Android. Exemplo de valor de campo: 23.
    // "traceId": string // Um ID opcional que pode ser fornecido para gerar registros e identificar a solicitação.
  }
})

module.exports.config = {
  validateStatus: () => true
}

