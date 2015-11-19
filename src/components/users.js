'use strict';

//todo all users

var usersEnds = [
    {
        "group": "Users",
        "name": "Current User",
        "method": "GET",
        "endpoint": "/users/me",
        "usage": "Get the current user",
        "returns": "user"
    }, {
        "group": "Users",
        "name": "Discover Album Releases",
        "method": "GET",
        "endpoint": "/users/me/discover/releases",
        "usage": "Get a list of recommended albums",
        "returns": "albums"
    }, {
        "group": "Users",
        "name": "Discover Artists",
        "method": "GET",
        "endpoint": "/users/me/discover/artists",
        "usage": "Get a list of recommended artists",
        "returns": "artists"
    }, {
        "group": "Users",
        "name": "Discover Playlists / Albums",
        "method": "GET",
        "endpoint": "/users/me/discover/playlists",
        "usage": "Get a list of recommended playlists / albums",
        "returns": "playlists / albums"
    }, {
        "group": "Users",
        "name": "Favourites (Add)",
        "method": "POST",
        "endpoint": "/songs/{id}/favourites",
        "usage": "Add song to current user favourites",
        "returns": "song"
    }, {
        "group": "Users",
        "name": "Following (Add User)",
        "method": "POST",
        "endpoint": "/users/{id}/following",
        "usage": "Add user to the list current user is following",
        "returns": "user"
    }, {
        "group": "Users",
        "name": "Following (Remove User)",
        "method": "DELETE",
        "endpoint": "/users/{id}/following",
        "usage": "Remove user from the list current user is following",
        "returns": "user"
    }, {
        "group": "Users",
        "name": "Search Users",
        "method": "GET",
        "endpoint": "/users",
        "usage": "Search for a user",
        "returns": "users"
    }, {
        "group": "Users", // todo include
        "name": "Subscriptions (Add)",
        "method": "POST",
        "endpoint": "/users/{id}/subscriptions",
        "usage": "Add user to the list current user has subscriptions to",
        "undefined": "Incorrect url"
    }, {
        "group": "Users", // todo include
        "name": "Subscriptions (Remove)",
        "method": "DELETE",
        "endpoint": "/users/{id}/subscriptions",
        "usage": "Remove user from the list current user has subscriptions to",
        "undefined": "Incorrect url"
    }, {
        "group": "Users",
        "name": "User: Details",
        "method": "GET",
        "endpoint": "/users/{id}",
        "usage": "Get a user",
        "returns": "user"
    }, {
        "group": "Users",
        "name": "User: Favourites",
        "method": "GET",
        "endpoint": "/users/{id}/favourites",
        "usage": "Get a user's favourite songs",
        "returns": "songs"
    }, {
        "group": "Users",
        "name": "User: Following",
        "method": "GET",
        "endpoint": "/users/{id}/following",
        "usage": "Get a list of the users a user is following",
        "returns": "users"
    }, {
        "group": "Users",
        "name": "User: Playlists",
        "method": "GET",
        "endpoint": "/users/{id}/playlists",
        "usage": "Get a list of user owned playlists",
        "returns": "playlists"
    }, {
        "group": "Users",
        "name": "User: Plays",
        "method": "GET",
        "endpoint": "/users/{id}/plays",
        "usage": "Get a list of a user's plays",
        "returns": "songs"
    }, {
        "group": "Users",
        "name": "Plays (Add)",
        "method": "POST",
        "endpoint": "/songs/{id}/plays",
        "usage": "Add song to the list of the current user's plays",
        "returns": "song"
    }
];

module.exports = {
    current: function current() {

    },
    get: function get(userId, cb) {

    },
    DiscoverAlbums: function DiscoverAlbums(cb) {

    },
    DiscoverPlaylists: function DiscoverPlaylists(cb) {

    },
    DiscoverArtists: function DiscoverArtists(cb) {

    },
    follow: function follow(userId, cb) {

    },
    unFollow: function unFollow(userId, cb) {

    },
    getFollowing: function getFollowing(cb) {

    },
    find: function unFollow(text, cb) {

    },
    getFavourite: function getFavourite(cb) {

    },
    getMyPlaylists: function getMyPlaylists(cb) {

    },
    getPlaysHistory: function getPlaysHistory(cb) {

    },
    addSongPlaysHistory: function addSongPlaysHistory(songId, cb) {

    }
};