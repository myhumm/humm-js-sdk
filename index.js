'use strict';

var config  = require('./src/config'),
    api     = require('./src/api');


module.exports = global.HUMM = {
    initialize: function initialize(options){
       // options = options ? options : {};
        // set tokens
        config.set('oauth_token', options.oauth_token);
        config.set('client_id', options.client_id);
        config.set('redirect_uri', options.redirect_uri);
        config.set('baseURL', options.baseURL);
        config.set('connectURL', options.connectURL);
    },
    get: function get(path, params){
        return api.request('GET', path, params);
    },

    post: function post(path, params){
        return api.request('POST', path, params);
    },

    put: function put(path, params){
        return api.request('PUT', path, params);
    },

    'delete': function _delete(path){
        return api.request('DELETE', path);
    }

};