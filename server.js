// adding the data json
const mockUserData = [{ 'name': 'mark' }, { 'name': 'jill' }]


// get the express library from node_modules

const express = require('express')
// create an instance of express constructor
const app = express()
// now we can access ethods from the express

// creating a endpoint
app.get('/users', (req, res) => {
    res.json({
        'success': true,
        'message': 'successfully got the users. Nice!',
        'users': mockUserData
    })
})


// starting the server
app.listen(8000, () => {
    console.log('Server is running at 8000');
})

