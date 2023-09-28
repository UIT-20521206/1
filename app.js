const express = require('express');
const app = express();

app.get('/demo', (req,res) => {
    res.send('Hello')
});

app.listen(3000,() => (
    console.log('Run')
))