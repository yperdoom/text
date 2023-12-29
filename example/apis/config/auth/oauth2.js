const oAuth = require('oauth')

const clientId = '430293889793-vlnc2qt3dps2s4jle7l32ei41li59ssd.apps.googleusercontent.com'
const clientSecret = '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'
// const authorizationUrl = 'https://accounts.google.com/signin/oauth'
const authorizationUrl = 'https://accounts.google.com/o/oauth2/auth'
const tokenUrl = 'https://oauth2.googleapis.com/token'
const redirectUri = ''

const oauth2 = new oAuth.OAuth2(
  clientId,
  clientSecret,
  authorizationUrl,
  'authorize',
  tokenUrl
)

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
