var appRoot = require('app-root-path');
var AppRootDir = appRoot.path+'/app';
const config = require(AppRootDir+'/config/config')


const getItems = (request, response) => {
  // init data
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
        text: 'SELECT * FROM items',
        values: [],
      } 
    }
  } 


  config.elfawwaz_exec_get_query(query, response);
}



module.exports = {
  getItems,
}