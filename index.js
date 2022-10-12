const express = require('express');
const app = express();
const port = 5000

app.get('/', (req, res) => {
    res.send('this example server')
});

app.listen(port, () => {
    console.log(`port ${port} is running`)
});