'use strict';
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
    getFeatured: function getFeatured(cb) {

    },
    getPopular: function getPopular(cb) {

    },
    getRecent: function getRecent(cb) {

    },
    search: function search(text, cb) {

    },
    appearsIn: function appearsIn(songId, cb) {

    },
    route: function route(songId, cb) {

    },
    get: function get(songId){

    },
    getSimilar: function getSimilar(songId, cb) {

    },
    getStaffPicks: function getStaffPicked(cb) {


    }
};