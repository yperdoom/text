'use strict'

const axios = require('axios')
const defaultHeaders = require('./defaultHeaders')

require('dotenv').config()
const {
  STATUS_BASE_URL,
  BASE_URL,
  provider,
  token,
  gcloudToken
} = process.env

const url = `${BASE_URL}/${provider}`

module.exports.api = axios.create({
  baseURL: url,
  timeout: 10000,
  headers: {
    "Authorization": `Bearer ${gcloudToken}`,
    "X-goog-api-key": token,
    'x-goog-user-project': 'odrd-onboarding',
    // 'X-Custom-Header': 'foobar',
    ...defaultHeaders
  }
})

module.exports.testeApis = async (env) => {
  const testeApi = axios.create({
    baseURL: `${STATUS_BASE_URL}/${provider}`,
    timeout: 10000,
    headers: {
      // "Authorization": token,
      "Authorization": `Bearer ${gcloudToken}`,
      // "X-goog-api-key": "AIzaSyA7S85zRDquFau6ANs-d6H5ydSDwCv9HaA",
      // 'x-goog-user-project': 'odrd-onboarding',
      // 'X-Custom-Header': 'foobar',
      // ...defaultHeaders
    }
  })

  const get = await testeApi.get()
  return get
}

module.exports.config = {
  validateStatus: () => true
}
