var appRoot = require('app-root-path');
var AppRootDir = appRoot.path+'/app';
const config = require(AppRootDir+'/config/config')

const crypto = require('crypto');


const setPassword = function(password) { 
     
 	// Creating a unique salt for a particular user 
    this.salt = crypto.randomBytes(16).toString('hex'); 
  
    // Hashing user's salt and password with 1000 iterations, 64 length and sha512 digest 
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`); 
    return this.hash;
}; 


module.exports = {
  setPassword,
}