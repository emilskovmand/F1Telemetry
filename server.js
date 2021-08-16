const express = require('express');
const dgram = require('dgram');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('F1 Telemetry');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})