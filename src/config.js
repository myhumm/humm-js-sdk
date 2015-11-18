'use strict';

var config = {
  oauth_token: undefined,
  baseURL: 'https://api.*****.com',
  connectURL: '//connect.*****.com',
  client_id: undefined,
  redirect_uri: undefined
};

module.exports = {
  get(key) {
    return config[key];
  },

  set(key, value) {
    if (value) {
      config[key] = value;
    }
  }
};
