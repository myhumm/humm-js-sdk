'use strict';

var config  = require('./config'),
    request = require('./request');

/**
 * Sets the oauth_token to the value that was provided by the callback
 * @param  {Object} options The callback's parameters
 * @return {Object}         The callback's parameters
 */
var setOauthToken = function setOauthToken(options) {
    config.set('oauth_token', options.oauth_token);
    return options;
};

module.exports = function (cb) {
   /* var requestData = {
        url:   'http://accounts.livingindietv.com/api/token',
        type: 'POST',
        postData: config.get('client_id')
        *//*params: {
            client_id: config.get('client_id')
        }*//*
    };
    request.start(requestData,{}, cb)*/
};