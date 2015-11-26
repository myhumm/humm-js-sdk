'use strict';
//var lockr = require('lockr');
/*

  oauth_token   : undefined,
  client_id     : '564dc328af59fc5215984f7a',
  client_secret : undefined,
  connectURL    : 'http://accounts.livingindietv.com/authorize?',
  redirect_uri  : undefined,
  expires_in    : undefined,
  refresh_token : undefined,
  baseURL       : 'http://api.myhumm.com'

*/

var config = {};
/**
 *
 * @type {{get: Function, set: Function}}
 */
module.exports = {
  get: function get(key) {
  //  return localStorage.getItem(key);
    if(typeof window !== 'undefined')  {
      return localStorage.getItem(key);
    } else {
      return config[key];
    }
  },

  set: function set(key, value) {
    if (value) {
      if(typeof window !== 'undefined') {
        localStorage.setItem(key, value);
      } else {
        config[key] = value;
      }
    }
  }
};