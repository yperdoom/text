const billableTrips = require('./apis/bills/billable_trips')
const trips = require('./apis/trips/trips')
const vehicles = require('./apis/vehicles/vehicles')

const execution = async () => {
  try {
    const { oauth2 } = require('./apis/config/route_config')

    await oauth2()

    // const { data, status } = await vehicles.list()
    // console.log('data :: ', data)
    // console.log('details :: ', data.error.details)
    // console.log('status :: ', status)
  } catch (e) {
    console.log(e.response)
  }
}

execution()