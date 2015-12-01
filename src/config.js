'use strict';

var config = {
  access_token: undefined,
  baseURL: 'http://api.myhumm.com/v2',
  accountURL: 'http://accounts.myhumm.com',
  client_id: undefined,
  client_secret: undefined
};

//if browser set urls 
if(typeof window !== 'undefined')  {
  localStorage.setItem('baseURL', 'http://api.myhumm.com/v2');
  localStorage.setItem('accountURL', 'http://accounts.myhumm.com');
}

/**
 *
 * @type {{get: Function, set: Function}}
 */
module.exports = {
  'get': function get(key) {
    //  return localStorage.getItem(key);
    if(typeof window !== 'undefined')  {
      return localStorage.getItem(key);
    } else {
      return  config[key];
    }
  },

  'set': function set(key, value){
    if(typeof window !== 'undefined'){
      localStorage.setItem(key, value);
    }else{
      return config[key] = value;
    }
  }
};