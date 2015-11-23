'use strict';

/**
 *
 * @type {{oauth_token: undefined, client_id: string, connectURL: undefined, redirect_uri: undefined, baseURL: string}}
 */
var config = {
  oauth_token : undefined,
  client_id   : '564dc328af59fc5215984f7a',
  connectURL  : 'http://accounts.livingindietv.com/authorize?',
  redirect_uri: undefined,
  baseURL     : 'http://api.myhumm.com'
};

/**
 *
 * @type {{get: Function, set: Function}}
 */
module.exports = {
  get: function get(key) {
    return config[key];
  },

  set: function set(key, value) {
    if (value) {
      config[key] = value;
    }
  }
};