'use strict';

var config  = require('../config'),
    request = require('../request'),
    baseURL = config.get('baseURL');


//todo ends
var songsEnds = [
    {
        "group": "Songs",
        "name": "Featured Songs",
        "method": "humm.songs.getFeatured()",
        "endpoint": "/songs/featured",
        "usage": "Get a llist of songs featured by Humm",
        "returns": "songs"
    },
    {
        "group": "Songs",
        "name": "Popular Songs",
        "method": "humm.songs.getPopular()",
        "endpoint": "/songs/popular",
        "usage": "Get a list of songs popular on Humm",
        "returns": "songs"
    },
    {
        "group": "Songs",
        "name": "Recent Songs",
        "method": "humm.songs.getRecent()",
        "endpoint": "/songs/recent",
        "usage": "Get a list of songs recently added on Humm",
        "returns": "songs"
    },
    {
        "group": "Songs",
        "name": "Search Songs",
        "method": "humm.songs.search()",
        "endpoint": "/songs",
        "usage": "Search for a song",
        "returns": "songs"
    },
    {
        "group": "Songs",
        "name": "Song: Appears In",
        "method": "humm.songs.appearsIn()",
        "endpoint": "/songs/{id}/appearsin",
        "usage": "Get a list of playlists a song appears in",
        "returns": "playlists"
    },
    {
        "group": "Songs",
        "name": "Song: Route",
        "method": "humm.songs.route()",
        "endpoint": "/songs/{id}/route",
        "usage": "?",
        "returns": "?"
    },
    {
        "group": "Songs",
        "name": "Song: Details",
        "method": "humm.songs.get()",
        "endpoint": "/songs/{id}",
        "usage": "Get a song",
        "returns": "song"
    },
    {
        "group": "Songs",
        "name": "Song: Similar",
        "method": "humm.songs.getSimilar()",
        "endpoint": "/songs/{id}/similar",
        "usage": "Get a list of similar songs",
        "returns": "songs"
    },
    {
        "group": "Songs",
        "name": "Staff-picked Songs",
        "method": "humm.songs.getStaffPicked()",
        "endpoint": "/songs/staffpicks",
        "usage": "Get a list of songs picked by staff at Humm",
        "returns": "songs"
    }
];

module.exports = {

    /**
     * TODO: server error
     * Get a list of songs featured by Humm
     *
     * @param options
     * @param cb
     */
    getFeatured: function getFeatured(options, cb) {
        var requestData = {
            url: baseURL + '/songs/featured',
            type: 'GET',
            params: {}
        };
        request.start(requestData, options, cb)
    },

    /**
     * Get a list of songs popular on Humm"
     *
     * @param options
     * @param cb
     */
    getPopular: function getPopular(options, cb) {
        var requestData = {
            url: baseURL + '/songs/popular',
            type: 'GET',
            params: {}
        };
        request.start(requestData, options, cb)
    },

    /**
     * Get a list of songs recently added on Humm
     *
     * @param options
     * @param cb
     */
    getRecent: function getRecent(options, cb) {
        var requestData = {
            url: baseURL + '/songs/recent',
            type: 'GET',
            params: {}
        };
        request.start(requestData, options, cb)
    },

    /**
     * TODO: spin v2
     * Search for a song
     *
     * @param keyword
     * @param options
     * @param cb
     */
    search: function search(keyword, options, cb) {
        var requestData = {
            url: baseURL + '/songs',
            type: 'GET',
            params: {
                keyword: keyword
            }
        };
        request.start(requestData, options, cb)
    },

    /**
     * Get a list of playlists a song appears in
     *
     * @param songId
     * @param options
     * @param cb
     */
    appearsIn: function appearsIn(songId, options, cb) {
        var requestData = {
            url: baseURL + '/songs/'+ songId +'/appearsin',
            type: 'GET',
            params: {}
        };
        request.start(requestData, options, cb)
    },

    //TODO: no idea what this end is
    route: function route(songId, cb) {

    },

    /**
     * Get a song by id
     *
     * @param songId
     * @param cb
     */
    get: function get(songId, cb){
        var requestData = {
            url: baseURL + '/songs/'+ songId,
            type: 'GET',
            params: {}
        };
        request.start(requestData, cb)
    },

    /**
     * Get a list of similar songs
     *
     * @param songId
     * @param options
     * @param cb
     */
    getSimilar: function getSimilar(songId, options, cb) {
        var requestData = {
            url: baseURL + '/songs/'+ songId + '/similar',
            type: 'GET',
            params: {}
        };
        request.start(requestData, options, cb)
    },

    /**
     * Get a list of songs picked by staff at Humm
     *
     * @param options
     * @param cb
     */
    getStaffPicks: function getStaffPicked(options, cb) {
        var requestData = {
            url: baseURL + '/songs/staffpicks',
            type: 'GET',
            params: {}
        };
        request.start(requestData, options, cb)
    }
};