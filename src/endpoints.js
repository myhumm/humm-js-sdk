//todo remove
var routes = [
    {
        "group": "Artists",
        "name": "Artist: Details",
        "method": "humm.artists.get()",
        "endpoint": "/artists/{id}",
        "usage": "Get an artist",
        "returns": "artist"
    },
    {
        "group": "Artists",
        "name": "Artist: Follower (Add)",
        "method": "humm.artists.addFollowers()",
        "endpoint": "/artists/{id}/followers",
        "usage": "Add current user to artist's list of followers",
        "returns": "artist"
    },
    {
        "group": "Artists",
        "name": "Artist: Follower (Remove)",
        "method": "humm.artists.removeFollowers()",
        "endpoint": "/artists/{id}/followers",
        "usage": "Remove current user from artist's list of followers",
        "returns": "artist"
    },
    {
        "group": "Artists",
        "name": "Artist: Playlists / Albums",
        "method": "humm.artists.getPlaylists()",
        "endpoint": "/artists/{id}/playlists",
        "usage": "Get playlists / albums associated with an artist",
        "returns": "playlists / albums"
    },
    {
        "group": "Artists",
        "name": "Artist: Radio",
        "method": "humm.artists.getRadio()",
        "endpoint": "/artists/{id}/radio",
        "usage": "Get a curated list of artists songs",
        "returns": "songs"
    },
    {
        "group": "Artists",
        "name": "Artist: Similar",
        "method": "humm.artists.getSimilar()",
        "endpoint": "/artists/{id}/similar",
        "usage": "Get a list of musically similar artists",
        "returns": "artists"
    },
    {
        "group": "Artists",
        "name": "Artist: Top Songs",
        "method": "humm.artists.getTopSongs()",
        "endpoint": "/artists/{id}/topsongs",
        "usage": "Get a list of an artist's top songs",
        "returns": "songs"
    },
    {
        "group": "Artists",
        "name": "Featured Artists",
        "method": "humm.artists.getFeatured()",
        "endpoint": "/artists/featured",
        "usage": "Get a list of artists featured by Humm",
        "returns": "artists"
    },
    {
        "group": "Artists",
        "name": "Popular Artists",
        "method": "humm.artists.getPopular()",
        "endpoint": "/artists/popular",
        "usage": "Get a list of artists popular on Humm",
        "returns": "artists"
    },
    {
        "group": "Artists",
        "name": "Recent Artists",
        "method": "humm.artists.getRecent()",
        "endpoint": "/artists/recent",
        "usage": "Get a list of artists recently added on Humm",
        "returns": "artists"
    },
    {
        "group": "Artists",
        "name": "Search Artists",
        "method": "humm.artists.search()",
        "endpoint": "/artists",
        "usage": "Search for an artist",
        "returns": "artists"
    },
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
    },
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
    },
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
    {
        "group": "Others",
        "name": "Search",
        "method": "humm.others.search()",
        "endpoint": "/search",
        "usage": "Search all",
        "returns": "*multiple"
    },
    {
        "group": "Others",
        "name": "Radio",
        "method": "humm.others.radio()",
        "endpoint": "/radio",
        "usage": "Get a list of songs for a radio",
        "returns": "songs"
    },
    {
        "group": "Others",
        "name": "Grouped-search",
        "method": "humm.others.groupSearch()",
        "endpoint": "/grouped-search",
        "usage": "Search all grouped by type",
        "returns": "*multiple"
    },
    {
        "group": "External Services",
        "name": "External: Services (Add)",
        "method": "humm.external.addServices()",
        "endpoint": "/services",
        "usage": "Add external service such as Twitter or Facebook"
    },
    {
        "group": "External Services",
        "name": "External: Services (Remove)",
        "method": "humm.external.removeServices()",
        "endpoint": "/services",
        "usage": "Remove external service such as Twitter of Facebook"
    },
    {
        "group": "Settings",
        "name": "Settings: Display",
        "method": "humm.settings.get()",
        "endpoint": "/settings/{id}",
        "usage": "Get user settings",
        "returns": "settings"
    },
    {
        "group": "Settings",
        "name": "Settings: Update",
        "method": "humm.settings.update()",
        "endpoint": "/settings/{id}",
        "usage": "Edit user settings",
        "returns": "settings"
    }
];