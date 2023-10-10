const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json({extended: false}));
app.use(cors());

app.listen(4000);