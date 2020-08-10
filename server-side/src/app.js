const express = require('express');
const bodyParser = require('body-parser'); //to process json data from AJAX request
const cors = require('cors');
const morgan = require('morgan'); //console logging framework for route requests, for example it'll show type of request. to what route, status code, and time to respond

const app = express();
app.use(bodyParser.json()); //allow express app to parse any json request
app.use(cors()); //any host/client to access server-side
app.use(morgan('tiny')); //log data from client (combined/tiny)

//ROUTES
app.get('/status', (req, res) => {
	res.send({
		message: 'Hello World! :D',
	});
});

app.post('/register', (req, res) => {
	res.send({
		message: `Hello ${req.body.email}! You have successfully registered`,
	});
});

app.listen(process.env.PORT || 8081);
