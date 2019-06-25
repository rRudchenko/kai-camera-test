const axios = require('axios')

const NETLIFY_HOOK_URL =
  'https://api.netlify.com/build_hooks/5d1103cb4b2d00d042fa8a36'

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
      // Verification
      console.info(
        'Success: verification request received and responded to appropriately.'
      )
      return { statusCode: 200, body: challenge, headers: VERIFICATION_HEADERS }
    } else if (headers['x-dropbox-signature']) {
      // Execution
      console.info('NOTIFICATION EVENT\n', body)

      await axios({
        method: 'post',
        url: NETLIFY_HOOK_URL,
        body: '',
      }).then(response => console.info('NOTIFICATION RESPONSE', response.data))
      return {
        statusCode: 200,
        body:
          'BODY SUCCESS: webhook received from Dropbox and forwarded blah-blah-blah',
      }
    } else {
      // Failure
      const msg =
        'Failed: the request was not what was expected so nothing happened.'
      console.error('MMSSGG\n', msg)
      return { statusCode: 200, body: msg }
    }
  } catch (e) {
    // Failure
    console.error('Failed: something went wrong\n', e.message)
    return { statusCode: 500, body: e.message }
  }
}
