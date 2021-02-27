// adding the data json
const mockUserData = [{ 'name': 'mark' }, { 'name': 'jill' }]


// get the express library from node_modules

const express = require('express')
// create an instance of express constructor
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
// now we can access ethods from the express

// creating a endpoint or get route
app.get('/users', (req, res) => {
    res.json({
        'success': true,
        'message': 'successfully got the users. Nice!',
        'users': mockUserData
    })
})

// creating a dynamic route
// Use variable in routes - any word with ':' added before in url is called variable
// it can access using req.params.id

app.get('/users/:id', (req, res) => {

    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id

    })
})


// Creating a post request

app.post('/login', (req, res) => {
    // Getting from the client or from the body of the request
    const username = req.body.username;
    const password = req.body.password;

    //Getting from the database
    const mockUsername = 'subham'
    const mockPassword = 'ranjan'

    //Checking for username and password
    if (username === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encrypted token goes here'

        })
    }
    else {
        res.json({
            success: false,
            message: 'password and username do not match'
        })
    }
})

// starting the server
app.listen(8000, () => {
    console.log('Server is running at 8000');
})

