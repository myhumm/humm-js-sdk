'use strict';

var config  = require('../config'),
    request = require('../request'),
    baseURL = config.get('baseURL');

module.exports = {

    /**
     * Get a list of songs featured by Humm
     *
     * @param options { limit, offset, genre }
     * @param cb
     */
    getFeatured: function getFeatured(options, cb) {
        var requestData = {
                url: baseURL + '/songs/featured',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    },

    /**
     * Get a list of songs popular on Humm"
     *
     * @param options { limit, offset, genre }
     * @param cb
     */
    getPopular: function getPopular(options, cb) {
        var requestData = {
                url: baseURL + '/songs/popular',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    },

    /**
     * Get a list of songs recently added on Humm
     *
     * @param options { limit, offset, genre }
     * @param cb
     */
    getRecent: function getRecent(options, cb) {
        var requestData = {
                url: baseURL + '/songs/recent',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    },

    /**
     * Search for a song
     *
     * @param keyword
     * @param options { limit, offset, songtype }
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
        request.start(requestData, options, cb);
    },

    /**
     * Get a list of playlists a song appears in
     *
     * @param songId
     * @param options { limit }
     * @param cb
     */
    appearsIn: function appearsIn(songId, options, cb) {
        var requestData = {
                url: baseURL + '/songs/'+ songId +'/appearsin',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
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
        request.start(requestData, cb);
    },

    /**
     * Get a list of similar songs
     *
     * @param songId
     * @param options { limit, offset }
     * @param cb
     */
    getSimilar: function getSimilar(songId, options, cb) {
        var requestData = {
                url: baseURL + '/songs/'+ songId + '/similar',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    }

/*    *//**
     * Get a list of songs picked by staff at Humm
     *
     * @param options { limit, offset, genre }
     * @param cb
     *//*
    getStaffPicks: function getStaffPicks(options, cb) {
        var requestData = {
                url: baseURL + '/songs/staffpicks',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    }*/
};