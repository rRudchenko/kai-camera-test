const axios = require('axios')
// require('dotenv').config()

// const { NETLIFY_BUILD_HOOK_URL } = process.env.NETLIFY_HOOK_URL
const NETLIFY_BUILD_HOOK_URL = 'https://api.netlify.com/build_hooks/5d60218c408efd500fb4f15b'

const VERIFICATION_HEADERS = {
  'Content-Type': 'text/plain',
  'X-Content-Type-Options': 'nosniff',
}

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  try {
    const { headers, queryStringParameters, body } = event
    const { challenge } = queryStringParameters
    if (challenge) {
      console.info(
        'Success: verification request received and responded to appropriately.',
      )
      return { statusCode: 200, body: challenge, headers: VERIFICATION_HEADERS }
    }
    if (headers['x-dropbox-signature']) {
      console.info('NOTIFICATION EVENT\n', body)

      await axios({
        method: 'post',
        url: NETLIFY_BUILD_HOOK_URL,
        body: '',
      }).then(response => console.info('NOTIFICATION RESPONSE', response.data))
      return {
        statusCode: 200,
        body:
          'BODY SUCCESS: webhook received from Dropbox and forwarded blah-blah-blah',
      }
    }
    const msg = 'Failed: the request was not what was expected so nothing happened.'
    console.error('MMSSGG\n', msg)
    return { statusCode: 200, body: msg }
  } catch (e) {
    console.error('Failed: something went wrong\n', e.message)
    return { statusCode: 500, body: e.message }
  }
}
