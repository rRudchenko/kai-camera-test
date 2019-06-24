const axios = require('axios')

const NETLIFY_HOOK_URL =
  'https://api.netlify.com/build_hooks/5d10f4b0fbaa4b3524a35d8a'

const VERIFICATION_HEADERS = {
  'Content-Type': 'text/plain',
  'X-Content-Type-Options': 'nosniff',
}

const NOTIFICATION_RESPONSE_HEADERS = {
  Authorization:
    'Bearer auTelTITMHAAAAAAAAAAIjkWEPDpj0zDuuALrTDm-G_y_LXxUoNYbDaqMfa1GkiG',
  'Content-Type': 'application/json',
}

const NOTIFICATION_RESPONSE_DATA = {
  path: '/img',
  recursive: false,
  include_media_info: false,
  include_deleted: false,
  include_has_explicit_shared_members: false,
  include_mounted_folders: true,
  include_non_downloadable_files: true,
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
      // console.info('VERIFICATION EVENT\n', event)
      return { statusCode: 200, body: challenge, headers: VERIFICATION_HEADERS }
    } else if (headers['x-dropbox-signature']) {
      // Execution
      console.info('NOTIFICATION EVENT\n', body)

      // await axios({
      //   method: 'post',
      //   url: 'https://api.dropboxapi.com/2/files/list_folder',
      //   headers: NOTIFICATION_RESPONSE_HEADERS,
      //   data: NOTIFICATION_RESPONSE_DATA
      // })
      //   .then(response => console.info('FOLDER CONTENT RESPONSE', response))
      //   .catch(err => console.error('FOLDER CONTENT ERROR', err))

      await axios({
        method: 'post',
        url: NETLIFY_HOOK_URL,
        body: '',
      }).then(response => console.info('NOTIFICATION RESPONSE', response.data))
      // .then(res => {})
      // console.log(
      //   'Success: webhook received from Dropbox and forwarded to netlify!'
      // )
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
      // console.error('NOT EXPECTED REQUEST EVENT\n', event)
      return { statusCode: 200, body: msg }
    }
  } catch (e) {
    // Failure
    console.error('Failed: something went wrong\n', e.message)
    return { statusCode: 500, body: e.message }
  }
}
