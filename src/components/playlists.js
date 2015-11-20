'use strict';

//todo all
var playlistEnds = [
    {
        "group": "Playlists / Albums",
        "name": "Create Playlist",
        "method": "POST",
        "endpoint": "/playlists",
        "usage": "Add a playlist for the current user",
        "returns": "playlist"
    }, {
        "group": "Playlists / Albums",
        "name": "Featured Playlists",
        "method": "GET",
        "endpoint": "/playlists/featured",
        "usage": "Get a list of playlists featured by Humm",
        "returns": "playlists"
    }, {
        "group": "Playlists / Albums",
        "name": "Playlist: Contributors (Add)",
        "method": "POST",
        "endpoint": "/playlists/{id}/contributors",
        "usage": "Add a user to a playlist's list of contributors"
    }, {
        "group": "Playlists / Albums",
        "name": "Playlist: Contributors (Remove)",
        "method": "DELETE",
        "endpoint": "/playlists/{id}/contributors",
        "usage": "Remove a user from a playlist's list of contributors"
    }, {
        "group": "Playlists / Albums",
        "name": "Playlist: Songs",
        "method": "GET",
        "endpoint": "/playlists/{id}/songs",
        "usage": "Get a list of playlist songs",
        "returns": "songs"
    }, {
        "group": "Playlists / Albums",
        "name": "Playlist: Songs (Add)",
        "method": "POST",
        "endpoint": "/playlists/{id}/songs",
        "usage": "Add a song to a playlist"
    }, {
        "group": "Playlists / Albums",
        "name": "Playlist: Songs (Remove)",
        "method": "DELETE",
        "endpoint": "/playlists/{id}/songs",
        "usage": "Remove a song from a playlist"
    }, {
        "group": "Playlists / Albums",
        "name": "Playlist: Details",
        "method": "GET",
        "endpoint": "/playlists/{id}",
        "usage": "Get a playlist",
        "returns": "playlist"
    }, {
        "group": "Playlists / Albums",
        "name": "Playlist: Edit",
        "method": "PUT",
        "endpoint": "/playlists/{id}",
        "usage": "Edit a playlist",
        "returns": "playlist"
    }, {
        "group": "Playlists / Albums",
        "name": "Playlist: Order Songs",
        "method": "PUT",
        "endpoint": "/playlists/{id}/order",
        "usage": "Order the songs in a playlist",
        "returns": "playlist"
    }, {
        "group": "Playlists / Albums",
        "name": "Playlist: Subscriptions (Add)",
        "method": "POST",
        "endpoint": "/playlists/{id}/subscribers",
        "usage": "Add playlist to the list current user has subscriptions to"
    }, {
        "group": "Playlists / Albums",
        "name": "Playlist: Subscriptions (Remove)",
        "method": "DELETE",
        "endpoint": "/playlists/{id}/subscribers",
        "usage": "Remove playlist from the list current user has subscriptions to"
    }, {
        "group": "Playlists / Albums",
        "name": "Popular Playlists",
        "method": "GET",
        "endpoint": "/playlists/popular",
        "usage": "Get a list of playlists popular on Humm",
        "returns": "playlists"
    }, {
        "group": "Playlists / Albums",
        "name": "Recent Playlists",
        "method": "GET",
        "endpoint": "/playlists/recent",
        "usage": "Get a list of playlists recently added on Humm",
        "returns": "playlists"
    }, {
        "group": "Playlists / Albums",
        "name": "Search Playlists / Albums",
        "method": "GET",
        "endpoint": "/playlists",
        "usage": "Search Playlists",
        "returns": "playlists"
    }, {
        "group": "Playlists / Albums",
        "name": "Staff-picked Playlists",
        "method": "GET",
        "endpoint": "/playlists/staffpicks",
        "usage": "Get a list of playlists picked by staff at Humm",
        "returns": "playlists"
    }
];


module.exports = {
    get: function get(playlistId, cb) {

    },
    create: function create() {


    },
    update: function update() {


    },
    getSongs: function getSongs() {


    },
    addSong: function addSong() {


    },
    deleteSong: function addSong() {


    },
    orderSongs: function reorderSongs() {


    },
    addContributor: function addContributor(userId, cb) {


    },
    deleteContributor: function deleteContributor(userId, cb) {


    },
    subscribe: function sunscribe(playlistId, cb) {

    },
    unsubcribe: function unsubcribe(playlistId, cb) {

    },
    getFeatured: function getFeatured(cb) {


    },
    getPopular: function getPopular(cb) {

    },
    getRecentlyAdded: function getRecentlyAdded(cb) {

    },
    getStaffPick: function getStaffPick(cb) {


    },
    find: function find(text, cb) {

    }

};