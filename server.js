const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const pgp = require('pg-promise')();
const connectionString = "postgres://jtyliushcpedti:70bb3c3dcb1ebd55baa74d89081461ad3829669a056b0fb3bce64b6bbbadd4a3@ec2-54-83-8-246.compute-1.amazonaws.com:5432/dfa2rgb3i6r5af?ssl=true"
const db= pgp(connectionString);
const port = process.env.PORT || 5000;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cors = require('cors')
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));








app.post('/api/register', (req, res) => {

    let username = req.body.username
    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let email = req.body.email
    let password = req.body.password

    db.none("SELECT username FROM users WHERE username = $1", [username]).then(() => {
        bcrypt.hash(password, saltRounds).then(hash => {

            db.any('INSERT INTO users (username, firstname, lastname, email, password) VALUES ($1, $2, $3, $4, $5)', [username, firstname, lastname, email, hash])
        }).then(user => {
            res.json({success : true})
        })
    }).catch(e => {
        if (e.name = "QueryResultError") {
            res.json({success : false, message : 'Username exists'})
        } else {
            console.log(e)
        }
    })
})







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


















const makeitup = () => {
    db.any('CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(15) NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL)').catch(e => {
        console.log(e)
    })
}

