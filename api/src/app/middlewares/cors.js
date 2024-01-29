module.exports = (request, response, next) => {
	response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
	response.setHeader('Access-Control-Allow-Mehods', '*')
	response.setHeader('Access-Control-Allow-Headers', '*')
	next()
}
