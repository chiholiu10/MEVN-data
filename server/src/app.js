const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const axios = require('axios')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const mongodb_conn_module = require('./mongodbConnModule');
var db = mongodb_conn_module.connect();

var Data = require("../models/posts");
app.get('/', (req, res) => {
	axios.get('https://gist.githubusercontent.com/hurkanakbiyik/5d54addf62f2c4a59c1e9222e3dc2d08/raw/f85c3ddb9b218515b88eb8f723fc05f257bed468/nerf-herders-test-data')
		.then(response => {
			res.json(response.data)
			console.log(response.data);
		})
		.catch(error => {
			console.log(error);
		})
})

app.listen(process.env.PORT || 8085)
