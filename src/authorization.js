'use strict';

var qs      = require('query-string'),
    config  = require('./config'),
    scopes  = [
        'playlist-read-private',
        'playlist-read-collaborative',
        'playlist-modify-public',
        'playlist-modify-private',
        'streaming',
        'user-follow-modify',
        'user-follow-read',
        'user-library-read',
        'user-library-modify',
        'user-read-private',
        'user-read-birthdate',
        'user-read-email'
    ];


/**
 * TODO:
 * Generates an id for the auth pop, id used as a state upon redirect we can verify we sent the request using the id
 * @return {String} id
 */

var generateId = function generateId() {
    return ['humm', Math.ceil(Math.random() * 1000000).toString(16)].join('_');
};


/**
 * Build the humm connect url
 *
 * @param  {Object} options The options that will be passed on to the connect screen
 * @return {String}         The constructed URL
 */
var createURL = function createURL(options) {
    return config.get('accountURL') + '/authorize?' + qs.stringify(options);
};


/**
 * called upon redirect, extracts data from location and sets token
 *
 * @param location
 */
module.exports = {


    /**
     * Extract params and store for later usage
     *
     * @param location
     * @returns token else error
     */
    completeUserAuth:  function completeUserAuth(location) {
        /**
         *  TODO: issue with inconsistent response issue #1
         *
         *  http://localhost:8080/webpack-dev-server/connectComplete.html#access_token=56544ca8ae8c50b9731778a4&token_type=Bearer&expires=1450957224&expires_in=2592000
         *
         *  http://localhost:8080/webpack-dev-server/connectComplete.html?code=fawH8KlfOjqMJzPvj/IIUJHtrfFwgblBZZCFQisbRng=&expires=1448368840&expires_in=3600
         */
        var params =  qs.parse(location.hash),
            search =  qs.parse(location.search);

        console.log('------------User auth ---------');
        console.log(params);
        console.log(location);

        //if authViaImplicitGrant than get token and set, else save code
        if(params.token_type === 'Bearer') {
           // console.log(params.access_token);
           // console.log(params.expires);
           // console.log(params.expires_in);
            config.set('access_token', params.access_token);
            config.set('expires', params.expires);
            config.set('expires_in', params.expires_in);
        } else {
            //authorization_code //fix in case issue #1 is resolved
            config.set('code', search.code || params.code);
        }
    },

    /**
     * Used by Authorization Code & Implicit Grant Flow to open a pop the enables the user to
     * auth using Humm
     *
     * @param options
     * @param cb called upon closing window.
     * @returns {*}
     */
    startUserAuth: function startUserAuth(options, cb) {

        //set undefined and poll later to find out when to close auth window
        config.set('access_token', '');
        config.set('code', '');

     /* console.log('----------------Resetting Cred -----------');
        console.log(config.get('oauth_token'));
        console.log(config.get('code'));
    */
        //attach scope to params
        options.scopes =  scopes.join(' ');

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

        //console.log(url);
        //check twice per second, if window is closed means auth is complete we can
        var authWindow  = window.open(url, '', stringOptions),
            timer       = setInterval(checkAuthWindow, 500);
        /**
         * Not my fav solution
         */
        function checkAuthWindow() {
            if (options.response_type === 'token') {
                //check if token has been set
                var access_token = config.get('access_token');
                if(access_token !== '') {
                    cb(false, {
                        access_token :  access_token,
                        expires      :  config.get('expires'),
                        expires_in   :  config.get('expires_in')
                    });
                    clearInterval(timer);
                    authWindow.close();
                }
            }else{
                //check if code has been set
                var code = config.get('code');
                if(code !== '') {
                    cb(false, {
                        code :  code
                    });
                    clearInterval(timer);
                    authWindow.close();
                }
            }
        }
    }
};