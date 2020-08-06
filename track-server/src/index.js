require('./models/User')
require('./models/Track')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/AuthRoutes')
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middlewares/requireAuth')

const app = express()

app.use(bodyParser.json())
app.use(authRoutes)
app.use(trackRoutes)

const connectionString = 'mongodb+srv://admin:myliferap93@track-app-5gb11.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useCreateIndex: true
}).then(() =>
	console.log('Connected to mongo instance')
).catch(error =>
	console.log('Error on connection to mongo', error)
)

app.get('/', requireAuth, ( req, res ) => {
	res.send(`Your email: ${ req.user.email }`)
})

app.listen(3000, () => {
	console.log('Listening on port 3000')
})