'use strict';

var config      = require('./src/config'),
    authorize   = require('./src/authorize'),
    artists     = require('./src/components/artists'),
    playlists   = require('./src/components/playlists'),
    songs       = require('./src/components/songs'),
    users       = require('./src/components/users'),
    external    = require('./src/components/external'),
    settings    = require('./src/components/settings'),
    request     = require('./src/request'),
    baseURL     = config.get('baseURL');

module.exports = global.humm = {
    initialize: function initialize(options) {
        // options = options ? options : {};
        // set tokens
     //   config.set('oauth_token', options.oauth_token);
          config.set('client_id', options.client_id);
       // config.set('baseURL', options.baseURL);
    },
    artists: artists,
    playlists: playlists,
    songs: songs,
    users: users,
    settings: settings,
    external: external,
    authorize: authorize,

    /**
     * TODO: waiting more docs
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
     * TODO: waiting more docs
     */
    groupSearch: function groupSearch() {

    },

    /**
     * TODO: waiting more docs
     */
    radio: function radio() {


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