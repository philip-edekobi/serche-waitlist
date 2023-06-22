const express = require('express');
const path = require("path");
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    let email = req.body.email;

    res.send('Thank You');
})

app.use(express.static(path.join(__dirname, "..", "public")));
app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

mongoose.connect(process.env.MONGO_URL)
    .then(_ => app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`)))
    .catch(err => console.log(err));
