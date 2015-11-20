'use strict';

//todo all users

var usersEnds = [
    {
        "group": "Users",
        "name": "Current User",
        "method": "humm.users.me()",
        "endpoint": "/users/me",
        "usage": "Get the current user",
        "returns": "user"
    },
    {
        "group": "Users",
        "name": "Discover Album Releases",
        "method": "humm.users.discoverReleases()",
        "endpoint": "/users/me/discover/releases",
        "usage": "Get a list of recommended albums",
        "returns": "albums"
    },
    {
        "group": "Users",
        "name": "Discover Artists",
        "method": "humm.users.discoverArtists()",
        "endpoint": "/users/me/discover/artists",
        "usage": "Get a list of recommended artists",
        "returns": "artists"
    },
    {
        "group": "Users",
        "name": "Discover Playlists / Albums",
        "method": "humm.users.discoverPlaylists()",
        "endpoint": "/users/me/discover/playlists",
        "usage": "Get a list of recommended playlists / albums",
        "returns": "playlists / albums"
    },
    {
        "group": "Users",
        "name": "Favourites (Add)",
        "method": "humm.users.addFavourites()",
        "endpoint": "/songs/{id}/favourites",
        "usage": "Add song to current user favourites",
        "returns": "song"
    },
    {
        "group": "Users",
        "name": "Following (Add User)",
        "method": "humm.users.addFollowing()",
        "endpoint": "/users/{id}/following",
        "usage": "Add user to the list current user is following",
        "returns": "user"
    },
    {
        "group": "Users",
        "name": "Following (Remove User)",
        "method": "humm.users.removeFollowing()",
        "endpoint": "/users/{id}/following",
        "usage": "Remove user from the list current user is following",
        "returns": "user"
    },
    {
        "group": "Users",
        "name": "Plays (Add)",
        "method": "humm.users.addPlays()",
        "endpoint": "/songs/{id}/plays",
        "usage": "Add song to the list of the current user's plays",
        "returns": "song"
    },
    {
        "group": "Users",
        "name": "Search Users",
        "method": "humm.users.search()",
        "endpoint": "/users",
        "usage": "Search for a user",
        "returns": "users"
    },
    {
        "group": "Users",
        "name": "Subscriptions (Add)",
        "method": "humm.users.addSubscriptions()",
        "endpoint": "/users/{id}/subscriptions",
        "usage": "Add user to the list current user has subscriptions to",
        "undefined": "Incorrect url"
    },
    {
        "group": "Users",
        "name": "Subscriptions (Remove)",
        "method": "humm.users.removeSubscriptions()",
        "endpoint": "/users/{id}/subscriptions",
        "usage": "Remove user from the list current user has subscriptions to",
        "undefined": "Incorrect url"
    },
    {
        "group": "Users",
        "name": "User: Details",
        "method": "humm.users.get()",
        "endpoint": "/users/{id}",
        "usage": "Get a user",
        "returns": "user"
    },
    {
        "group": "Users",
        "name": "User: Favourites",
        "method": "humm.users.getFavourites()",
        "endpoint": "/users/{id}/favourites",
        "usage": "Get a user's favourite songs",
        "returns": "songs"
    },
    {
        "group": "Users",
        "name": "User: Following",
        "method": "humm.users.getFollowing()",
        "endpoint": "/users/{id}/following",
        "usage": "Get a list of the users a user is following",
        "returns": "users"
    },
    {
        "group": "Users",
        "name": "User: Playlists",
        "method": "humm.users.getPlaylists()",
        "endpoint": "/users/{id}/playlists",
        "usage": "Get a list of user owned playlists",
        "returns": "playlists"
    },
    {
        "group": "Users",
        "name": "User: Plays",
        "method": "humm.users.getPlays()",
        "endpoint": "/users/{id}/plays",
        "usage": "Get a list of a user's plays",
        "returns": "songs"
    }
];

module.exports = {
    me: function me() {

    },
    discoverReleases: function discoverReleases(cb) {

    },
    discoverArtists: function discoverArtists(cb) {

    },
    discoverPlaylists: function discoverPlaylists(cb) {

    },
    addFavourites: function addFavourites(userId, cb) {

    },
    addFollowing: function addFollowing(userId, cb) {

    },
    removeFollowing: function removeFollowing(cb) {

    },
    addPlays: function addPlays(text, cb) {

    },
    search: function search(userId, cb) {

    },
    addSubscriptions: function addSubscriptions(cb) {

    },
    removeSubscriptions: function removeSubscriptions(cb) {

    },
    get: function get(cb) {

    },
    getFavourites: function getFavourites(songId, cb) {

    },
    getFollowing: function getFollowing(songId, cb) {

    },
    getPlays: function getPlays(songId, cb) {

    }
};