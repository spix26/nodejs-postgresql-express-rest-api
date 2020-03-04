var appRoot = require('app-root-path');
var AppRootDir = appRoot.path+'/app';
const Pool = require('pg').Pool;
const fs = require('fs');

let rawdata = fs.readFileSync(AppRootDir+'/config/config.json');
let jsonconfig = JSON.parse(rawdata);
// console.log(jsonconfig[0].host);

const pool = new Pool({
  host: jsonconfig[0].host,
  database: jsonconfig[0].database,
  user: jsonconfig[0].user,
  password: jsonconfig[0].password,
  port: jsonconfig[0].port,
})

const elfawwaz_exec_query = (query, response) => {
  try {  
    pool.query(query, (error, results) => {   
      if(error)
      {
        // throw error;
        var msg = {
          message: "error",
          error_message: error.toString(),
        }    
        response.status(200).json(msg);
      } 
      else 
      {
        var msg = {
          message: "success",
          request: query.values,
        }    
        response.status(200).json(msg);
      }   
    })    

  }
  catch(error) {    
    var msg = {
      message: "Error",
      error_message: error.toString(),
    }    
    response.status(200).json(msg);
    
  }
  
}




const elfawwaz_exec_get_query = (query, response) => {
  try {  
    pool.query(query, (error, results) => {   
      if(error)
      {
        // throw error;
        var msg = {
          message: "error",
          error_message: error.toString(),
        }    
        response.status(200).json(msg);
      } 
      else 
      {
        var msg = {
          message: "success",
          data: results.rows,
        }    
        response.status(200).json(msg);
      }   
    })    

  }
  catch(error) {    
    var msg = {
      message: "Error",
      error_message: error.toString(),
    }    
    response.status(200).json(msg);
    
  }
  
}

module.exports = {
  pool,
  elfawwaz_exec_get_query,
  elfawwaz_exec_query,

}