// adding the data json
const mockUserData = [{ 'name': 'mark' }, { 'name': 'jill' }]


// get the express library from node_modules

const express = require('express')
// create an instance of express constructor
const app = express()
// now we can access ethods from the express

// creating a endpoint or get route
app.get('/users', (req, res) => {
    res.json({
        'success': true,
        'message': 'successfully got the users. Nice!',
        'users': mockUserData
    })
})

// Use variable in routes - any word with ':' added before in url is called variable
// it can access using req.params.id

app.get('/users/:id', (req, res) => {

    res.json({
        'success': true,
        'message': 'got one user',
        'user': req.params.id

    })
})

// starting the server
app.listen(8000, () => {
    console.log('Server is running at 8000');
})

