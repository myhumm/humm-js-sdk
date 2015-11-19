'use strict';
//todo ends
var songsEnds = [
    {
        "group": "Songs",
        "name": "Featured Songs",
        "method": "GET",
        "endpoint": "/songs/featured",
        "usage": "Get a llist of songs featured by Humm",
        "returns": "songs"
    }, {
        "group": "Songs",
        "name": "Popular Songs",
        "method": "GET",
        "endpoint": "/songs/popular",
        "usage": "Get a list of songs popular on Humm",
        "returns": "songs"
    }, {
        "group": "Songs",
        "name": "Recent Songs",
        "method": "GET",
        "endpoint": "/songs/recent",
        "usage": "Get a list of songs recently added on Humm",
        "returns": "songs"
    }, {
        "group": "Songs",
        "name": "Search Songs",
        "method": "GET",
        "endpoint": "/songs",
        "usage": "Search for a song",
        "returns": "songs"
    }, {
        "group": "Songs",
        "name": "Song: Appears In",
        "method": "GET",
        "endpoint": "/songs/{id}/appearsin",
        "usage": "Get a list of playlists a song appears in",
        "returns": "playlists"
    }, {
        "group": "Songs",
        "name": "Song: Route",
        "method": "GET",
        "endpoint": "/songs/{id}/route",
        "usage": "?",
        "returns": "?"
    }, {
        "group": "Songs",
        "name": "Song: Details",
        "method": "GET",
        "endpoint": "/songs/{id}",
        "usage": "Get a song",
        "returns": "song"
    }, {
        "group": "Songs",
        "name": "Song: Similar",
        "method": "GET",
        "endpoint": "/songs/{id}/similar",
        "usage": "Get a list of similar songs",
        "returns": "songs"
    }, {
        "group": "Songs",
        "name": "Staff-picked Songs",
        "method": "GET",
        "endpoint": "/songs/staffpicks",
        "usage": "Get a list of songs picked by staff at Humm",
        "returns": "songs"
    }
];

module.exports = {
    get: function get(songId){

    },
    getFeatured: function getFeatured(cb) {

    },
    getPopular: function getPopular(cb) {

    },
    getRecent: function getRecent(cb) {

    },
    find: function find(text, cb) {

    },
    getAppearsIn: function getAppearsIn(songId, cb) {

    },
    getComments: function getComments(songId, cb) {


    },
    getSimilar: function getSimilar(songId, cb) {

    },
    getStaffPick: function getStaffPick(cb) {


    }
};