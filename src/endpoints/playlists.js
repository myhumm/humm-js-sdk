'use strict';

var config  = require('../config'),
    request = require('../request'),
    baseURL = config.get('baseURL');

module.exports = {

    /**
     * Add a playlist for the current user
     *
     * @param title
     * @param description
     * @param options { private }
     * @param cb
     */
    create: function create(title, description, options, cb ) {
        var requestData = {
                url: baseURL + '/playlists',
                type: 'POST',
                params: {
                    title: title,
                    description: description
            }
        };
        request.start(requestData, options, cb);
    },

    /**
     * Get a list of playlists featured by Humm
     *
     * @param options { limit, offset }
     * @param cb
     */
    getFeatured: function getFeatured(options, cb) {
        var requestData = {
                url: baseURL + '/playlists/featured',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    },

    /**
     * Add a user to a playlist's list of contributorss
     *
     * @param playlistId
     * @param contributorId
     * @param cb
     */
    addContributors: function addContributors(playlistId, contributorId, cb) {
        var requestData = {
                url: baseURL + '/'+ playlistId +'/contributors',
                type: 'POST',
                params: {
                    contid: contributorId
            }
        };
        request.start(requestData, cb);
    },

    /**
     * Remove a user from a playlist's list of contributors
     *
     * @param playlistId
     * @param contributorId
     * @param cb
     */
    removeContributors: function removeContributors(playlistId, contributorId, cb) {
        var requestData = {
                url: baseURL + '/'+ playlistId +'/contributors',
                type: 'DELETE',
                params: {
                    contid: contributorId
            }
        };
        request.start(requestData, cb);
    },

    /**
     * Get a playlist
     *
     * @param playlistId
     * @param options
     * @param cb
     */
    get: function get(playlistId, cb) {
        var requestData = {
                url: baseURL + '/playlists/' + playlistId,
                type: 'GET',
                params: {}
        };
        request.start(requestData, cb);
    },


    /**
     * Edit a playlist
     *
     * @param playlistId
     * @param title
     * @param description
     * @param isPrivate
     * @param cb
     */
    update: function update(playlistId, title, description, isPrivate, cb) {
        var requestData = {
            url: baseURL + '/playlists/' + playlistId,
            type: 'PUT',
            params: {
                title: title,
                description: description,
                'private': isPrivate
            }
        };
        request.start(requestData, cb);
    },

    /**
     * Order the songs in a playlist
     *
     * @param playlistId
     * @param body
     */
    order: function order(playlistId, body) {
        var requestData = {
            url: baseURL + '/playlists/' + playlistId,
            type: 'PUT',
            params: {
                body: body
            }
        };
        request.start(requestData, cb);
    },

    /**
     * Get a list of playlist songs
     *
     * @param playlistId
     * @param options { limit, offset }
     * @param cb
     */
    getSongs: function getSongs(playlistId, options, cb) {
        var requestData = {
                url: baseURL + '/playlists/' + playlistId + '/songs',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
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
        request.start(requestData, cb);
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
        request.start(requestData, cb);
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
        request.start(requestData, cb);
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
        request.start(requestData, cb);
    },

    /**
     * Get a list of playlists popular on Humm
     *
     * @param options { limit, offset, section, uid }
     * @param cb
     */
    getPopular: function getPopular(options, cb) {
        var requestData = {
                url: baseURL + '/playlists/popular',
                type: 'GET',
                params: {}
        };
        request.start(requestData, options, cb);
    },

    /**
     * Get a list of playlists recently added on Humm
     *
     * @param options { limit, offset }
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
     * @param options { limit, offset, offset, album (bool) }
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
     * @param options { limit, offset }
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