var appRoot = require('app-root-path');
var AppRootDir = appRoot.path+'/app';
const config = require(AppRootDir+'/config/config')


const getUsers = (request, response) => {
  // init data
  var userid = 0;
  var query = {
    text: '',
    values: [],
  } 


  if (request.params !== {})  
  {
    userid = parseInt(request.params.userid)
    if(userid != 0)
    {
      query = {
        text: 'SELECT * FROM useraccounts WHERE userid = $1',
        values: [userid],
      } 
    }
  } 

  // response.status(200).json(request.params);
  config.elfawwaz_exec_get_query(query, response);
}



const getUsers_Custom = (request, response) => {
  // init data
  var userid = 0;
  var query = {
    text: '',
    values: [],
  } 

  if(request.body.constructor === Object && Object.keys(request.body).length === 0) 
  {
    query = {
      text: 'SELECT * FROM useraccounts',
      values: [],
    } 
  }
  else
  {  
    var params = [];
    var condition = '';
    var paramcount = 0;
    if(request.body.userid != undefined)
    {
      params.push(parseInt(request.body.userid)); 
      paramcount++;
      condition += ' AND userid = $'+ paramcount + ' ';
    }
    if(request.body.username != undefined)
    {
      params.push(request.body.username); 
      paramcount++;
      condition += ' AND username = $'+ paramcount + ' ';
    }
    if(request.body.useremail != undefined)
    {
      params.push(request.body.useremail); 
      paramcount++;
      condition += ' AND useremail = $'+ paramcount + ' ';
    }
    
    query = {
      text: 'SELECT * FROM useraccounts WHERE 1=1 ' + condition,
      values: params,
    } 
  }

  // response.status(200).json(query);
  config.elfawwaz_exec_get_query(query, response);

}


module.exports = {
  getUsers,
  getUsers_Custom,
}