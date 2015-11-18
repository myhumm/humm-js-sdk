'use strict';


//todo all ends
var artistEnds = [{
    "group": "Artists",
    "name": "Artist: Details",
    "method": "GET",
    "endpoint": "/artists/{id}",
    "usage": "Get an artist",
    "returns": "artist"
},
{
    "group": "Artists",
    "name": "Artist: Follower (Add)",
    "method": "POST",
    "endpoint": "/artists/{id}/followers",
    "usage": "Add current user to artist followers",
    "returns": "artist"
},
{
    "group": "Artists",
    "name": "Artist: Follower (Remove)",
    "method": "DELETE",
    "endpoint": "/artists/{id}/followers",
    "usage": "Remove current user from artist followers",
    "returns": "artist"
},
{
    "group": "Artists",
    "name": "Artist: Playlists / Albums",
    "method": "GET",
    "endpoint": "/artists/{id}/playlists",
    "usage": "Get playlists / albums associated with an artist",
    "returns": "playlists / albums"
},
{
    "group": "Artists",
    "name": "Artist: Radio",
    "method": "GET",
    "endpoint": "/artists/{id}/radio",
    "usage": "Get a curated list of artists songs",
    "returns": "songs"
},
{
    "group": "Artists",
    "name": "Artist: Similar",
    "method": "GET",
    "endpoint": "/artists/{id}/similar",
    "usage": "Get a list of musically similar artists",
    "returns": "artists"
},
{
    "group": "Artists",
    "name": "Artist: Top Songs",
    "method": "GET",
    "endpoint": "/artists/{id}/topsongs",
    "usage": "Get a list of an artist's top songs",
    "returns": "songs"
},
{
    "group": "Artists",
    "name": "Featured Artists",
    "method": "GET",
    "endpoint": "/artists/featured",
    "usage": "Get a list of artists featured by Humm",
    "returns": "artists"
},
{
    "group": "Artists",
    "name": "Popular Artists",
    "method": "GET",
    "endpoint": "/artists/popular",
    "usage": "Get a list of artists popular on Humm",
    "returns": "artists"
},
{
    "group": "Artists",
    "name": "Recent Artists",
    "method": "GET",
    "endpoint": "/artists/recent",
    "usage": "Get a list of artists recently added on Humm",
    "returns": "artists"
},
{
    "group": "Artists",
    "name": "Search Artists",
    "method": "GET",
    "endpoint": "/artists",
    "usage": "Search for an artist",
    "returns": "artists"
}

];

module.exports = {


};
