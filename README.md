# Humm JavaScript SDK
//TODO:
   1. complete others methods not yet docs
   2. test




#### Documentation

  $ npm install yumm --save

  or

  download the  yumm.js file from here {{link}}
  
#### Installation




#### Node.js Usage


#### Authentication
```javascript

humm.isAuthorised();

humm.authViaImplicitGrant(cb);

humm.authViaCodeGrant(cb);

humm.completeAuthorization(location);

humm.accessViaCodeGrant(code, cb);

humm.authViaClientCredentials(cb);

humm.refreshAccessToken(token, cb);

humm.setAccessToken(token);

```

#### Artists
```javascript

humm.get(artistId, cb);

humm.artists.addFollowers(artistId, cb);

humm.artists.removeFollowers(artistId, cb);

humm.artists.getPlaylists(artistId, options, cb);

humm.artists.getRadio(artistId, cb);

humm.artists.getSimilar(artistId, cb);

humm.artists.getTopSongs(artistId, options, cb);

humm.artists.getFeatured(options, cb);

humm.artists.getPopular(options, cb);

humm.artists.getRecent(options, cb);

humm.artists.search(keyword, options, cb);

```
#### Playlists

```javascript

humm.playlists.create(title, description, isPrivate, cb );

humm.playlists.getFeatured(options, cb);

humm.playlists.addContributors(playlistId, ContributorId, cb)

humm.playlists.removeContributors(playlistId, ContributorId, cb);

humm.playlists.get(playlistId, options, cb)

humm.playlists.update()

humm.playlists.order()

humm.playlists.getSongs(playlistId, options, cb);

humm.playlists.addSongs(playlistId, songId, position, cb);

humm.playlists.removeSongs(playlistId, songId, cb);

humm.playlists.addSubscribers(playlistId, cb);

humm.playlists.removeSubscribers(playlistId, cb);

humm.playlists.getPopular(options, cb);

humm.playlists.getRecent(options, cb);

humm.playlists.search(keyword, options, cb);

humm.playlists.getStaffPicks(options, cb);

```
#### Songs

```javascript

humm.songs.getFeatured(options, cb);

humm.songs.getPopular(options, cb);

humm.songs.getRecent(options, cb);

humm.songs.search(keyword, options, cb);

humm.songs.appearsIn(songId, options, cb);

humm.songs.route();

humm.songs.get(songId, cb);

humm.songs.getSimilar(songId, options, cb)

humm.songs.getStaffPicked(options, cb);

```
#### Users

```javascript

humm.users.me(cb);

humm.users.discoverReleases(options, cb);

humm.users.discoverArtists(options, cb);

humm.users.discoverPlaylists(options, cb);

humm.users.addFavourites(songId, cb);

humm.users.addFollowing(userId, cb);

humm.users.removeFollowing(userId, cb);

humm.users.addPlays(songId, cb);

humm.users.search(keyword, options, cb);

humm.users.addSubscriptions(playlistId, cb);

humm.users.removeSubscriptions(playlistId, cb);

humm.users.get(userId, cb);

humm.users.getFavourites(userId, cb);

humm.users.getFollowing(userId, cb);

humm.users.getPlaylists(userId, cb);

humm.users.getPlays(userId, cb);

```
#### external
- humm.external.addServices(service, sid, uname, token, secret, cb)
- humm.external.removeServices(service, sid, cb)

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
