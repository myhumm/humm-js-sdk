'use strict';

//todo all
var playlistEnds = [
    {
        "group": "Playlists / Albums",
        "name": "Create Playlist",
        "method": "POST",
        "endpoint": "/playlists/add",
        "usage": "Add a playlist for the current user"
        //todo TALK
    },
    {
        "group": "Playlists / Albums",
        "name": "Featured Playlists",
        "method": "GET",
        "endpoint": "/playlists/featured"
    },
    {
        "group": "Playlists / Albums",
        "name": "Playlist: Contributors (Add)",
        "method": "POST",
        "endpoint": "/playlists/{id}/addContributor"
    },
    {
        "group": "Playlists / Albums",
        "name": "Playlist: Contributors (Remove)",
        "method": "DELETE",
        "endpoint": "/playlists/{id}/deleteContributor"
    },
    {
        "group": "Playlists / Albums",
        "name": "Playlist: Songs (Add)",
        "method": "POST",
        "endpoint": "/playlists/{id}/addSong"
    },
    {
        "group": "Playlists / Albums",
        "name": "Playlist: Songs (Remove)",
        "method": "DELETE",
        "endpoint": "/playlists/{id}/deleteSong"
    },
    {
        "group": "Playlists / Albums",
        "name": "Playlist: Details",
        "method": "GET",
        "endpoint": "/playlists/{id}"
    },
    {
        "group": "Playlists / Albums",
        "name": "Playlist: Edit",
        "method": "PUT",
        "endpoint": "/playlists/{id}/update"
    },
    {
        "group": "Playlists / Albums",
        "name": "Playlist: Order Songs",
        "method": "PUT",
        "endpoint": "/playlists/{id}/reorder"
    },
    {
        "group": "Playlists / Albums",
        "name": "Playlist: Subscriptions (Add)",
        "method": "POST",
        "endpoint": "/playlists/{id}/follow"
    },
    {
        "group": "Playlists / Albums",
        "name": "Playlist: Subscriptions (Remove)",
        "method": "DELETE",
        "endpoint": "/playlists/PLAYLIST_ID/unfollow"
    },
    {
        "group": "Playlists / Albums",
        "name": "Popular Playlists",
        "method": "GET",
        "endpoint": "/playlists/popular"
    },
    {
        "group": "Playlists / Albums",
        "name": "Recent Playlists",
        "method": "GET",
        "endpoint": "/playlists/recent"
    },
    {
        "group": "Playlists / Albums",
        "name": "Search Playlists / Albums",
        "method": "GET",
        "endpoint": "/playlists"
    },
    {
        "group": "Playlists / Albums",
        "name": "Staff-picked Playlists",
        "method": "GET",
        "endpoint": "/playlists/staffpicks"
    }
];


module.exports = {
    create: function create(cb) {


    },
    getFeatured: function getFeatured(cb) {

    },
    addContributor: function addContributor(userId, cb) {


    },
    deleteContributor: function deleteContributor(userId, cb) {


    },
    //todo review more
    addSong: function addSong(playlistId, cb) {


    }

};