'use strict';

var config  = require('../config'),
    request = require('../request'),
    baseURL = config.get('baseURL');

//todo all
var playlistEnds = [
    {
        "group": "Playlists / Albums",
        "name": "Create Playlist",
        "method": "humm.playlists.create()",
        "endpoint": "/playlists",
        "usage": "Add a playlist for the current user",
        "returns": "playlist"
    },
    {
        "group": "Playlists / Albums",
        "name": "Featured Playlists",
        "method": "humm.playlists.getFeatured()",
        "endpoint": "/playlists/featured",
        "usage": "Get a list of playlists featured by Humm",
        "returns": "playlists"
    },
    {
        "group": "Playlists / Albums",
        "name": "Playlist: Contributors (Add)",
        "method": "humm.playlists.addContributors()",
        "endpoint": "/playlists/{id}/contributors",
        "usage": "Add a user to a playlist's list of contributors"
    },
    {
        "group": "Playlists / Albums",
        "name": "Playlist: Contributors (Remove)",
        "method": "humm.playlists.removeContributors()",
        "endpoint": "/playlists/{id}/contributors",
        "usage": "Remove a user from a playlist's list of contributors"
    },
    {
        "group": "Playlists / Albums",
        "name": "Playlist: Details",
        "method": "humm.playlists.get()",
        "endpoint": "/playlists/{id}",
        "usage": "Get a playlist",
        "returns": "playlist"
    },
    {
        "group": "Playlists / Albums",
        "name": "Playlist: Edit",
        "method": "humm.playlists.update()",
        "endpoint": "/playlists/{id}",
        "usage": "Edit a playlist",
        "returns": "playlist"
    },
    {
        "group": "Playlists / Albums",
        "name": "Playlist: Order Songs",
        "method": "humm.playlists.order()",
        "endpoint": "/playlists/{id}/order",
        "usage": "Order the songs in a playlist",
        "returns": "playlist"
    },
    {
        "group": "Playlists / Albums",
        "name": "Playlist: Songs",
        "method": "humm.playlists.getSongs()",
        "endpoint": "/playlists/{id}/songs",
        "usage": "Get a list of playlist songs",
        "returns": "songs"
    },
    {
        "group": "Playlists / Albums",
        "name": "Playlist: Songs (Add)",
        "method": "humm.playlists.addSongs()",
        "endpoint": "/playlists/{id}/songs",
        "usage": "Add a song to a playlist"
    },
    {
        "group": "Playlists / Albums",
        "name": "Playlist: Songs (Remove)",
        "method": "humm.playlists.removeSongs()",
        "endpoint": "/playlists/{id}/songs",
        "usage": "Remove a song from a playlist"
    },
    {
        "group": "Playlists / Albums",
        "name": "Playlist: Subscriptions (Add)",
        "method": "humm.playlists.addSubscribers()",
        "endpoint": "/playlists/{id}/subscribers",
        "usage": "Add playlist to the list current user has subscriptions to"
    },
    {
        "group": "Playlists / Albums",
        "name": "Playlist: Subscriptions (Remove)",
        "method": "humm.playlists.removeSubscribers()",
        "endpoint": "/playlists/{id}/subscribers",
        "usage": "Remove playlist from the list current user has subscriptions to"
    },
    {
        "group": "Playlists / Albums",
        "name": "Popular Playlists",
        "method": "humm.playlists.getPopular()",
        "endpoint": "/playlists/popular",
        "usage": "Get a list of playlists popular on Humm",
        "returns": "playlists"
    },
    {
        "group": "Playlists / Albums",
        "name": "Recent Playlists",
        "method": "humm.playlists.getRecent()",
        "endpoint": "/playlists/recent",
        "usage": "Get a list of playlists recently added on Humm",
        "returns": "playlists"
    },
    {
        "group": "Playlists / Albums",
        "name": "Search Playlists / Albums",
        "method": "humm.playlists.search()",
        "endpoint": "/playlists",
        "usage": "Search Playlists / Albums",
        "returns": "playlists"
    },
    {
        "group": "Playlists / Albums",
        "name": "Staff-picked Playlists",
        "method": "humm.playlists.getStaffPicks()",
        "endpoint": "/playlists/staffpicks",
        "usage": "Get a list of playlists picked by staff at Humm",
        "returns": "playlists"
    }
];


