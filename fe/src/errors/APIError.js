export default class APIError extends Error {

  constructor(response, body) {
    super(

    ) //Error.constructor

    this.name = 'APIError'
    this.response = response
    this.body = body
    this.message = body?.message || `${response.status} - ${response.statusText}`
  }
}


