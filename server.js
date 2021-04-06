/** @format */

const express = require('express')
const app = express()
const server = require('http').Server(app)
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({dev})
const handle = nextApp.getRequestHandler()
require('dotenv').config({path: './config.env'})
const connectDb = require('./utilsServer/connectDb')
connectDb()
app.use(express.json())
const PORT = process.env.PORT || 3000

nextApp.prepare().then(() => {
	app.use('/api/signup', require('./api/signup'))
	app.use('/api/auth', require('./api/auth'))

	app.all('*', (req, res) => handle(req, res))

	server.listen(PORT, err => {
		if (err) {
			server.close()
			throw err
		}
		console.log(`Express server running ${PORT}`)
	})
})
process.on('uncaughtException', err => {
	console.log('uncaughtException! shutting down the server...')
	console.error(err)
	console.log(err.name, err.message)
	process.exit(1)
})
