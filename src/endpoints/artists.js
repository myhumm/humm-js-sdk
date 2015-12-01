'use strict';

var config  = require('../config'),
    request = require('../request'),
    baseURL = config.get('baseURL');

module.exports = {
    /**
     * Find an artist
     *
     * @param artistId
     * @param options { limit, offset }
     * @param cb
     */
    'get': function get(artistId, options, cb) {
        var requestData = {
                url: baseURL + '/artists/' + artistId,
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    },

    /**
     * Add current user to artist's list of followers
     *
     * @param artistId
     * @param cb
     */
    addFollowers: function addFollowers(artistId, cb) {
        var requestData = {
                url: baseURL + '/artists/' + artistId + '/followers',
                type: 'POST',
                params: {}
        };
        request.start(requestData, cb);
    },

    /**
     * Remove current user from artist's list of followers
     *
     * @param artistId
     * @param cb
     */
    removeFollowers: function removeFollowers(artistId, cb) {
        var requestData = {
                url: baseURL + '/artists/' + artistId + '/followers',
                type: 'DELETE',
                params: {}
        };
        request.start(requestData, cb);
    },

    /**
     * Get playlists / albums associated with an artist
     *
     * @param artistId
     * @param options { limit, offset }
     * @param cb
     */
    getPlaylists: function getPlaylists(artistId, options, cb) {
        var requestData = {
                url: baseURL + '/artists/' + artistId + '/playlists',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    },

    /**
     * Get a curated list of artists songs
     *
     * @param artistId
     * @param options { limit, offset }
     * @param cb
     */
    getRadio: function getRadio(artistId, options, cb) {
        var requestData = {
                url: baseURL + '/artists/' + artistId + '/radio',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    },


    /**
     * Get a list of musically similar artists
     *
     * @param artistId
     * @param options { limit, offset }
     * @param cb
     */
    getSimilar: function getSimilar(artistId, options, cb) {
        var requestData = {
                url: baseURL + '/artists/' + artistId + '/similar',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);

    },

    /**
     * Get a list of an artist's top songs
     *
     * @param artistId
     * @param options { limit, offset, songtype }
     * @param cb
     */
    getTopSongs: function getTopSongs(artistId, options, cb) {
        var requestData = {
                url: baseURL + '/artists/' + artistId + '/topsongs',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    },

    /**
     * Get a list of artists featured by Humm
     *
     * @param options { limit, offset, genre }
     * @param cb
     */
    getFeatured: function getFeatured(options, cb) {
        var requestData = {
                url: baseURL + '/artists/featured',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    },

    /**
     * Get a list of artists popular on Humm
     *
     * @param options { limit, offset }
     * @param cb
     */
    getPopular: function getPopular(options, cb) {
        var requestData = {
                url: baseURL + '/artists/popular',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    },

    /**
     * Get a list of artists recently added on Humm
     *
     * @param options { limit, offset }
     * @param cb
     */
    getRecent: function getRecent(options, cb) {
        var requestData = {
                url: baseURL + '/artists/recent',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    },

    /**
     * Search for an artist using keyword
     *
     * @param keyword
     * @param options { limit, offset }
     * @param cb
     */
    search: function search(keyword, options, cb) {
        var requestData = {
                url: baseURL + '/artists',
                type: 'GET',
                params: {
                    keyword: keyword
            }
        };
        request.start(requestData, options, cb);
    }
};

