var appRoot = require('app-root-path');
var AppRootDir = appRoot.path+'/app';
const config = require(AppRootDir+'/config/config')
const e_functions = require(AppRootDir+'/module/functions')

const addUsers = (request, response) => {
  // init data
  var username = '';
  var password = '';
  var usertype = '';
  var useremail = '';

  if(request.body.username != undefined)
    username = request.body.username;
  if(request.body.password != undefined)
    password = request.body.password;
  if(request.body.usertype != undefined)
    usertype = request.body.usertype;
  if(request.body.useremail != undefined)
    useremail = request.body.useremail;

  password = e_functions.setPassword(password);

  var query = {
    text: '',
    values: [],
  } 

  if(request.body.constructor === Object && Object.keys(request.body).length === 0) 
  {
    var msg = {
      message: "error",
      error_message: 'Empty paramaters!',
    }   
    response.status(200).json(msg);
  }
  else
  {  
    query = {
      text: 'insert into useraccounts values ( (select coalesce(max(userid),0) from useraccounts)+1, $1, $2, $3, $4) ',
      values: [username, password, usertype, useremail],
    }   

    config.elfawwaz_exec_query(query, response);
    // response.status(200).json(query);
  } 

}

module.exports = {
  addUsers,
}