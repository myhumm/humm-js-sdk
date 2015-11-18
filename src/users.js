'use strict';

//todo all users

var usersEnds = [
    {
        "group": "Users",
        "name": "Featured Users",
        "method": "GET",
        "endpoint": "/users/featured",
        "usage": "Get a list of users featured by Humm",
        "returns": "users"
    },
    {
        "group": "Users",
        "name": "Following (Add User)",
        "method": "POST",
        "endpoint": "/users/{id}/following",
        "usage": "Add user to the list current user is following",
        "returns": "user"
    },
    {
        "group": "Users",
        "name": "Following (Remove User)",
        "method": "DELETE",
        "endpoint": "/users/{id}/following",
        "usage": "Remove user from the list current user is following",
        "returns": "user"
    },
    {
        "group": "Users",
        "name": "Popular Users",
        "method": "GET",
        "endpoint": "/users/popular",
        "usage": "Get a list of users popular on Humm",
        "returns": "users"
    },
    {
        "group": "Users",
        "name": "Recent Users",
        "method": "GET",
        "endpoint": "/users/recent",
        "usage": "Get a list of users recently added on Humm",
        "returns": "users"
    },
    {
        "group": "Users",
        "name": "Search Users",
        "method": "GET",
        "endpoint": "/users",
        "usage": "Search for a user",
        "returns": "users"
    },
    {
        "group": "Users",
        "name": "Subscriptions (Add)",
        "method": "POST",
        "endpoint": "/users/{id}/subscriptions",
        "usage": "Add playlist to the list current user has subscriptions to"
    },
    {
        "group": "Users",
        "name": "Subscriptions (Remove)",
        "method": "DELETE",
        "endpoint": "/users/{id}/subscriptions",
        "usage": "Remove playlist from the list current user has subscriptions to"
    },
    {
        "group": "Users",
        "name": "User: Comments",
        "method": "GET",
        "endpoint": "/users/{id}/comments",
        "usage": "Get user comments",
        "returns": "comments"
    },
    {
        "group": "Users",
        "name": "User: Details",
        "method": "GET",
        "endpoint": "/users/{id}",
        "usage": "Get a user"
    },
    {
        "group": "Users",
        "name": "User: Favourites",
        "method": "GET",
        "endpoint": "/users/{id}/favourites",
        "usage": "Get a user's favourite songs",
        "returns": "songs"
    },
    {
        "group": "Users",
        "name": "User: Following",
        "method": "GET",
        "endpoint": "/users/{id}/following",
        "usage": "Get a list of the users a user is following",
        "returns": "users"
    },
    {
        "group": "Users",
        "name": "User: Playlists",
        "method": "GET",
        "endpoint": "/users/{id}/playlists",
        "usage": "Get a list of user owned playlists",
        "returns": "playlists"
    },
    {
        "group": "Users",
        "name": "User: Plays",
        "method": "GET",
        "endpoint": "/users/{id}/plays",
        "usage": "Get a list of a user's plays",
        "returns": "songs"
    },
    {
        "group": "Users",
        "name": "User: Top Songs",
        "method": "GET",
        "endpoint": "/users/{id}/topsongs",
        "usage": "Get a list of a user's top songs",
        "returns": "songs"
    },
    {
        "group": "Users",
        "name": "Plays (Add)",
        "method": "POST",
        "endpoint": "/songs/{id}/plays",
        "usage": "Add song to the list of the current user's plays",
        "returns": "song"
    }
];

module.exports = {

};
