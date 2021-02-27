// get the express library from node_modules

const express = require('express')
// create an instance of express constructor
const app = express()

// now we can access methods from the express

app.listen(8000, () => {
    console.log('Server is running at 8000');
})