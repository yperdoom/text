'use strict'

const axios = require('axios')

const BASE_URL = 'https://fleetengine.googleapis.com'

const provider = ''

const url = `${BASE_URL}/v1/providers/${provider}`

module.exports.api = axios.create({
  baseURL: url,
  timeout: 10000,
  headers: { 'X-Custom-Header': 'foobar' }
})

module.exports.config = {
  validateStatus: () => true
}

