const express = require('express')
const format = require('date-format')

const app = express()

PORT = process.env.PORT || 3000 

app.get('/', (req, res) => {
    res.status(200).send('Um, Hello!')
})

app.get('/api/v1/instagram', (req, res) => {
    const instaSocial = {
        userName : "ShreedharmaOfficial",
        followers : 100,
        follows : 120,
        date : format.asString('dd/MM/yyyy hh:mm:ss', new Date())
    }

    res.status(200).json(instaSocial)
})

app.get('/api/v1/facebook', (req, res) => {
    const instaSocial = {
        userName : "Shreedharma",
        followers : 48,
        follows : 48,
        date : format.asString('dd/MM/yyyy hh:mm:ss', new Date())
    }

    res.status(200).json(instaSocial)
})

app.get('/api/v1/linkedin', (req, res) => {
    const instaSocial = {
        userName : "ShreedharmaOnline",
        followers : 10,
        follows : 20,
        date : format.asString('dd/MM/yyyy hh:mm:ss', new Date())
    }

    res.status(200).json(instaSocial)
})

app.get('/api/v1/:token', (req, res) => {
    res.status(200).json(req.params.token)
})

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
})

