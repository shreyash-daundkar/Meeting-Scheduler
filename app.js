const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const database = require('./util/database');
const Slot = require('./models/slot');
const Meeting = require('./models/meeting');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

Slot.hasMany(Meeting);
Meeting.belongsTo(Slot);

app.use((req, res, next) => {
    res.end('helo')
})

startServer();

async function startServer() {
    const res = await database.sync({force : true});
    const slots = await Slot.findByPk(1);
    if(!slots) {
        Slot.create({time: '9:00 AM', count: 4});
        Slot.create({time: '11:00 AM', count: 4});
        Slot.create({time: '1:00 PM', count: 4});
        Slot.create({time: '3:00 PM', count: 4});
    }
    app.listen(4000)
}
