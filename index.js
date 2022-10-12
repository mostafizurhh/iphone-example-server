const express = require('express');
const app = express();
const phones = require('./phones.json') //to get all phones data
const port = 5000

app.get('/', (req, res) => {
    res.send('this example server')
});

/* to show all phones data as API */
app.get('/phones', (req, res) => {
    res.send(phones)
});


app.listen(port, () => {
    console.log(`port ${port} is running`)
});