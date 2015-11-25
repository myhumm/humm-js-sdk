'use strict';

var config          = require('./src/config'),
    authorization   = require('./src/authorization'),
    artists         = require('./src/endpoints/artists'),
    playlists       = require('./src/endpoints/playlists'),
    songs           = require('./src/endpoints/songs'),
    users           = require('./src/endpoints/users'),
    external        = require('./src/endpoints/external'),
    settings        = require('./src/endpoints/settings'),
    request         = require('./src/request'),
    baseURL         = config.get('baseURL');

module.exports = global.humm = {

    /**
     * initialise  humm
     *
     * @param options
     */
    init: function init(options) {
        config.set('oauth_token', options.oauth_token);

        config.set('client_id', options.client_id);
        config.set('client_secret', options.client_secret);

        config.set('redirect_uri', options.redirect_uri);
        config.set('baseURL', options.baseURL || 'http://api.myhumm.com');
        config.set('connectURL', options.connectURL || 'http://accounts.livingindietv.com');

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
    },

    /**
     * check if token has been set
     *
     * @returns {boolean}
     */
    isAuthorised: function isAuthorised(){
        return config.get('oauth_token') !== undefined;
    },


    /**
     * connect with humm via implicit grant and return
     *
     * @param cb called with two params (error, response) upon auth complete (window.close()) ,
     * response is an object with { oauth_token, token_type, expires_in state}
     *
     * @returns {*}
     */
    authViaImplicitGrant: function authViaImplicitGrant(cb) {
        if(typeof window !== 'undefined') {
            var options = {
                client_id: config.get('client_id'),
                redirect_uri: config.get('redirect_uri'),
                response_type: 'token'
            };

            // `client_id` and `redirect_uri` have to be passed
            if (!options.client_id || !options.redirect_uri) {
                throw new Error('Options client_id and redirect_uri must be passed');
            }
            authorization.startUserAuth(options, cb)

        } else {
            throw new Error('This function is only accessible on client side');
        }
    },


    /**
     * connect with humm via Authorization Code Flow
     *
     * @param cb called with two params (error, response) upon auth complete (window.close()) ,
     * response is an object with { code }
     *
     * @returns {*}
     */
    authViaCodeGrant: function authViaCodeGrant(cb) {
        if(typeof window !== 'undefined') {
            var options = {
                client_id: config.get('client_id'),
                redirect_uri: config.get('redirect_uri'),
                response_type: 'code'
            };

            // `client_id` and `redirect_uri` have to be passed
            if (!options.client_id || !options.redirect_uri) {
                throw new Error('Options client_id and redirect_uri must be passed');
            }
            authorization.startUserAuth(options, cb)
        } else {
            throw new Error('This function is only accessible on client side');
        }
    },

    /**
     * Called upon loading the redirect uri page
     *
     * @param location
     */
    completeAuthorization:  function completeAuthorization(location){
        authorization.completeUserAuth(location);
    },

    /**
     * //TODO test on server env
     * Request an access token using the Authorization Code flow.
     *
     * @param code
     * @param cb
     */
    accessViaCodeGrant: function accessViaCodeGrant(code, cb) {
        if(typeof window === 'undefined') {
            var requestData = {
                    url: config.get('connectURL') + '/api/token',
                    type: 'POST',
                    postData: {
                        grant_type: 'authorization_code',
                        code: code,
                        redirect_uri: config.get('redirect_uri')
                    },
                    clientCredentials: true
            };
            request.start(requestData, cb);
        } else {
            throw new Error('This function is only accessible on server side');
        }
    },

    /**
     * //TODO test on server env
     * Auth via Client Credentials Flow
     *
     * @param cb
     */
    authViaClientCredentials: function authViaClientCredentials(cb) {
        if(typeof window === 'undefined') {
            var requestData = {
                    url: config.get('connectURL') + '/api/token',
                    type: 'POST',
                    postData: {
                        grant_type: 'client_credentials'
                    },
                    clientCredentials: true
            };
            request.start(requestData, cb);
        } else {
            throw new Error('This function is only accessible on server side');
        }
    },

    /**
     * //TODO test on server env
     * Refresh the access token given that it hasn't expired.
     *
     * @param token
     * @param cb
     */
    refreshAccessToken: function refreshAccessToken(token, cb) {
        if(typeof window === 'undefined') {
            var requestData = {
                    url: config.get('connectURL') + '/api/token',
                    type: 'POST',
                    postData: {
                        grant_type: 'refresh_token',
                        refresh_token: token
                },
                    clientCredentials: true
            };
            request.start(requestData, cb);
        } else {
            throw new Error('This function is only accessible on server side');
        }
    },

    /**
     * Set Access token for future requests
     *
     * @param token
     */
    setAccessToken: function setAccessToken(token) {
        config.set('oauth_token', token);
    },


    //----------------- Start of endpoints functionality  ---------------
    artists: artists,
    playlists: playlists,
    songs: songs,
    users: users,
    settings: settings,
    external: external,

    /**
     * Search all //TODO: extra params
     *
     * @param keyword
     * @param options
     * @param cb
     */
    search: function search(keyword, options, cb) {
        var requestData = {
                url: baseURL + '/search',
                type: 'GET',
                params: {
                    keyword: keyword
            }
        };
        request.start(requestData, options, cb)
    },


    /**
     * Search all grouped by type //TODO: extra params
     *
     * @param keyword
     * @param options
     * @param cb
     */
    groupSearch: function groupSearch(keyword, options, cb) {
        var requestData = {
                url: baseURL + '/grouped-search',
                type: 'GET',
                params: {
                    keyword: keyword
            }
        };
        request.start(requestData, options, cb)
    },


    /**
     * Get a list of songs for a radio
     *
     * @param options
     * @param cb
     */
    radio: function radio(options, cb) {
        var requestData = {
                url: baseURL + '/radio',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb)
    }
};

/**
 {
       "group": "Others",
       "name": "Search",
       "method": "humm.others.search()",
       "endpoint": "/search",
       "usage": "Search all",
       "returns": "*multiple"
   },
 {
     "group": "Others",
     "name": "Radio",
     "method": "humm.others.radio()",
     "endpoint": "/radio",
     "usage": "Get a list of songs for a radio",
     "returns": "songs"
 },
 {
     "group": "Others",
     "name": "Grouped-search",
     "method": "humm.others.groupSearch()",
     "endpoint": "/grouped-search",
     "usage": "Search all grouped by type",
     "returns": "*multiple"
 },
 */