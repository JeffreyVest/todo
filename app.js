const express = require('express');
const app = express();
const port = 8000;

app.use(express.urlencoded());

app.post('/add-todo', function (req, res) {
    console.log(req.body.description);
    res.send("thanks");
});

app.use(express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
