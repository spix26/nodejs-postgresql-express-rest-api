const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var appRoot = require('app-root-path');
var AppRootDir = appRoot.path+'/app';
const fs = require('fs');

let rawdata = fs.readFileSync(AppRootDir+'/config/config.json');
let jsonconfig = JSON.parse(rawdata);
const port = jsonconfig[0].apiport;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Elfawwaz REST - Node.js, Express, and Postgres API' });
})

//------------------------------- users
const db_users = require(AppRootDir+'/models/users/users.queries')
app.get('/users/id/:userid', db_users.getUsers)
app.post('/users/id/:userid', db_users.getUsers)
app.get('/users', db_users.getUsers_Custom)
app.post('/users', db_users.getUsers_Custom)
const db_add_users = require(AppRootDir+'/models/users/users.add.queries')
app.post('/users/add/', db_add_users.addUsers)
const db_update_users = require(AppRootDir+'/models/users/users.update.queries')
app.post('/users/update/', db_update_users.updateUsers)



app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})