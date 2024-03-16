const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Init Project')
});

app.listen(port, () => {
    console.log(`Listen on port ${port}`);
});