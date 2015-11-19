# Humm JavaScript SDK

## Documentation

//TODO: Params & description
// A Handful of functionlity require a logged in user

#### Artists

- humm.artists.get()
- humm.artists.follow()
- humm.artists.unfollow()
- humm.artists.getPlaylists()
- humm.artists.getRadio()
- humm.artists.getSimilar()
- humm.artists.getRadio()
- humm.artists.getTopSongs()
- humm.artists.getFeatured()
- humm.artists.getPopular()
- humm.artists.unfollow()
- humm.artists.getRecentlyAdded()
- humm.artists.find()

#### Playlists

- humm.playlists.get()
- humm.playlists.create()
- humm.playlists.update()
- humm.playlists.getSongs()
- humm.playlists.addSong()
- humm.playlists.deleteSong()
- humm.playlists.reorderSongs()
- humm.playlists.addContributor()
- humm.playlists.deleteContributor()
- humm.playlists.subscribe()
- humm.playlists.unsubcribe()
- humm.playlists.getFeatured()
- humm.playlists.getPopular()
- humm.playlists.getRecentlyAdded()
- humm.playlists.getStaffPick()
- humm.playlists.find()

#### Songs

- humm.songs.get()
- humm.songs.getFeatured()
- humm.songs.getPopular()
- humm.songs.getRecent()
- humm.songs.find()
- humm.songs.getAppearsIn()
- humm.songs.getComments()
- humm.songs.getSimilar()
- humm.songs.getStaffPick()

#### Users

- humm.users.current()
- humm.users.get()
- humm.users.discoverAlbums()
- humm.users.discoverPlaylists()
- humm.users.discoverArtists()
- humm.users.follow()
- humm.users.unFollow()
- humm.users.getFollowing()
- humm.users.find()
- humm.users.getFavourite()
- humm.users.getMyPlaylists()
- humm.users.getPlaysHistory()
- humm.users.addSongPlaysHistory()

#### others
//TODO: Chat



## Building source

- `make build`

This will build and install node from source. Please be patient. :)

By default, the SDK is built into `build/sdk/sdk-VERSION.js`. Take a look at `webpack.config.js` for details.

### Building with the watcher

- `npm start`

This will run webpack with a watcher. The sdk will be rebuilt when you save changes in `src`.

In addition, webpack will start a development server on `http://localhost:8080/`. This serves the files in the `examples/` folder.
