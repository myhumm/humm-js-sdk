'use strict';

var config = {
  oauth_token: undefined,
  client_id: '564dc328af59fc5215984f7a',
  baseURL: 'http://api.myhumm.com'
};

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