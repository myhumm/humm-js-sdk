'use strict';

var config  = require('../config'),
    request = require('../request'),
    baseURL = config.get('baseURL');

//todo remove
var artistEndPoints = [
    {
        "group": "Artists",
        "name": "Artist: Details",
        "method": "humm.artists.get()",
        "endpoint": "/artists/{id}",
        "usage": "Get an artist",
        "returns": "artist"
    },
    {
        "group": "Artists",
        "name": "Artist: Follower (Add)",
        "method": "humm.artists.addFollowers()",
        "endpoint": "/artists/{id}/followers",
        "usage": "Add current user to artist's list of followers",
        "returns": "artist"
    },
    {
        "group": "Artists",
        "name": "Artist: Follower (Remove)",
        "method": "humm.artists.removeFollowers()",
        "endpoint": "/artists/{id}/followers",
        "usage": "Remove current user from artist's list of followers",
        "returns": "artist"
    },
    {
        "group": "Artists",
        "name": "Artist: Playlists / Albums",
        "method": "humm.artists.getPlaylists()",
        "endpoint": "/artists/{id}/playlists",
        "usage": "Get playlists / albums associated with an artist",
        "returns": "playlists / albums"
    },
    {
        "group": "Artists",
        "name": "Artist: Radio",
        "method": "humm.artists.getRadio()",
        "endpoint": "/artists/{id}/radio",
        "usage": "Get a curated list of artists songs",
        "returns": "songs"
    },
    {
        "group": "Artists",
        "name": "Artist: Similar",
        "method": "humm.artists.getSimilar()",
        "endpoint": "/artists/{id}/similar",
        "usage": "Get a list of musically similar artists",
        "returns": "artists"
    },
    {
        "group": "Artists",
        "name": "Artist: Top Songs",
        "method": "humm.artists.getTopSongs()",
        "endpoint": "/artists/{id}/topsongs",
        "usage": "Get a list of an artist's top songs",
        "returns": "songs"
    },
    {
        "group": "Artists",
        "name": "Featured Artists",
        "method": "humm.artists.getFeatured()",
        "endpoint": "/artists/featured",
        "usage": "Get a list of artists featured by Humm",
        "returns": "artists"
    },
    {
        "group": "Artists",
        "name": "Popular Artists",
        "method": "humm.artists.getPopular()",
        "endpoint": "/artists/popular",
        "usage": "Get a list of artists popular on Humm",
        "returns": "artists"
    },
    {
        "group": "Artists",
        "name": "Recent Artists",
        "method": "humm.artists.getRecent()",
        "endpoint": "/artists/recent",
        "usage": "Get a list of artists recently added on Humm",
        "returns": "artists"
    },
    {
        "group": "Artists",
        "name": "Search Artists",
        "method": "humm.artists.search()",
        "endpoint": "/artists",
        "usage": "Search for an artist",
        "returns": "artists"
    }
];

module.exports = {

    /**
     * Find an artist
     *
     * @param artistId
     * @param cb
     */
    get: function get(artistId, cb) {
        var requestData = {
                url: baseURL + '/artists/' + artistId,
                type: 'GET',
                params: {}
        };
        request.start(requestData,cb)
    },

    /**
     * TODO: user auth
     * @param artistId
     * @param cb
     */
    addFollowers: function addFollowers(artistId, cb) {

    },

    /**
     * TODO: user auth
     *
     * @param artistId
     * @param cb
     */
    removeFollowers: function removeFollowers(artistId, cb) {

    },

    /**
     * Get playlists / albums associated with an artist
     *
     * @param artistId
     * @param {Object} options A JSON object with options that can be passed
     * @param cb
     */
    getPlaylists: function getPlaylists(artistId, options, cb) {
        var requestData = {
                url: baseURL + '/artists/' + artistId + '/playlists',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb)
    },

    /**
     * Get a curated list of artists songs
     *
     * @param artistId
     * @param cb
     */
    getRadio: function getRadio(artistId, cb) {
        var requestData = {
                url: baseURL + '/artists/' + artistId + '/radio',
                type: 'GET',
                params: {}
        };
        request.start(requestData,cb)
    },


    /**
     * Get a list of musically similar artists
     *
     * @param artistId
     * @param cb
     */
    getSimilar: function getSimilar(artistId, cb) {
        var requestData = {
                url: baseURL + '/artists/' + artistId + '/similar',
                type: 'GET',
                params: {}
        };
        request.start(requestData,cb)

    },

    /**
     * Get a list of an artist's top songs
     *
     * @param artistId
     * @param {Object} options A JSON object with options that can be passed
     * @param cb
     */
    getTopSongs: function similar(artistId, options, cb) {
        var requestData = {
                url: baseURL + '/artists/' + artistId + '/topsongs',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    },

    /**
     * //TODO: no response
     * Get a list of artists featured by Humm"
     *
     * @param {Object} options A JSON object with options that can be passed
     * @param cb
     */
    getFeatured: function(options, cb) {
        var requestData = {
                url: baseURL + '/artists/featured',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb)
    },

    /**
     * Get a list of artists popular on Humm
     *
     * @param {Object} options A JSON object with options that can be passed
     * @param cb
     */
    getPopular: function(options, cb) {
        var requestData = {
                url: baseURL + '/artists/popular',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb)
    },

    /**
     * Get a list of artists recently added on Humm
     *
     * @param {Object} options A JSON object with options that can be passed
     * @param cb
     */
    getRecent: function(options, cb) {
        var requestData = {
                url: baseURL + '/artists/recent',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb)
    },

    /**
     * TODO: test once v2 is spinning
     * Search for an artist using keyword
     *
     * @param keyword
     * @param {Object} options A JSON object with options that can be passed
     * @param cb
     */
    search: function(keyword, options, cb) {
        var requestData = {
                url: baseURL + '/artists',
                type: 'GET',
                params: {
                    keyword: keyword
            }
        };
        request.start(requestData, options, cb)
    }
};

