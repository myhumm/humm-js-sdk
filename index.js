'use strict';

var config    = require('./src/config'),
    artist    =  require('./src/artist'),
    playlist  =  require('./src/playlist'),
    users     =  require('./src/users'),
    songs     =  require('./src/songs');

module.exports = global.HUMM = {
  initialize: function initialize(options) {
    options = options ? options : {};
    // set tokens
    config.set('oauth_token', options.oauth_token);
    config.set('client_id', options.client_id);
    config.set('redirect_uri', options.redirect_uri);
    config.set('baseURL', options.baseURL);
    config.set('connectURL', options.connectURL);
  },
  users: function users(){
    return users;
  },
  artist: function artist(){
    return artist;
  },
  playlist: function playlist(){
    return playlist;
  },
  songs: function songs(){
      return songs;
  }
};