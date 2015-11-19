'use strict';

var config      = require('./src/config'),
    authorize   = require('./src/authorize'),
    artists     = require('./src/components/artists'),
    playlists   = require('./src/components/playlists'),
    songs       = require('./src/components/songs'),
    users        = require('./src/components/users');

module.exports = global.humm = {
    initialize: function initialize(options) {
        // options = options ? options : {};
        // set tokens
     //   config.set('oauth_token', options.oauth_token);
     //   config.set('client_id', options.client_id);
       // config.set('baseURL', options.baseURL);
    },
    artists: artists,
    playlists: playlists,
    songs: songs,
    users: users,
    authorize: authorize
};