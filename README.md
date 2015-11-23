# Humm JavaScript SDK
//TODO: store token for implicit grant



## Documentation
//TODO: Params & description

#### Artists

- humm.artists.get()
- humm.artists.addFollowers()
- humm.artists.removeFollowers()
- humm.artists.getPlaylists()
- humm.artists.getRadio()
- humm.artists.getSimilar()
- humm.artists.getTopSongs()
- humm.artists.getFeatured()
- humm.artists.getPopular()
- humm.artists.getRecent()
- humm.artists.search()

#### Playlists

- humm.playlists.create()
- humm.playlists.getFeatured()
- humm.playlists.addContributors()
- humm.playlists.removeContributors()
- humm.playlists.get()
- humm.playlists.update()
- humm.playlists.order()
- humm.playlists.getSongs()
- humm.playlists.addSongs()
- humm.playlists.removeSongs()
- humm.playlists.addSubscribers()
- humm.playlists.removeSubscribers()
- humm.playlists.getPopular()
- humm.playlists.getRecent()
- humm.playlists.search()
- humm.playlists.getStaffPicks()

#### Songs

- humm.songs.getFeatured()
- humm.songs.getPopular()
- humm.songs.getRecent()
- humm.songs.search()
- humm.songs.appearsIn()
- humm.songs.route()
- humm.songs.get()
- humm.songs.getSimilar()
- humm.songs.getStaffPicks

#### Users

- humm.users.me()
- humm.users.discoverReleases()
- humm.users.discoverArtists()
- humm.users.discoverPlaylists()
- humm.users.addFavourites()
- humm.users.addFollowing()
- humm.users.removeFollowing()
- humm.users.addPlays()
- humm.users.search()
- humm.users.addSubscriptions()
- humm.users.removeSubscriptions()
- humm.users.get()
- humm.users.getFavourites()
- humm.users.getFollowing()
- humm.users.getPlaylists()
- humm.users.getPlays()

#### external
- humm.external.addServices()
- humm.external.removeServices()

#### settings
- humm.settings.get()
- humm.settings.update()

#### others
- humm.search()
- humm.groupSearch()
- humm.radio()



## Building source

- `make build`

This will build and install node from source. Please be patient. :)

By default, the SDK is built into `build/sdk/sdk-VERSION.js`. Take a look at `webpack.config.js` for details.

### Building with the watcher

- `npm start`

This will run webpack with a watcher. The sdk will be rebuilt when you save changes in `src`.

In addition, webpack will start a development server on `http://localhost:8080/`. This serves the files in the `examples/` folder.
