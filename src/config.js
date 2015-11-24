'use strict';

var lockr = require('lockr');

/**
 *
 * @type {{oauth_token: undefined, client_id: string, connectURL: undefined, redirect_uri: undefined, baseURL: string}}
 */
/*
var config = {
  oauth_token   : undefined,
  client_id     : '564dc328af59fc5215984f7a',
  client_secret : undefined,
  connectURL    : 'http://accounts.livingindietv.com/authorize?',
  redirect_uri  : undefined,
  expires_in    : undefined,
  refresh_token : undefined,
  baseURL       : 'http://api.myhumm.com'
};
*/

/**
 *
 * @type {{get: Function, set: Function}}
 */
module.exports = {
  get: function get(key) {
    return lockr.get(key);
  },

  set: function set(key, value) {
    if (value) {
      lockr.set(key, value);
    }
  }
};