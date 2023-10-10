const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const database = require('./util/database');

const app = express();

app.use(bodyParser.json({extended: false}));
app.use(cors());

(async function createServer() {
    const res = await database.sync();
    app.listen(4000);
})();