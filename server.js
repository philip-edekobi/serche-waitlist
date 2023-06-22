const express = require('express');
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    let email = req.body.email;

    res.send('Thank You');
})

app.use(express.static(path.join(__dirname)));
app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname));
});

app.listen(3000, () => {
    console.log(`http://localhost:3000`)
})