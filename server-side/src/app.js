const express = require('express');
const bodyParser = require('body-parser'); //to process json data
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(bodyParser.json()); //allow express app to parse any json request
app.use(cors()); //any host/client to access server-side
app.use(morgan('combined')); //log data from client

//ROUTES
app.get('/status', (req, res) => {
	res.send({
		message: 'Hello World! :D',
	});
});

app.listen(process.env.PORT || 8081);
