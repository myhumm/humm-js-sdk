'use strict';

var qs      = require('query-string'),
    config  = require('./config');

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
     * Find and set token
     *
     * @param location
     * @returns token else error
     */
    complete:  function complete(location) {
        var searchParams = qs.parse(location.search),
            hashParams = qs.parse(location.hash),
            oauth_token = searchParams.access_token || hashParams.access_token,
            error       = searchParams.error || hashParams.error;
        if (oauth_token){
            setOauthToken(oauth_token);
            return oauth_token
        }
        return error;
    },


    /**
     * open pop up
     *
     * @param options
     * @returns {*}
     */
    start: function start(options) {
        var width = 456,
            height = 510;
        var dialogOptions = {
                width       : width,
                height      : height,
                left        : window.screenX + (window.outerWidth - width) / 2,
                top         : window.screenY + (window.outerHeight - height) / 2,
                toolbar     : 'no',
                scrollbars  : 'yes',
                menubar     : 'no',
                location    : 'no'
            },
            stringOptions,
            url = createURL(options);

        stringOptions = Object.keys(dialogOptions).map(function (key) {
            return key + '=' + dialogOptions[key];
        }).join(', ');
        return window.open(url, '', stringOptions);
    }
};