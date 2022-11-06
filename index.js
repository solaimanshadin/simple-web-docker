const express = require('express')
const cors = require('cors')
const app =  express();
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hi There')
})

app.listen(8080, () => {
    console.log("Listing on port: 8080")
})