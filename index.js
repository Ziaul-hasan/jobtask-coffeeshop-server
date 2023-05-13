const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

const coffee = require('./data/coffee.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('coffee time is running')
})

app.get('/coffees', (req, res) => {
    res.send(coffee)
})

app.listen(port, () => {
    console.log(`coffeeTime is running on port: ${port}`)
})