module.exports = {


    /**
     * TODO: user auth
     * Add a playlist for the current user
     *
     * @param title
     * @param description
     * @param isPrivate
     * @param cb
     */
    create: function create(title, description, isPrivate, cb ) {
        var requestData = {
            url: baseURL + '/playlists',
            type: 'POST',
            params: {
                title: title,
                description: description,
                isPrivate: isPrivate
            }
        };
        request.start(requestData, cb)
    },

    /**
     * TODO: no response
     * Get a list of playlists featured by Humm
     *
     * @param options
     * @param cb
     */
    getFeatured: function getFeatured(options, cb) {
        var requestData = {
            url: baseURL + '/playlists/featured',
            type: 'GET',
            params: {}
        };
        request.start(requestData, options, cb)
    },

    /**
     * TODO: AUTH USER
     * add a user from a playlist's list of contributors
     * @param playlistId
     * @param ContributorId
     * @param cb
     */
    addContributors: function addContributors(playlistId, ContributorId, cb) {
        var requestData = {
            url: baseURL + '/'+ playlistId +'/contributors',
            type: 'POST',
            params: {
                contid: ContributorId
            }
        };
        request.start(requestData, cb)
    },

    /**
     * TODO: AUTH USER
     * Remove a user from a playlist's list of contributors
     *
     * @param playlistId
     * @param ContributorId
     * @param cb
     */
    removeContributors: function removeContributors(playlistId, ContributorId, cb) {
        var requestData = {
            url: baseURL + '/'+ playlistId +'/contributors',
            type: 'DELETE',
            params: {
                contid: ContributorId
            }
        };
        request.start(requestData, cb)
    },

    /**
     * TODO: no response
     * Get a playlist
     *
     * @param playlistId
     * @param options
     * @param cb
     */
    get: function update(playlistId, options, cb) {
        var requestData = {
            url: baseURL + '/playlists/' + playlistId,
            type: 'GET',
            params: {}
        };
        request.start(requestData, options, cb)
    },

    //TODO: waiting more detail in docs as
    update: function update() {


    },
    //TODO: waiting more detail in docs as
    order: function order() {


    },

    /**
     * Get a list of playlist songs
     *
     * @param playlistId
     * @param options
     * @param cb
     */
    getSongs: function getSongs(playlistId, options, cb) {
        var requestData = {
            url: baseURL + '/playlists/' + playlistId + '/songs',
            type: 'GET',
            params: {}
        };
        request.start(requestData, options, cb)
    },


    /**
     * Add a song to a playlist given their ids
     *
     * @param playlistId
     * @param songId
     * @param position
     * @param cb
     */
    addSongs: function addSongs(playlistId, songId, position, cb) {
        var requestData = {
            url: baseURL + '/playlists/' + playlistId + '/songs',
            type: 'POST',
            params: {
                sid: songId,
                position: position
            }
        };
        request.start(requestData, cb)
    },

    /**
     * Remove a song from a playlist
     *
     * @param playlistId
     * @param songId
     * @param cb
     */
    removeSongs: function removeSongs(playlistId, songId, cb) {
        var requestData = {
            url: baseURL + '/playlists/' + playlistId + '/songs',
            type: 'DELETE',
            params: {
                sid: songId
            }
        };
        request.start(requestData, cb)
    },


    /**
     * Add playlist to the list current user has subscriptions to
     *
     * @param playlistId
     * @param cb
     */
    addSubscribers: function addSubscribers(playlistId, cb) {
        var requestData = {
            url: baseURL + '/playlists/' + playlistId + '/subscribers',
            type: 'POST',
            params: {}
        };
        request.start(requestData, cb)
    },

    /**
     * Remove playlist to the list current user has subscriptions to
     *
     * @param playlistId
     * @param cb
     */
    removeSubscribers: function removeSubscribers(playlistId, cb) {
        var requestData = {
            url: baseURL + '/playlists/' + playlistId + '/subscribers',
            type: 'DELETE',
            params: {}
        };
        request.start(requestData, cb)
    },

    /**
     * Get a list of playlists popular on Humm
     *
     * @param options
     * @param cb
     */
    getPopular: function getPopular(options, cb) {
        var requestData = {
            url: baseURL + '/playlists/popular',
            type: 'GET',
            params: {}
        };
        request.start(requestData, options, cb)
    },

    /**
     * Get a list of playlists recently added on Humm
     *
     * @param options
     * @param cb
     */
    getRecent: function getRecent(options, cb) {
        var requestData = {
            url: baseURL + '/playlists/recent',
            type: 'GET',
            params: {}
        };
        request.start(requestData, options, cb)
    },

    /**
     * search for albums or playlists
     *
     * @param keyword
     * @param options
     * @param cb
     */
    search: function search(keyword, options, cb) {
        var requestData = {
            url: baseURL + '/playlists',
            type: 'GET',
            params: {
                keyword: keyword
            }
        };
        request.start(requestData, options, cb)
    },

    /**
     * Get a list of playlists picked by staff at Humm
     *
     * @param options
     * @param cb
     */
    getStaffPicks: function getStaffPicks(options, cb) {
        var requestData = {
            url: baseURL + '/staffpicks',
            type: 'GET',
            params: {}
        };
        request.start(requestData, options, cb)
    }
};