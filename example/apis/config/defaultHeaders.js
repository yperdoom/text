const sdkTypeEnum = require('./sdkTypeEnum')
const platformEnum = require('./platformEnum')

module.exports = {
  "languageCode": 'pt-BR',            // O código de idioma BCP-47, como en-US ou sr-Latn. Para mais informações, consulte http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. Se nenhum for especificado, a resposta poderá estar em qualquer idioma, com preferência pelo inglês se existir tal nome. Exemplo de valor de campo: en-US.
  "regionCode": 'BR',                 // Obrigatório. Código CLDR da região de origem da solicitação. Exemplo de valor de campo: US.
  // "sdkVersion":                    // string, Versão do SDK de chamada, se aplicável. O formato da versão é "major.minor.patch", por exemplo: 1.1.2.
  "osVersion": '12.1',                // Versão do sistema operacional em que o SDK de chamada está sendo executado. Exemplos de valor de campo: 4.4.1, 12.1.
  "deviceModel": 'SM-G920F',          // Modelo do dispositivo em que o SDK que faz a chamada está sendo executado. Exemplos de valor de campo: iPhone12,1, SM-G920F.
  "sdkType": sdkTypeEnum['panel'],    // O tipo de SDK que envia a solicitação
  "mapsSdkVersion": '5.2.1',          // Versão do MapSDK da qual o SDK que faz a chamada depende, se aplicável. O formato da versão é "major.minor.patch", por exemplo: 5.2.1.
  "navSdkVersion": '2.1.0',           // Versão do NavSDK de que depende o SDK de chamada, se aplicável. O formato da versão é "major.minor.patch", por exemplo: 2.1.0.
  "platform": platformEnum['panel'],  // Plataforma do SDK que fez a chamada.
  "manufacturer": 'Samsung',          // Fabricante do dispositivo Android do SDK de chamada, aplicável somente aos SDKs do Android. Exemplo de valor de campo: Samsung.
  "androidApiLevel": '33',            // Nível da API do Android do SDK de chamada, aplicável apenas aos SDKs do Android. Exemplo de valor de campo: 23.
  // "traceId":                       // string Um ID opcional que pode ser fornecido para gerar registros e identificar a solicitação.
}