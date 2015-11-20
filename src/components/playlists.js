'use strict';

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
    },
];


module.exports = {
    create: function create() {


    },
    getFeatured: function getFeatured() {


    },
    addContributors: function addContributors() {


    },
    removeContributors: function removeContributors() {


    },
    get: function update() {


    },
    update: function update() {


    },
    order: function order() {


    },
    getSongs: function getSongs() {


    },
    addSongs: function addSongs() {


    },
    removeSongs: function removeSongs() {

    },
    addSubscribers: function addSubscribers() {

    },
    removeSubscribers: function removeSubscribers() {


    },
    getPopular: function getPopular() {

    },
    getRecent: function getRecent() {

    },
    search: function search() {

    },
    getStaffPicks: function getStaffPicks() {


    }
};