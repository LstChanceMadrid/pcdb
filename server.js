const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const pgp = require('pg-promise')();
const connectionString = ""
const db= pgp(connectionString);
const port = process.env.PORT || 5000;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cors = require('cors')
const jwt = require('jsonwebtoken')

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));











// app.post('/api/search', (req, res) => {

// 	let post = req.body.search
// 	//SQL to find it in
// 	db.any('INSERT INTO history (search) VALUES ($1)', [post])
// 	res.send(
// 		`I received your POST request. This is what you sent me: ${post}`,
// 	);
// });






















// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));


















const makeitup = () => {}