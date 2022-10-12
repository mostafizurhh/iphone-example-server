/**********normal server creation ***********/
const express = require('express');
const app = express();
const port = 5000


app.get('/', (req, res) => {
    res.send('this example server')
});

app.listen(port, () => {
    console.log(`port ${port} is running`)
});
/*********************/


/*********************/
//to handle data load error in client side
const cors = require('cors')
app.use(cors());
/*********************/

/**********normal API creation ***********/
const phones = require('./phones.json') //to get all phones data

/* to show all phones data as API */
app.get('/phones', (req, res) => {
    res.send(phones)
});

/* to show phones data as per specific ID */
app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // console.log('looking for data for id:' id)

    const phone = phones.find(ph => ph.id === id) || {};
    res.send(phone);
});
/*********************/