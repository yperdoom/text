const billableTrips = require('./apis/bills/billable_trips')
const { testeApis } = require('./apis/config/route_config')
const trips = require('./apis/trips/trips')
const vehicles = require('./apis/vehicles/vehicles')

const execution = async () => {
  try {
    // const { oauth2 } = require('./apis/config/route_config')
    // await oauth2()

    // const { data, status } = await testeApis()
    const response = await vehicles.list()

    console.log('data :: ', response.data)
    console.log('status :: ', response.status)

    if (response?.error) {
      console.log('details :: ', response?.error?.details)
    }
  } catch (e) {
    console.log(e)
  }
}

execution()