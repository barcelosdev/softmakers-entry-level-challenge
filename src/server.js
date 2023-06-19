require('dotenv').config();
const express = require('express');
const path = require('path')
const cors = require('cors')
const sequelize = require('./config/database.config');
const router = require('./routes/routes');

const port = process.env.SERVER_PORT;
const app = express();

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});

sequelize.sync();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.use(cors());
app.use('/api', router);

app.listen(port || 3000, () => {
    console.log('This server is listening at the port', port);
})