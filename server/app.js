const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000;

// app.use(bodyParser.urlencoded({extended: true}))
app.use("/", express.static('./build', {
    index: "index.html"
}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

