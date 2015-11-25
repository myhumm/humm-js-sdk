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
        config.set('baseURL', options.baseURL || 'http://134.213.62.164:8080');
      //  config.set('baseURL', options.baseURL || 'http://api.myhumm.com');
        config.set('connectURL', options.connectURL || 'http://accounts.livingindietv.com');
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
     * @param cb called with two params (error, response) upon auth complete
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
            authorization.startUserAuth(options, cb);
        } else {
            throw new Error('This function is only accessible on client side');
        }
    },


    /**
     * connect with humm via Authorization Code Flow
     *
     * @param cb called with two params (error, response) upon auth complete
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
            authorization.startUserAuth(options, cb);
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

    /**
     * Get a list of songs for a radio
     *
     * @param options { limit, genres (string / list of strings), moods (string / list of strings), discovery (bool), own (bool) }
     * @param cb
     */
    radio: function radio(options, cb) {
        var requestData = {
                url: baseURL + '/radio',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    },

    artists: artists,
    playlists: playlists,
    songs: songs,
    users: users,
    settings: settings,
    external: external
};