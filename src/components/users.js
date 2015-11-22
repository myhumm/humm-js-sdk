'use strict';

var config  = require('../config'),
    request = require('../request'),
    baseURL = config.get('baseURL');

//todo all users
var usersEnds = [
    {
        "group": "Users",
        "name": "Current User",
        "method": "humm.users.me()",
        "endpoint": "/users/me",
        "usage": "Get the current user",
        "returns": "user"
    },
    {
        "group": "Users",
        "name": "Discover Album Releases",
        "method": "humm.users.discoverReleases()",
        "endpoint": "/users/me/discover/releases",
        "usage": "Get a list of recommended albums",
        "returns": "albums"
    },
    {
        "group": "Users",
        "name": "Discover Artists",
        "method": "humm.users.discoverArtists()",
        "endpoint": "/users/me/discover/artists",
        "usage": "Get a list of recommended artists",
        "returns": "artists"
    },
    {
        "group": "Users",
        "name": "Discover Playlists / Albums",
        "method": "humm.users.discoverPlaylists()",
        "endpoint": "/users/me/discover/playlists",
        "usage": "Get a list of recommended playlists / albums",
        "returns": "playlists / albums"
    },
    {
        "group": "Users",
        "name": "Favourites (Add)",
        "method": "humm.users.addFavourites()",
        "endpoint": "/songs/{id}/favourites",
        "usage": "Add song to current user favourites",
        "returns": "song"
    },
    {
        "group": "Users",
        "name": "Following (Add User)",
        "method": "humm.users.addFollowing()",
        "endpoint": "/users/{id}/following",
        "usage": "Add user to the list current user is following",
        "returns": "user"
    },
    {
        "group": "Users",
        "name": "Following (Remove User)",
        "method": "humm.users.removeFollowing()",
        "endpoint": "/users/{id}/following",
        "usage": "Remove user from the list current user is following",
        "returns": "user"
    },
    {
        "group": "Users",
        "name": "Plays (Add)",
        "method": "humm.users.addPlays()",
        "endpoint": "/songs/{id}/plays",
        "usage": "Add song to the list of the current user's plays",
        "returns": "song"
    },
    {
        "group": "Users",
        "name": "Search Users",
        "method": "humm.users.search()",
        "endpoint": "/users",
        "usage": "Search for a user",
        "returns": "users"
    },
    {
        "group": "Users",
        "name": "Subscriptions (Add)",
        "method": "humm.users.addSubscriptions()",
        "endpoint": "/users/{id}/subscriptions",
        "usage": "Add user to the list current user has subscriptions to",
        "undefined": "Incorrect url"
    },
    {
        "group": "Users",
        "name": "Subscriptions (Remove)",
        "method": "humm.users.removeSubscriptions()",
        "endpoint": "/users/{id}/subscriptions",
        "usage": "Remove user from the list current user has subscriptions to",
        "undefined": "Incorrect url"
    },
    {
        "group": "Users",
        "name": "User: Details",
        "method": "humm.users.get()",
        "endpoint": "/users/{id}",
        "usage": "Get a user",
        "returns": "user"
    },
    {
        "group": "Users",
        "name": "User: Favourites",
        "method": "humm.users.getFavourites()",
        "endpoint": "/users/{id}/favourites",
        "usage": "Get a user's favourite songs",
        "returns": "songs"
    },
    {
        "group": "Users",
        "name": "User: Following",
        "method": "humm.users.getFollowing()",
        "endpoint": "/users/{id}/following",
        "usage": "Get a list of the users a user is following",
        "returns": "users"
    },
    {
        "group": "Users",
        "name": "User: Playlists",
        "method": "humm.users.getPlaylists()",
        "endpoint": "/users/{id}/playlists",
        "usage": "Get a list of user owned playlists",
        "returns": "playlists"
    },
    {
        "group": "Users",
        "name": "User: Plays",
        "method": "humm.users.getPlays()",
        "endpoint": "/users/{id}/plays",
        "usage": "Get a list of a user's plays",
        "returns": "songs"
    }
];

//TODO TEST all ends once auth is done
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
        request.start(requestData, cb)
    },

    /**
     * Get a list of recommended albums
     *
     * @param options
     * @param cb
     */
    discoverReleases: function discoverReleases(options, cb) {
        var requestData = {
            url: baseURL + '/users/me/discover/releases',
            type: 'GET',
            params: {}
        };
        request.start(requestData, options, cb)
    },

    /**
     * Get a list of recommended artists
     *
     * @param options
     * @param cb
     */
    discoverArtists: function discoverArtists(options, cb) {
        var requestData = {
            url: baseURL + '/users/me/discover/artists',
            type: 'GET',
            params: {}
        };
        request.start(requestData, options, cb)
    },

    /**
     * Get a list of recommended playlists / albums
     *
     * @param options
     * @param cb
     */
    discoverPlaylists: function discoverPlaylists(options, cb) {
        var requestData = {
            url: baseURL + '/users/me/discover/playlists',
            type: 'GET',
            params: {}
        };
        request.start(requestData, options, cb)
    },

    /**
     * TODO: Feels like this should be in the songs group
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
        request.start(requestData, options, cb)
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
        request.start(requestData, options, cb)
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
        request.start(requestData, options, cb)
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
        request.start(requestData, options, cb)
    },

    /**
     * Search for a user
     *
     * @param keyword
     * @param options
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
        request.start(requestData, options, cb)
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
        request.start(requestData, options, cb)
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
        request.start(requestData, options, cb)
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
     * @param cb
     */
    getFavourites: function getFavourites(userId, cb) {
        var requestData = {
            url: baseURL + '/users/'+ userId + '/favourites' ,
            type: 'GET',
            params: {}
        };
        request.start(requestData, cb);
    },

    /**
     * Get a list of the users a user is following; returns a list of user objects for a given id
     *
     * @param userId
     * @param cb
     */
    getFollowing: function getFollowing(userId, cb) {
        var requestData = {
            url: baseURL + '/users/'+ userId + '/following' ,
            type: 'GET',
            params: {}
        };
        request.start(requestData, cb);
    },

    /**
     * Get a list of user owned playlists
     *
     * @param userId
     * @param cb
     */
    getPlaylists: function getPlaylists(userId, cb) {
        var requestData = {
            url: baseURL + '/users/'+ userId + '/playlists' ,
            type: 'GET',
            params: {}
        };
        request.start(requestData, cb);
    },

    /**
     * Get a list of a user's plays
     *
     * @param userId
     * @param cb
     */
    getPlays: function getPlays(userId, cb) {
        var requestData = {
            url: baseURL + '/users/'+ userId + '/plays' ,
            type: 'GET',
            params: {}
        };
        request.start(requestData, cb);
    }
};