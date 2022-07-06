const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const chalk = require('chalk');
const routes = require('./routes/route');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use('/', routes)


app.listen(3000, () => {
    console.log(chalk.blue.bold(`running at : http://localhost:3000`));
})