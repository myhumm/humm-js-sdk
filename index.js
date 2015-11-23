'use strict';

var config      = require('./src/config'),
    connect     = require('./src/connect'),
    artists     = require('./src/endpoints/artists'),
    playlists   = require('./src/endpoints/playlists'),
    songs       = require('./src/endpoints/songs'),
    users       = require('./src/endpoints/users'),
    external    = require('./src/endpoints/external'),
    settings    = require('./src/endpoints/settings'),
    request     = require('./src/request'),
    baseURL     = config.get('baseURL');

module.exports = global.humm = {

    /**
     * initialise  humm
     *
     * @param options
     */
    init: function init(options) {
        //config.set('oauth_token', options.oauth_token);
        config.set('client_id', options.client_id);
        config.set('redirect_uri', options.redirect_uri);
        //config.set('baseURL', options.baseURL);
        //config.set('connectURL', options.connectURL);
    },

    /**
     * check if user is connected
     *
     * @returns {boolean}
     */
    isConnected: function isAuthorised(){
        return config.get('oauth_token') !== undefined;
    },


    /**
     * connect with humm
     *
     * @returns {*}
     */
    connect: function() {
        var options = {
            client_id: config.get('client_id'),
            redirect_uri: config.get('redirect_uri'),
            response_type: 'token'
        };

        // `client_id` and `redirect_uri` have to be passed
        if (!options.client_id || !options.redirect_uri) {
            throw new Error('Options client_id and redirect_uri must be passed');
        }
      return connect.start(options)
    },


    /**
     * Called upon redirect, extracts oauth token from url and set's it for future requests
     *
     * @returns {token}
     */
    completeConnect: function(){
       return connect.complete(this.location)
    },

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

/*

curl --get --include 'https://humm-api.p.mashape.com/artists/55116991f9c816a0d639ea75?auth=564dc328af59fc5215984f7a' \
-H 'X-Mashape-Key: V9BZDbxMrNmshvvlWRF6izQMMaCqp1L2sdXjsnjlypurv3PWJe'*/

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