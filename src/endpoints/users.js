'use strict';

var config  = require('../config'),
    request = require('../request'),
    baseURL = config.get('baseURL');

module.exports = {

    /**
     * Get the current user
     *
     * @param cb
     */
    me: function me(cb) {
        var requestData = {
                url: baseURL + '/users/me',
                type: 'GET',
                params: {}
        };
        request.start(requestData, cb);
    },

    /**
     * Get a list of recommended albums
     *
     * @param options { limit, offset }
     * @param cb
     */
    discoverReleases: function discoverReleases(options, cb) {
        var requestData = {
                url: baseURL + '/users/me/discover/releases',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    },

    /**
     * Get a list of recommended artists
     *
     * @param options { limit, offset }
     * @param cb
     */
    discoverArtists: function discoverArtists(options, cb) {
        var requestData = {
                url: baseURL + '/users/me/discover/artists',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    },

    /**
     * Get a list of recommended playlists / albums
     *
     * @param options { limit, offset }
     * @param cb
     */
    discoverPlaylists: function discoverPlaylists(options, cb) {
        var requestData = {
                url: baseURL + '/users/me/discover/playlists',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    },

    /**
     * Add song to current user favourites
     *
     * @param songId
     * @param cb
     */
    addFavourites: function addFavourites(songId, cb) {
        var requestData = {
                url: baseURL + '/songs/'+ songId +'/favourites',
                type: 'POST',
                params: {}
        };
        request.start(requestData, cb);
    },

    /**
     * Add user to the list current user is following
     *
     * @param userId
     * @param cb
     */
    addFollowing: function addFollowing(userId, cb) {
        var requestData = {
                url: baseURL + '/users/'+ userId +'/following',
                type: 'POST',
                params: {}
        };
        request.start(requestData, cb);
    },

    /**
     * Remove user from the list current user is following
     *
     * @param userId
     * @param cb
     */
    removeFollowing: function removeFollowing(userId, cb) {
        var requestData = {
                url: baseURL + '/users/'+ userId +'/following',
                type: 'DELETE',
                params: {}
        };
        request.start(requestData, cb);
    },

    /**
     * Add song to the list of the current user's plays
     *
     * @param songId
     * @param cb
     */
    addPlays: function addPlays(songId, cb) {
        var requestData = {
                url: baseURL + '/songs/'+ songId +'/plays',
                type: 'POST',
                params: {}
        };
        request.start(requestData, cb);
    },

    /**
     * Search for a user
     *
     * @param keyword
     * @param options { limit, offset }
     * @param cb
     */
    search: function search(keyword, options, cb) {
        var requestData = {
                url: baseURL + '/users',
                type: 'GET',
                params: {
                    keyword: keyword
                }
        };
        request.start(requestData, options, cb);
    },

    /**
     * Add user to the list current user has subscriptions to
     *
     * @param playlistId
     * @param cb
     */
    addSubscriptions: function addSubscriptions(playlistId, cb) {
        var requestData = {
                url: baseURL + '/users/'+ playlistId +'/subscriptions',
                type: 'POST',
                params: {}
        };
        request.start(requestData, cb);
    },

    /**
     * Remove user from the list current user has subscriptions to
     *
     * @param playlistId
     * @param cb
     */
    removeSubscriptions: function removeSubscriptions(playlistId, cb) {
        var requestData = {
                url: baseURL + '/users/'+ playlistId +'/subscriptions',
                type: 'DELETE',
                params: {}
        };
        request.start(requestData, cb);
    },

    /**
     * Get a user; returns a user object for a given id
     *
     * @param userId
     * @param cb
     */
    get: function get(userId, cb) {
        var requestData = {
                url: baseURL + '/users/'+ userId ,
                type: 'GET',
                params: {}
        };
        request.start(requestData, cb);
    },

    /**
     * Get a user's favourite songs; returns a list of song objects
     *
     * @param userId
     * @param options { limit, offset }
     * @param cb
     */
    getFavourites: function getFavourites(userId, options, cb) {
        var requestData = {
                url: baseURL + '/users/'+ userId + '/favourites' ,
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    },

    /**
     * Get a list of the users a user is following; returns a list of user objects for a given id
     *
     * @param userId
     * @param options
     * @param cb
     */
    getFollowing: function getFollowing(userId, options, cb) {
        var requestData = {
                url: baseURL + '/users/'+ userId + '/following' ,
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    },

    /**
     * Get a list of user owned playlists
     *
     * @param userId
     * @param options
     * @param cb
     */
    getPlaylists: function getPlaylists(userId, options, cb) {
        var requestData = {
                url: baseURL + '/users/'+ userId + '/playlists' ,
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    },

    /**
     * Get a list of a user's plays
     *
     * @param userId
     * @param options
     * @param cb
     */
    getPlays: function getPlays(userId, options, cb) {
        var requestData = {
                url: baseURL + '/users/'+ userId + '/plays' ,
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    }
};