//todo remove
var routes = [
    {
    "group": "Artists",
    "name": "Artist: Details",
    "method": "GET",
    "endpoint": "/artists/{id}",
    "usage": "Get an artist",
    "returns": "artist"
}, {
    "group": "Artists",
    "name": "Artist: Follower (Add)",
    "method": "POST",
    "endpoint": "/artists/{id}/followers",
    "usage": "Add current user to artist's list of followers",
    "returns": "artist"
}, {
    "group": "Artists",
    "name": "Artist: Follower (Remove)",
    "method": "DELETE",
    "endpoint": "/artists/{id}/followers",
    "usage": "Remove current user from artist's list of followers",
    "returns": "artist"
}, {
    "group": "Artists",
    "name": "Artist: Playlists / Albums",
    "method": "GET",
    "endpoint": "/artists/{id}/playlists",
    "usage": "Get playlists / albums associated with an artist",
    "returns": "playlists / albums"
}, {
    "group": "Artists",
    "name": "Artist: Radio",
    "method": "GET",
    "endpoint": "/artists/{id}/radio",
    "usage": "Get a curated list of artists songs",
    "returns": "songs"
}, {
    "group": "Artists",
    "name": "Artist: Similar",
    "method": "GET",
    "endpoint": "/artists/{id}/similar",
    "usage": "Get a list of musically similar artists",
    "returns": "artists"
}, {
    "group": "Artists",
    "name": "Artist: Top Songs",
    "method": "GET",
    "endpoint": "/artists/{id}/topsongs",
    "usage": "Get a list of an artist's top songs",
    "returns": "songs"
}, {
    "group": "Artists",
    "name": "Featured Artists",
    "method": "GET",
    "endpoint": "/artists/featured",
    "usage": "Get a list of artists featured by Humm",
    "returns": "artists"
}, {
    "group": "Artists",
    "name": "Popular Artists",
    "method": "GET",
    "endpoint": "/artists/popular",
    "usage": "Get a list of artists popular on Humm",
    "returns": "artists"
}, {
    "group": "Artists",
    "name": "Recent Artists",
    "method": "GET",
    "endpoint": "/artists/recent",
    "usage": "Get a list of artists recently added on Humm",
    "returns": "artists"
}, {
    "group": "Artists",
    "name": "Search Artists",
    "method": "GET",
    "endpoint": "/artists",
    "usage": "Search for an artist",
    "returns": "artists"
}, {
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
    "group": "Users",
    "name": "Subscriptions (Add)",
    "method": "POST",
    "endpoint": "/users/{id}/subscriptions",
    "usage": "Add user to the list current user has subscriptions to",
    "undefined": "Incorrect url"
}, {
    "group": "Users",
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
}, {
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
}, {
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
}, {
    "group": "Others",
    "name": "Other: Search",
    "method": "GET",
    "endpoint": "/search",
    "usage": "Search all",
    "returns": "*multiple"
}, {
    "group": "Others",
    "name": "Other: Radio",
    "method": "GET",
    "endpoint": "/radio",
    "usage": "Get a list of songs for a radio",
    "returns": "songs"
}, {
    "group": "Others",
    "name": "Other: Grouped-search",
    "method": "GET",
    "endpoint": "/grouped-search",
    "usage": "Search all grouped by type",
    "returns": "*multiple"
}, {
    "group": "External Services",
    "name": "External: Services (Add)",
    "method": "POST",
    "endpoint": "/services",
    "usage": "Add external service such as Twitter or Facebook"
}, {
    "group": "External Services",
    "name": "External: Services (Remove)",
    "method": "DELETE",
    "endpoint": "/services",
    "usage": "Remove external service such as Twitter of Facebook"
}, {
    "group": "Settings",
    "name": "Settings: Display",
    "method": "GET",
    "endpoint": "/settings/{id}",
    "usage": "Get user settings",
    "returns": "settings"
}, {
    "group": "Settings",
    "name": "Settings: Update",
    "method": "PATCH",
    "endpoint": "/settings/{id}",
    "usage": "Edit user settings",
    "returns": "settings"
}];