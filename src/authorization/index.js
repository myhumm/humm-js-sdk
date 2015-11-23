'use strict';


/**
 * Contains the three auth methods and helpers
 *
 * @type {exports}
 */


var qs      = require('query-string'),
    config  = require('./../config');

/**
 * Build the humm connect url
 *
 * @param  {Object} options The options that will be passed on to the connect screen
 * @return {String}         The constructed URL
 */
var createURL = function createURL(options) {
    return config.get('connectURL') + qs.stringify(options);
};

/**
 * //TODO: ses
 * Sets the oauth_token to the value that was provided by the callback
 *
 * @param  {Object} options The callback's parameters
 * @return {Object}         The callback's parameters
 */
var setOauthToken = function setOauthToken(oauth_token) {
    config.set('oauth_token', oauth_token);
};

/**
 * called upon redirect, extracts data from location and sets token
 *
 * @param location
 */
module.exports = {


    /**
     * Find and set token //todo rewrite
     *
     * @param location
     * @returns token else error
     */
    completeUserAuth:  function completeUserAuth(location) {
        var searchParams = qs.parse(location.search),
            hashParams = qs.parse(location.hash),
            oauth_token = searchParams.access_token || hashParams.access_token,
            error       = searchParams.error || hashParams.error;

        //todo refactor to support all three methods
        if (oauth_token){
            setOauthToken(oauth_token);
            return oauth_token
        }
        return error;
    },

    /**
     * Used by Authorization Code & Implicit Grant Flow to open a pop the enables the user to
     * auth using Humm
     *
     * @param options
     * @returns {*}
     */
    startUserAuth: function startUserAuth(options) {
        var width = 700,
            height = 600;
        var dialogOptions = {
                location    : 1,
                width       : width,
                height      : height,
                left        : window.screenX + (window.outerWidth - width) / 2,
                top         : window.screenY + (window.outerHeight - height) / 2,
                toolbar     : 'no',
                scrollbars  : 'yes'
            },
            stringOptions,
            url = createURL(options);

        stringOptions = Object.keys(dialogOptions).map(function (key) {
            return key + '=' + dialogOptions[key];
        }).join(', ');
        return window.open(url, 'PopUp', stringOptions);
    },


    /**
     *
     * @param code
     * @param cb
     */
    authorizationCode: function authorizationCode(code, cb){



    },


    /**
     *
     * @param token
     * @param cb
     */
    refreshAccessToken: function refreshAccessToken(token, cb) {



    },

    /**
     * Authorization Code Flow //todo
     *
     * @param options
     * @param cb
     * @returns {*}
     */
    clientCredentials: function clientCredentials(options, cb) {


    }
};