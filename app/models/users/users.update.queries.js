var appRoot = require('app-root-path');
var AppRootDir = appRoot.path+'/app';
const config = require(AppRootDir+'/config/config')
const e_functions = require(AppRootDir+'/module/functions')

const updateUsers = (request, response) => {
  // init data
  var userid = 0;
  var username = '';
  var password = '';
  var usertype = '';
  var useremail = '';

  if(request.body.userid != undefined)
    userid = parseInt(request.body.userid);
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

  if(userid == 0)
  {
    var msg = {
      message: "error",
      error_message: 'Parameter userid is needed!',
    }   
    response.status(200).json(msg);
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
      text: 'update useraccounts set username=$1, password=$2, usertype=$3, useremail=$4 where userid=$5 ',
      values: [username, password, usertype, useremail, userid],
    }   

    config.elfawwaz_exec_query(query, response);
    // response.status(200).json(query);
  } 

}

module.exports = {
  updateUsers,
}